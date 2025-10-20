/**
 * Google Sheets service for managing form submissions
 */

import { google } from "googleapis";
import { ContactFormSubmission } from "@/lib/types/contact";

/**
 * Configuration for Google Sheets service
 */
interface GoogleSheetsConfig {
  serviceAccountKey: string;
  sheetId: string;
  sheetName?: string;
}

/**
 * Initializes Google Sheets API client
 */
function initializeSheetsClient(serviceAccountKey: string) {
  const credentials = JSON.parse(serviceAccountKey);
  
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

/**
 * Appends a contact form submission to Google Sheets
 */
export async function appendToSheet(
  data: ContactFormSubmission,
  config: GoogleSheetsConfig
): Promise<void> {
  const sheets = initializeSheetsClient(config.serviceAccountKey);
  const sheetName = config.sheetName || "Sheet1";

  const values = [
    [
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.message || "",
    ],
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: config.sheetId,
    range: `${sheetName}!A:E`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values,
    },
  });
}

/**
 * Gets the current timestamp in IST format
 */
export function getTimestamp(): string {
  return new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });
}
