"use client";

import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { useState } from "react";

export default function ConfirmRemoveAccountForm({
    onSubmit,
}: {
    onSubmit: () => Promise<void>;
}) {
    const [confirmInput, setConfirmInput] = useState<string>("");
    const [isPending, setIsPending] = useState<boolean>(false);
    return (
        <>
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
                onClick={async () => {
                    setIsPending(true);
                    await onSubmit();
                    setIsPending(false);
                }}
            >
                Remove
            </Button>
        </>
    );
}
