import { ApiClient } from "@workspace/api";
export const api = new ApiClient({
    baseURL: "http://localhost:8000/api",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
});
