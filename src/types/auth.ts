import { z } from "zod";
import { signInSchema, signUpSchema } from "@/schemas/auth";

export type SignInForm = z.infer<typeof signInSchema>;
export type SignUpForm = z.infer<typeof signUpSchema>;
