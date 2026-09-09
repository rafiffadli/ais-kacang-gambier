import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(100, { message: "Name cannot exceed 100 characters." }),
  email: z
    .string()
    .min(1, { message: "Email address is required." })
    .email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(8, { message: "Please enter a valid phone number (e.g., 012-3456789)." })
    .regex(/^[+0-9\s-]{8,20}$/, {
      message: "Phone number may only contain digits, spaces, hyphens, and +.",
    }),
  inquiryType: z.enum(
    ["general", "catering", "group_visit", "feedback", "bulk_gula_apong"],
    {
      errorMap: () => ({ message: "Please select an inquiry type." }),
    }
  ),
  estimatedGuests: z.string().optional(),
  eventDate: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Your message must contain at least 10 characters." })
    .max(1000, { message: "Your message cannot exceed 1000 characters." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
