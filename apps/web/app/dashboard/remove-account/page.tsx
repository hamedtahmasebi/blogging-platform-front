"use client";
import { api } from "@/lib/api";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { AlertTriangle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RemoveAccount() {
    const router = useRouter();
    const [confirmInput, setConfirmInput] = useState("");
    const [isPending, setIsPending] = useState(false);

    const handleRemoveAccount = async () => {
        setIsPending(true);
        try {
            const res = await api.account.removeUser();
            if (res.status === 200) {
                router.push("/auth/signup");
            }
        } catch (error) {
            console.log(error);
        }
        setIsPending(false);
    };
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
                <Input
                    value={confirmInput}
                    onChange={(e) => setConfirmInput(e.target.value)}
                />
                <Button
                    size={"lg"}
                    variant={"destructive"}
                    isLoading={isPending}
                    disabled={
                        confirmInput?.toLowerCase() !== "confirm" || isPending
                    }
                    onClick={handleRemoveAccount}
                >
                    Remove
                </Button>
            </div>
        </div>
    );
}
