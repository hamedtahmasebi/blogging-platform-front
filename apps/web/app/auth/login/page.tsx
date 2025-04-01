"use client";

import LoginForm from "@/components/auth/LoginForm";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

export default function LoginPage() {
    const navigation = useRouter();
    return (
        <LoginForm
            onSubmit={async ({ email, password }) => {
                const res = await api.auth.login({
                    email,
                    password,
                });
                if (res.status === 200) {
                    localStorage.setItem("access_token", res.data.access_token);
                    navigation.push("/");
                }
            }}
        />
    );
}
