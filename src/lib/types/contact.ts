/**
 * Contact form data types
 */

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export interface ContactFormSubmission extends ContactFormData {
  timestamp: string;
}

export interface ApiResponse {
  message?: string;
  error?: string;
}
