"use server";

import { ApiClient } from "@workspace/api";
import { cookies } from "next/headers";

export async function createServerApiClient() {
    const cookiesStorage = await cookies();
    const accessToken = cookiesStorage.get("access_token")?.value;
    console.log("Access Token", accessToken);
    return new ApiClient({
        baseURL: "http://localhost:8000",
        withCredentials: true,
        headers: {
            Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
        },
    });
}
