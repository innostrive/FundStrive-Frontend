import { z } from "zod";

const categorySchema = z.object({
  name: z.string().min(3, "Please enter your name (at least 3 characters)"),

  description: z.string().min(3, "Please type description"),

  image: z.string().min(3, "Please upload image"),
});

export default categorySchema;
