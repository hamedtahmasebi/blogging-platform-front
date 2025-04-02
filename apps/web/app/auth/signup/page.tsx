"use client";

import SignupForm from "@/components/auth/SignupForm";
import signupAction from "./action";
import { useActionState } from "react";

export default function SignupPage() {
    const [errorMsg, formAction, isPending] = useActionState(
        signupAction,
        undefined
    );
    return (
        <div>
            <SignupForm isLoading={isPending} formAction={formAction} />
        </div>
    );
}
