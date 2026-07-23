const CONFIG = {
  spreadsheetId: '1kZKPslOLyuH9cm4Pc1UJYn77e3PwySRV31-7S6R1MDk',
  sheetName: 'Sheet1',
  companyRecipients: ['info@coreforgeindia.com'],
  companyName: 'CoreForge',
  companyEmail: 'info@coreforgeindia.com',
  websiteUrl: 'https://coreforgeindia.info',
}

const CONTACT_COLUMNS = [
  'timestamp',
  'referenceNo',
  'formType',
  'name',
  'email',
  'phone',
  'service',
  'message',
  'details',
  'mailToLeadSent',
  'mailToLeadSentAt',
  'mailToCompanySent',
  'mailToCompanySentAt',
  'mailStatus',
  'mailError',
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
    const statusCol = CONTACT_COLUMNS.indexOf('mailStatus')
    const leadSentCol = CONTACT_COLUMNS.indexOf('mailToLeadSent')
    const companySentCol = CONTACT_COLUMNS.indexOf('mailToCompanySent')

    const status = String(row[statusCol] || '')
    const leadSent = String(row[leadSentCol] || '').toUpperCase() === 'YES'
    const companySent = String(row[companySentCol] || '').toUpperCase() === 'YES'

    if (status !== 'SENT' || !leadSent || !companySent) {
      processRowMail_(sheet, rowNumber)
    }
  }
}

function generateReferenceNo_(sheet, timestamp) {
  const d = new Date(timestamp)
  const dd = String(d.getDate()).padStart(2, '0')
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const yy = String(d.getFullYear()).slice(-2)
  const prefix = 'CF' + dd + mm + yy

  const lastRow = sheet.getLastRow()
  let nextSeq = 1

  if (lastRow > 1) {
    const refCol = CONTACT_COLUMNS.indexOf('referenceNo') + 1
    const allRefs = sheet.getRange(2, refCol, lastRow - 1, 1).getValues()
    for (let i = allRefs.length - 1; i >= 0; i--) {
      const ref = String(allRefs[i][0] || '')
      if (ref.startsWith('CF') && ref.length >= 9) {
        const seqPart = ref.slice(-3)
        const parsed = parseInt(seqPart, 10)
        if (!isNaN(parsed)) {
          nextSeq = parsed + 1
          break
        }
      }
    }
  }

  return prefix + String(nextSeq).padStart(3, '0')
}

function processRowMail_(sheet, rowNumber) {
  const rowValues = sheet.getRange(rowNumber, 1, 1, CONTACT_COLUMNS.length).getValues()[0]
  const record = mapRowToObject_(rowValues, CONTACT_COLUMNS)

  let leadMailSent = String(record.mailToLeadSent || '').toUpperCase() === 'YES'
  let companyMailSent = String(record.mailToCompanySent || '').toUpperCase() === 'YES'
  let lastError = ''

  const leadSentColNum = CONTACT_COLUMNS.indexOf('mailToLeadSent') + 1
  const leadSentAtColNum = CONTACT_COLUMNS.indexOf('mailToLeadSentAt') + 1
  const companySentColNum = CONTACT_COLUMNS.indexOf('mailToCompanySent') + 1
  const companySentAtColNum = CONTACT_COLUMNS.indexOf('mailToCompanySentAt') + 1
  const mailStatusColNum = CONTACT_COLUMNS.indexOf('mailStatus') + 1
  const mailErrorColNum = CONTACT_COLUMNS.indexOf('mailError') + 1

  try {
    if (record.email && !leadMailSent) {
      sendLeadAcknowledgement_(record)
      sheet.getRange(rowNumber, leadSentColNum).setValue('YES')
      sheet.getRange(rowNumber, leadSentAtColNum).setValue(new Date())
      leadMailSent = true
    }

    if (!companyMailSent) {
      sendCompanyNotification_(record)
      sheet.getRange(rowNumber, companySentColNum).setValue('YES')
      sheet.getRange(rowNumber, companySentAtColNum).setValue(new Date())
      companyMailSent = true
    }

    sheet.getRange(rowNumber, mailStatusColNum).setValue(leadMailSent && companyMailSent ? 'SENT' : 'PARTIAL')
    sheet.getRange(rowNumber, mailErrorColNum).setValue('')
  } catch (error) {
    lastError = error.message
    sheet.getRange(rowNumber, mailStatusColNum).setValue('FAILED')
    sheet.getRange(rowNumber, mailErrorColNum).setValue(lastError)
  }
}

function appendContactRow_(sheet, payload) {
  const now = new Date()
  const refNo = generateReferenceNo_(sheet, now)

  const cleaned = {
    timestamp: now,
    referenceNo: refNo,
    formType: payload.formType || 'contact',
    name: payload.name || '',
    email: payload.email || '',
    phone: payload.phone || '',
    service: payload.service || '',
    message: payload.message || '',
    details: payload.details || '',
    mailToLeadSent: 'NO',
    mailToLeadSentAt: '',
    mailToCompanySent: 'NO',
    mailToCompanySentAt: '',
    mailStatus: 'PENDING',
    mailError: '',
  }

  const row = CONTACT_COLUMNS.map((column) => cleaned[column])
  sheet.appendRow(row)
  return sheet.getLastRow()
}

function sendLeadAcknowledgement_(record) {
  const isQuotation = record.formType === 'quotation'
  const subject = isQuotation
    ? `Your CoreForge Quotation Request Ref: ${record.referenceNo}`
    : `Thank You for Contacting CoreForge Ref: ${record.referenceNo}`

  const submittedLines = [
    `Name    : ${record.name || '-'}`,
    `Email   : ${record.email || '-'}`,
  ]
  if (record.phone) submittedLines.push(`Phone   : ${record.phone}`)
  if (record.service) submittedLines.push(`Service : ${record.service}`)
  const msgText = record.message || record.details
  if (msgText) submittedLines.push(`Message : ${msgText}`)

  const body = [
    `Dear ${record.name || 'there'},`,
    '',
    isQuotation
      ? 'Thank you for reaching out to CoreForge for a quotation. We have received your request and our team will review it promptly.'
      : 'Thank you for contacting CoreForge. We have received your enquiry and our team will get back to you shortly.',
    '',
    `Your Reference Number: ${record.referenceNo}`,
    '',
    '─────────────────────────────',
    'YOUR SUBMITTED DETAILS',
    '─────────────────────────────',
    ...submittedLines,
    '─────────────────────────────',
    '',
    'We will respond within 24–48 hours.',
    '',
    'Warm regards,',
    'CoreForge Engineering Lab',
    CONFIG.websiteUrl,
    'Email: ' + CONFIG.companyEmail,
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
  const subject = `[CoreForge] New ${record.formType || 'contact'} ${record.name || 'Unknown'} | Ref: ${record.referenceNo}`

  const body = [
    `New ${record.formType || 'contact'} submission received.`,
    '',
    `Reference No : ${record.referenceNo || '-'}`,
    `Timestamp    : ${record.timestamp || new Date()}`,
    `Name         : ${record.name || '-'}`,
    `Email        : ${record.email || '-'}`,
    `Phone        : ${record.phone || '-'}`,
    `Service      : ${record.service || '-'}`,
    '',
    'Message / Details:',
    record.message || record.details || '-',
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
    const existing = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    if (existing.join(',') !== headers.join(',')) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers])
    }
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
