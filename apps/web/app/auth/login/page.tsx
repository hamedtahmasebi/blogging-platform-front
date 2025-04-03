"use client";

import LoginForm from "@/components/auth/LoginForm";
import { useActionState } from "react";
import loginAction from "./action";

export default function LoginPage() {
    const [errorMsg, formAction, isPending] = useActionState(
        loginAction,
        undefined
    );

    return <LoginForm isLoading={isPending} formAction={formAction} />;
}
