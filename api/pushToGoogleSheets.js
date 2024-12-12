
const GOOGLE_SERVICE_ACCOUNT_KEY = {
    "type": "service_account",
    "project_id": "centered-flow-444521-m2",
    "private_key_id": "0a074cf2fe7fbabb5c579f259bcc6af51436262d",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQCuSZT5pfwqG0KG\nyp+s8RJl0uL4CKgYrrU6M/1EC/4IPKbRHsqqf7+s39Om41gq7i+cKpcntlzXImtq\nzjwXWfn/ySVP2kztCDfoauqpoF6ylOgkAEZyl2x0Kg6+14MCiRZtJkzp0s6P6evw\nLlTQ5xcyW4wG+RbjYc/QLinf5f6LERoXGkq77HULk8GKeS+sLQQLqi3JMCfCfRay\nKrXVtwopw5Am0jfZSGW2guXolfUsYtA4xVlZFzZPSbsK8lQl6xkQafNqRucpH3iI\nKuP0r1YnaQzghAT4BRbNYPZjKzcshtMjyoqNpYGTjRU3g0cfgMaaDz0sYtR9Jqg8\nsI3IjsVZAgMBAAECggEADD5nFNKwUFTx6344kXGuFTEneL1C8dj0Kk6UsD8XbYS1\nQ2OiYS/wSzi+Ka829m0dMx9a1xNcmlB0s2AhoJJVmb6LvHxdgxlctBsuuRPnEyya\n0kyiplI08EQ0HPwO3BK9XJWgOZzxnfKU/J6EnthdLNB5mdPN49NvQfS8RFpn82T2\newCJ2XPZMz3x3lAPuH8XRLuVuuMTACECqSy43gfusb3qo35gjqL8lBnCOoVihoNW\nhhS5Zq495/D+hlM3Aw/UbNNRX0GMKVDR3mX/8gQGR/s9wm6LtSJWZmdPMtKGZayp\nbIIYfozmdOWwNNgNDzAhFfhazra1T+18FB5BDykwwQKBgQDZ2Uv7bge/y0cBrl8K\n64+liJtTwzQmsGdzjS6NsbsAyYCO4vGFOzXUto4yjrKhtc1w18yH+5h2eehD9SCs\nhlMl2nudxNOEbggXMvqCeAXmGf2hVaeB98n44FwaS2i35c63HSitmsjlHo8fVUva\nr5rZoMzMw4C8DU0kTWHdnZrBXQKBgQDMz1HuqlLg5Sg2K56XCveu0EzEwah+VbK6\n0kfjCerezTYVbTDDr+QgEEjd0R/DyeK3J2h/xZr2phFCMDCNQHbWtH/k9gZvP9GW\nT6LLWxQuN5gHXM3vjq93S6w/1rf50OQypa+Y2op74mmMUWjqlsE2QQUCXa2aoC5B\nV+9tzzFoLQJ/AbOw5EX3yYfNBjZWh79PX/uxOvZLcgHuzPhNZM3+qALq/jLHsELG\nKONEOSDkRF8nO7pz3pwYlNRe/CjuGGr0O1d5n8Hp5R728Td0vZAye5m4YYpJxLoq\n2cbm8U2lg8pH0yZnKvQKnb+fXp9L+GlmzEx1TSQ53T49XAs+uHyCuQKBgQDFnajd\nk0RisVnKYu4jqTZxW5UnKACu3XuV3X31aEVSc0kjBXdO6bFA6tWUCcsPfAWgWYrv\n9jfek0AF0D+Ym0HPStw4jNaKk1ZkJTTb6GahbYzoVbhy1AckIUTzV/euOMtmvw2e\nfAexHzZeaNLFv25wLe5qaP8wOixHalSgbJGshQKBgA9vWIAGUUy8eRVOUHgA+J5R\nncyfEBfit8MLaGa+hc05EKIhviN9eT8gxgTvGgpN8mec6PMQl9JMuhJnpqNgEAx/\nCsdHVWBr1vowL7dqGTfELxnEpKLyZvFbnjssEvd1sjrNbp5PiBWUsGG/LEGjbe1x\nt2uNY4QyOnUOTOV4NNTA\n-----END PRIVATE KEY-----\n",
    "client_email": "elwaeed@centered-flow-444521-m2.iam.gserviceaccount.com",
    "client_id": "110034287499647966398",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/elwaeed%40centered-flow-444521-m2.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }
  

import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send({ error: 'Method not allowed' });
  }

  try {
    // Load the credentials JSON file
    const credentials = GOOGLE_SERVICE_ACCOUNT_KEY
    // Configure the JWT client
    const client = new google.auth.JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Authorize the client
    await client.authorize();

    // Get the Sheets API
    const sheets = google.sheets({ version: 'v4', auth: client });

    // Define the spreadsheet ID and range
    const spreadsheetId = '1joyayGEzMrRkNxEHc9PcqLnCMn2RrMzYjLEeFALFQhI';
    const range = 'Sheet1!A1'; // Replace with your sheet name and range

    // Data to be appended
    const values = [[req.body.name, req.body.email, req.body.message]];

    // Append the data
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: { values },
    });

    res.status(200).send({ success: true, message: 'Row added successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, error: error.message });
  }
}