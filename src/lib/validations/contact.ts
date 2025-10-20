/**
 * Contact form validation utilities
 */

import { ContactFormData } from "@/lib/types/contact";

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

/**
 * Validates contact form data
 */
export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  // Name validation
  if (!data.name || data.name.trim().length === 0) {
    errors.name = "Name is required";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  // Email validation
  if (!data.email || data.email.trim().length === 0) {
    errors.email = "Email is required";
  } else if (!isValidEmail(data.email)) {
    errors.email = "Invalid email format";
  }

  // Phone validation
  if (!data.phone || data.phone.trim().length === 0) {
    errors.phone = "Phone number is required";
  } else if (!isValidPhone(data.phone)) {
    errors.phone = "Invalid phone number format";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validates email format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates phone number format (supports various formats)
 */
function isValidPhone(phone: string): boolean {
  // Remove spaces, dashes, parentheses, and plus signs
  const cleaned = phone.replace(/[\s\-()+ ]/g, "");
  
  // Check if it contains only digits and has a reasonable length (7-15 digits)
  const phoneRegex = /^\d{7,15}$/;
  return phoneRegex.test(cleaned);
}
