"use server";

import { ApiClient } from "@workspace/api";

export async function createServerApiClient() {
    return new ApiClient({
        baseURL: "http://localhost:8000",
        withCredentials: true,
    });
}
