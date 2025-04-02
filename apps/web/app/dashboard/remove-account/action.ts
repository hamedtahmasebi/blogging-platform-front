"use server";

import { createServerApiClient } from "@/lib/api";
import { redirect } from "next/navigation";

export default async function removeAccountAction() {
    const api = await createServerApiClient();
    try {
        const res = await api.account.removeUser();
        if (res.status === 200) {
            redirect("/auth/signup");
        }
    } catch (error) {
        console.log(error);
    }
}
