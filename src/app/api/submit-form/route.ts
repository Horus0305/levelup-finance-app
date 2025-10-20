import { NextRequest, NextResponse } from "next/server";
import { ContactFormData } from "@/lib/types/contact";
import { validateContactForm } from "@/lib/validations/contact";
import { appendToSheet, getTimestamp } from "@/lib/services/googleSheets";

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate form data
    const validation = validateContactForm(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: "Validation failed", errors: validation.errors },
        { status: 400 }
      );
    }

    // Get environment variables
    const googleServiceKey = process.env.GOOGLE_SERVICE_KEY;
    const sheetId = process.env.SHEET_ID;

    if (!googleServiceKey || !sheetId) {
      console.error("Missing environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Prepare submission data
    const submission = {
      ...body,
      timestamp: getTimestamp(),
    };

    // Append to Google Sheets
    await appendToSheet(submission, {
      serviceAccountKey: googleServiceKey,
      sheetId,
    });

    return NextResponse.json(
      { message: "Form submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { error: "Failed to submit form. Please try again." },
      { status: 500 }
    );
  }
}
