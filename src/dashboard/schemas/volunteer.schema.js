import { z } from "zod";

const volunteerRegistrationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Please enter your name (at least 3 characters)"),
});

export default volunteerRegistrationSchema;
