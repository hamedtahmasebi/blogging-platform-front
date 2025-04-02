"use client";

import LoginForm from "@/components/auth/LoginForm";
import { useActionState } from "react";
import { authenticate } from "@/lib/actions/authenticate";

export default function LoginPage() {
    const [errorMsg, formAction, isPending] = useActionState(
        authenticate,
        undefined
    );

    return <LoginForm isLoading={isPending} formAction={formAction} />;
}
