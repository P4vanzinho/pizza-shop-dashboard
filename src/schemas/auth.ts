import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
});

export const signUpSchema = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
});
