const LEADS_CONFIG = {
  spreadsheetId: '1fQRinv2IqgCF02eajIz3sAqfDUf3rQm4vHKxtoS5tmY',
  sheetName: 'Sheet1',
}

const LEADS_COLUMNS = [
  'timestamp',
  'eventType',
  'sessionId',
  'cookiePreference',
  'page',
  'referrer',
  'utmSource',
  'utmMedium',
  'utmCampaign',
  'deviceType',
  'browser',
  'language',
  'screenWidth',
  'screenHeight',
  'timeOnPage',
  'formName',
  'leadEmail',
  'leadName',
  'metadataJson',
]

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents)
    const sheet = getOrCreateLeadSheet_()
    const row = LEADS_COLUMNS.map((column) => {
      if (column === 'timestamp') return new Date()
      if (column === 'metadataJson') return JSON.stringify(payload.metadata || payload)
      return payload[column] || ''
    })

    sheet.appendRow(row)
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, message: error.message })).setMimeType(ContentService.MimeType.JSON)
  }
}

function getOrCreateLeadSheet_() {
  const spreadsheet = SpreadsheetApp.openById(LEADS_CONFIG.spreadsheetId)
  const sheet = spreadsheet.getSheetByName(LEADS_CONFIG.sheetName) || spreadsheet.insertSheet(LEADS_CONFIG.sheetName)

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(LEADS_COLUMNS)
  } else {
    sheet.getRange(1, 1, 1, LEADS_COLUMNS.length).setValues([LEADS_COLUMNS])
  }

  return sheet
}
