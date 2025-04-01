"use client";

import LoginForm from "@/components/auth/LoginForm";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import { useState } from "react";

export default function LoginPage() {
    const navigation = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    return (
        <LoginForm
            isLoading={isLoading}
            onSubmit={async ({ email, password }) => {
                setIsLoading(true);
                try {
                    const res = await api.auth.login({
                        email,
                        password,
                    });
                    if (res.status === 200) {
                        localStorage.setItem(
                            "access_token",
                            res.data.access_token
                        );
                        navigation.push("/dashboard");
                    }
                } catch (error) {
                    console.log(error);
                }
                setIsLoading(false);
            }}
        />
    );
}
