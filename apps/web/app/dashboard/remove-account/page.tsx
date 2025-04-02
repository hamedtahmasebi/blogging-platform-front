"use client";
import ConfirmRemoveAccountForm from "@/components/auth/ConfirmRemoveAccountForm";
import { AlertTriangle } from "lucide-react";
import removeAccountAction from "./action";

export default function RemoveAccount() {
    return (
        <div>
            <h2 className="text-2xl font-bold">Remove Account</h2>
            <div className="flex flex-row items-center gap-2 text-destructive">
                <AlertTriangle className="inline" size={20} />
                <p className="mt-2">
                    This action is irreversible. All your data will be deleted
                    permanently.
                </p>
            </div>

            <p className="mt-8">
                In order to remove your account, please enter the word
                <span className="font-bold">
                    {" "}
                    {'"'}Confirm{'"'}{" "}
                </span>{" "}
                in the input below.
            </p>

            <div className="flex flex-col gap-2 w-full md:w-fit mt-4">
                <ConfirmRemoveAccountForm onSubmit={removeAccountAction} />
            </div>
        </div>
    );
}
