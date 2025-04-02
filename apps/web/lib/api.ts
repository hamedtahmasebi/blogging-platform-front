"use server";

import { auth } from "@/auth";
import { ApiClient } from "@workspace/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createServerApiClient() {
    const session = await auth();
    console.log(session?.accessToken);
    return new ApiClient({
        baseURL: "http://localhost:8000",
        headers: {
            ...(session?.accessToken
                ? { Authorization: `Bearer ${session?.accessToken}` }
                : {}),
        },
    });
}

// Helper function to handle token expiration
export async function handleTokenExpiration() {
    "use server";

    const cookiesStore = await cookies();
    cookiesStore.set("access_token", "", {
        expires: new Date(Date.now() - 1000),
        httpOnly: true,
    });

    return { success: true };
}

// Add a function that both expires the token and redirects
export async function expireTokenAndRedirect(redirectPath = "/auth/signup") {
    "use server";
    const cookiesStore = await cookies();
    cookiesStore.set("access_token", "", {
        expires: new Date(Date.now() - 1000),
        httpOnly: true,
    });

    redirect(redirectPath);
}
