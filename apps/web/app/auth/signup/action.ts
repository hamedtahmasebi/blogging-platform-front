"use server";

import { signIn } from "@/auth";
import { createServerApiClient } from "@/lib/api";
import { AuthError } from "next-auth";
import { z } from "zod";

export default async function signupAction(
    prevState: string | undefined,
    formData: FormData
) {
    const parsedData = z
        .object({
            email: z.string().email(),
            password: z.string().min(8),
        })
        .safeParse(formData);

    if (!parsedData.success) throw parsedData.error.message;

    const { email, password } = parsedData.data;

    console.log("Signup Action", email, password);
    const api = await createServerApiClient();
    const res = await api.auth.register({ email, password });
    try {
        await signIn("credentials");
    } catch (error) {
        console.log(error);
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return "Invalid credentials.";
                default:
                    return "Something went wrong.";
            }
        }
        throw error;
    }
}
