import { z } from "zod";

const volunteerRegistrationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Please enter your name (at least 3 characters)"),

  email: z.string().trim().email("Please enter a valid email"),

  phone_number: z.string().trim().min(11, "Please enter a valid phone number"),

  address: z.string().trim().min(1, "Please enter your address"),

  city: z.string().trim().min(1, "Please enter your city"),

  state: z.string().trim().min(1, "Please enter your state"),

  country: z.string().trim().min(1, "Please enter your country"),

  post_code: z.string().trim().min(1, "Please enter your postal code"),
});

export default volunteerRegistrationSchema;
