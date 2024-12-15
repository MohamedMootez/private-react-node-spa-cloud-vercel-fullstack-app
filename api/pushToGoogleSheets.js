import { google } from "googleapis";
import formidable from "formidable";
import fs from "fs";

// Google service account credentials
const GOOGLE_SERVICE_ACCOUNT_KEY = {
  "type": "service_account",
  "project_id": "centered-flow-444521-m2",
  "private_key_id": "1ee4ae97bc55c519b522ddff31077690d80195bb",
  "private_key": `-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDaCyxBfdS7R5OA\n55FshgdJjBv/cZ67zudam40ufckvZvM1OUtQugC187YMKIZj9rOdAHETDG57d0aU\n5HGR/btAcd4qSw2vZ9ai0rdjvnMv5yxhbr/CMuNzTZJ5rypn4CUj4GMO89w/l/BJ\nHvy9oFpj9tQ1KWQIxelWYXyUUURuQnXzFBmGfHSUaipK1IHLzsY30xrcN8bNr5BP\n7hELQA2HrOI+fjVcOJ/OZrePF72OCtlS9/u8x8wPuE8AOl0NrAzcIdGGP2ldaADM\n2mi8HExZCz9mwLw3o8xBe6lWdb7JMfSnqAe0bY5zsVb51eNzwJPKnXKNb4LTArw8\nXeyjhGHhAgMBAAECggEAKIXzD6jnJHdE/qwK5vRx3kVf3rWrHpRxgvFt57oQ7fJg\nOQAQ80veXfKRXukZMPLkpsUyPqwMzH16bKmYQd26M1v2Qj34qSTPSyuGUc9PcROx\nt9nxYZI7m25LTrozU2LhBC3ruxevU1JVogFUT5nBstpozgiHQuolV5x+nsILycHQ\ndXUb6zebWPxSVRpUY9Nn+oG+P9100I6GBWTuPvEc79VtCq1Tl3apRxl2keo+oOtg\nL5rntwlqr6ADTWa6fD+rL6UA7L4Yjlr2MOHS2vPrl41qd5Y9KhX3CEmnkxVD2dWa\nYh1K0cxQMH0Fv0fkfUNbfj6gK9b6ln5LSICUY4zHkQKBgQDzt3qMg2r8Axc43ZkC\nweCk4rlsYh2lIa1Iplul+CtxGuJGc+aKI4skkSdhoY6IkyursIuJowMbgWPOU3fU\nCJT/l7TeG5Dh5keeU7sK7UpsQzr69Pjtr8lfR+gulXNbToFilndRuQd77u/uKkKg\nRe+KN1Tn3bkEkK+zeyQLsKZnswKBgQDlCHNv6od0WgLrrgnHNigPYoQEXXCLI+jr\nhVvc6TnbixeEKjeGzS+cExHRRmIaGCu+rjZ8URBnDhAsqC1kuOAUmJPyyqD3WyP9\nAE92FqSsz+2mc52ArEZZ19lDKqul/9RherUwaQwSwQKEt2l7vDz4ZBMFYUqT1a85\nX7SFebHGGwKBgQCoWx604jONUzU/exSv6u4b+OLOFBkWcWUawpCc3gpkX4Xf1UB0\nPIlqATuLHecwQTnxqEs8EPeckI05gj9MoYEL7uhqZfB3nHPs0zpqGfFHSEn+AivT\nRZN91lZ1l5fQgzKtv/M86OxamHv1sgvEW4tVl1N3uJqOpMQ6393OlYDeMQKBgBe8\ncHpAzBj62yKhvtGugyhVBWmOZYOGDTWbdJHIef6Ow7kmxuppiW2bbFVL/g7GQoJY\ne70WiaSkiHiYVVwC7PY1ed/HsDbycyBdT97lKdvfELoXcVNMh134SMP1QCTMBq6z\nkOObf2zSI/itKXlxYMA9XttH4frAQpCnooXSvuHRAoGBAN56nAHA033WjOMMguiu\n0asf/gsXk5aGMab2s0dzZb8U9xrpXIlk9puaXAWbFJj7+fmRDRY9h7YqpLhwzxsW\ntCRELUwu9Gihf9Cl/sWe9K0yuUerI4y0QZbuLwhsJfvcRoWC0/AD31kFah/SzNUR\nG9eiDKo8ilsu4hfEOd17Gd7F\n-----END PRIVATE KEY-----\n`,
  "client_email": "elwaeed@centered-flow-444521-m2.iam.gserviceaccount.com",
  "client_id": "110034287499647966398",
};

export const config = {
  api: {
    bodyParser: false, // Disable default body parser for handling file uploads
  },
};

// Helper to parse form and flatten fields
const parseForm = (req) =>new Promise((resolve, reject) => {
    const form = formidable({ keepExtensions: true });
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);

      // Flatten fields
      const flattenedFields = Object.fromEntries(
        Object.entries(fields).map(([key, value]) => [key, Array.isArray(value) ? value[0] : value])
      );
// theres reject, when you want to reject, or you say resolve which returns something good
      resolve({ fields: flattenedFields, files });
    });
  });

// Helper function to upload a file to Google Drive
const uploadFileToDrive = async (auth, file) => {
  const drive = google.drive({ version: "v3", auth });

  const fileMetadata = {
    name: file.originalFilename, // File name in Google Drive
    parents: ["1WX41TqsqIeoQO7jC2vrgimiHUBjMr0qR"], // Replace with your Drive folder ID
  };

  const media = {
    mimeType: file.mimetype,
    body: fs.createReadStream(file.filepath), // Read the file from its temporary location
  };

  const response = await drive.files.create({
    resource: fileMetadata,
    media: media,
    fields: "id, name, mimeType, webViewLink",
  });

  return response.data; // Returns file details
};

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    // Parse form data
    const { fields, files } = await parseForm(req);

    if (!files.file || !Array.isArray(files.file) || files.file.length === 0) {
      return res.status(400).json({ error: "No file uploaded." });
    }

    const uploadedFile = files.file[0]; // Get the first uploaded file

    console.log(`File path: ${uploadedFile.filepath}`);
    console.log(`Original filename: ${uploadedFile.originalFilename}`);
    console.log(`MIME type: ${uploadedFile.mimetype}`);
    console.log(`File size: ${uploadedFile.size} bytes`);

    const { name, email, text } = fields;

    if (!name || !email || !text) {
      return res.status(400).json({ error: "Missing required fields: name, email, or text." });
    }

    // Authenticate with Google API for both Drive and Sheets
    const auth = new google.auth.JWT({
      email: GOOGLE_SERVICE_ACCOUNT_KEY.client_email,
      key: GOOGLE_SERVICE_ACCOUNT_KEY.private_key,
      scopes: [
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const driveResponse = await uploadFileToDrive(auth, uploadedFile);
    console.log("File uploaded to Google Drive:", driveResponse);

    // Append data to Google Sheets
    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = "1joyayGEzMrRkNxEHc9PcqLnCMn2RrMzYjLEeFALFQhI"; // Replace with your Sheet ID
    const range = "Sheet1!A:D"; // Adjust the range to match your fields

    const values = [[name, email, text, driveResponse.webViewLink]];
    console.log("Appending values to Google Sheets:", values);

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      resource: { values },
    });

    console.log("Row added successfully.");

    // Upload the file to Google Drive



    // Respond with success and file details
    res.status(200).json({
      success: true,
      message: "File uploaded and data appended successfully!",
      driveFileDetails: driveResponse,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}
