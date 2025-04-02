"use server";

import { handleTokenExpiration } from "./api";
import { redirect } from "next/navigation";

export async function handleApiError(error: any) {
    console.error("API Error:", error);

    // Check if error is a 401 Unauthorized
    if (error?.status === 401 || error?.response?.status === 401) {
        // Clear the token server-side
        await handleTokenExpiration();
        // Redirect client-side
        redirect("/auth/signup");
    }

    return error;
}
