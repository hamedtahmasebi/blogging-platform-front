"use server";

import { createServerApiClient } from "@/lib/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

export default async function signupAction(
    prevState: string | void,
    formData: FormData
) {
    console.log("Calling signup Action", formData);
    const parsedData = z
        .object({
            email: z.string().email(),
            password: z.string().min(8),
        })
        .safeParse({
            email: formData.get("email"),
            password: formData.get("password"),
        });

    if (!parsedData.success) throw parsedData.error.message;

    const { email, password } = parsedData.data;

    console.log(email, password);

    const api = await createServerApiClient();
    const res = await api.auth.register({ email, password });
    const cookiesStorage = await cookies();
    cookiesStorage.set("access_token", res.data.access_token);
    redirect("/dashboard");
}
