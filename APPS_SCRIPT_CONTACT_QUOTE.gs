const CONFIG = {
  spreadsheetId: '1kZKPslOLyuH9cm4Pc1UJYn77e3PwySRV31-7S6R1MDk',
  sheetName: 'Sheet1',
  companyRecipients: ['fgdhanush@gmail.com', 'coreforge.in@gmail.com'],
  companyName: 'CoreForge',
  companyEmail: 'coreforge.in@gmail.com',
  websiteUrl: 'https://coreforgeindia.info',
}

const CONTACT_COLUMNS = [
  'timestamp',
  'formType',
  'name',
  'email',
  'phone',
  'service',
  'message',
  'details',
  'sourcePage',
  'mailToLeadSent',
  'mailToLeadSentAt',
  'mailToCompanySent',
  'mailToCompanySentAt',
  'mailStatus',
  'mailError',
  'payloadJson',
]

function doPost(e) {
  try {
    const payload = parseJson_(e)
    const sheet = getOrCreateSheet_(CONFIG.spreadsheetId, CONFIG.sheetName, CONTACT_COLUMNS)
    const rowNumber = appendContactRow_(sheet, payload)
    processRowMail_(sheet, rowNumber)

    return jsonResponse_({
      ok: true,
      rowNumber,
      message: 'Saved successfully',
    })
  } catch (error) {
    return jsonResponse_({
      ok: false,
      message: error.message,
    })
  }
}

function resendPendingEmails() {
  const sheet = getOrCreateSheet_(CONFIG.spreadsheetId, CONFIG.sheetName, CONTACT_COLUMNS)
  const values = sheet.getDataRange().getValues()

  for (let i = 1; i < values.length; i += 1) {
    const rowNumber = i + 1
    const row = values[i]
    const status = String(row[13] || '')
    const leadSent = String(row[9] || '').toUpperCase() === 'YES'
    const companySent = String(row[11] || '').toUpperCase() === 'YES'

    if (status !== 'SENT' || !leadSent || !companySent) {
      processRowMail_(sheet, rowNumber)
    }
  }
}

function processRowMail_(sheet, rowNumber) {
  const rowValues = sheet.getRange(rowNumber, 1, 1, CONTACT_COLUMNS.length).getValues()[0]
  const record = mapRowToObject_(rowValues, CONTACT_COLUMNS)

  let leadMailSent = String(record.mailToLeadSent || '').toUpperCase() === 'YES'
  let companyMailSent = String(record.mailToCompanySent || '').toUpperCase() === 'YES'
  let lastError = ''

  try {
    if (record.email && !leadMailSent) {
      sendLeadAcknowledgement_(record)
      sheet.getRange(rowNumber, 10).setValue('YES')
      sheet.getRange(rowNumber, 11).setValue(new Date())
      leadMailSent = true
    }

    if (!companyMailSent) {
      sendCompanyNotification_(record)
      sheet.getRange(rowNumber, 12).setValue('YES')
      sheet.getRange(rowNumber, 13).setValue(new Date())
      companyMailSent = true
    }

    sheet.getRange(rowNumber, 14).setValue(leadMailSent && companyMailSent ? 'SENT' : 'PARTIAL')
    sheet.getRange(rowNumber, 15).setValue('')
  } catch (error) {
    lastError = error.message
    sheet.getRange(rowNumber, 14).setValue('FAILED')
    sheet.getRange(rowNumber, 15).setValue(lastError)
  }
}

function appendContactRow_(sheet, payload) {
  const cleaned = {
    timestamp: new Date(),
    formType: payload.formType || 'contact',
    name: payload.name || '',
    email: payload.email || '',
    phone: payload.phone || '',
    service: payload.service || '',
    message: payload.message || '',
    details: payload.details || '',
    sourcePage: payload.sourcePage || '',
    mailToLeadSent: 'NO',
    mailToLeadSentAt: '',
    mailToCompanySent: 'NO',
    mailToCompanySentAt: '',
    mailStatus: 'PENDING',
    mailError: '',
    payloadJson: JSON.stringify(payload),
  }

  const row = CONTACT_COLUMNS.map((column) => cleaned[column])
  sheet.appendRow(row)
  return sheet.getLastRow()
}

function sendLeadAcknowledgement_(record) {
  const subject =
    record.formType === 'quotation'
      ? 'CoreForge quotation request received'
      : 'CoreForge contact request received'

  const body = [
    `Hi ${record.name || 'there'},`,
    '',
    'We have received your request successfully.',
    '',
    record.formType === 'quotation'
      ? 'Our team has received your quotation request and we will get back to you soon with the next steps.'
      : 'Our team has received your message and we will get back to you soon.',
    '',
    'Submitted details:',
    `Name: ${record.name || '-'}`,
    `Email: ${record.email || '-'}`,
    `Phone: ${record.phone || '-'}`,
    `Service: ${record.service || '-'}`,
    `Message: ${record.message || record.details || '-'}`,
    '',
    `Website: ${CONFIG.websiteUrl}`,
    '',
    `Regards,`,
    `${CONFIG.companyName}`,
  ].join('\n')

  MailApp.sendEmail({
    to: record.email,
    subject,
    body,
    replyTo: CONFIG.companyEmail,
    name: CONFIG.companyName,
  })
}

function sendCompanyNotification_(record) {
  const subject = `[${CONFIG.companyName}] New ${record.formType || 'contact'} submission from ${record.name || 'Unknown'}`
  const body = [
    `A new ${record.formType || 'contact'} submission has been received.`,
    '',
    `Timestamp: ${record.timestamp || new Date()}`,
    `Name: ${record.name || '-'}`,
    `Email: ${record.email || '-'}`,
    `Phone: ${record.phone || '-'}`,
    `Service: ${record.service || '-'}`,
    `Source Page: ${record.sourcePage || '-'}`,
    '',
    'Submitted content:',
    record.message || record.details || '-',
    '',
    `Payload JSON: ${record.payloadJson || '-'}`,
  ].join('\n')

  MailApp.sendEmail({
    to: CONFIG.companyRecipients.join(','),
    subject,
    body,
    replyTo: record.email || CONFIG.companyEmail,
    name: CONFIG.companyName,
  })
}

function getOrCreateSheet_(spreadsheetId, sheetName, headers) {
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId)
  const sheet = spreadsheet.getSheetByName(sheetName) || spreadsheet.insertSheet(sheetName)

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers)
  } else {
    const headerRange = sheet.getRange(1, 1, 1, headers.length)
    headerRange.setValues([headers])
  }

  return sheet
}

function parseJson_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error('No payload received')
  }

  return JSON.parse(e.postData.contents)
}

function mapRowToObject_(row, headers) {
  return headers.reduce((acc, header, index) => {
    acc[header] = row[index]
    return acc
  }, {})
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON)
}
