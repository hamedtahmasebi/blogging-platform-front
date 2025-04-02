"use server";

import { createServerApiClient } from "@/lib/api";
import { cookies } from "next/headers";

export default async function loginAction(formData: FormData) {
    console.log("Calling Login Action", { ...formData });
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    if (!email || !password)
        throw new Error("Please fill all required credentials");
    const api = await createServerApiClient();
    const res = await api.auth.login({ email, password });
    console.log(res.data);
    const cookieStore = await cookies();
    cookieStore.set("access_token", res.data.access_token, { httpOnly: true });
}
