"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import { Button } from "@workspace/ui/components/button";
import { ContinueWithOptions } from "./ContinueWithOptions";
import Link from "next/link";
import { Separator } from "@workspace/ui/components/separator";

const loginSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function SignupForm({
    isLoading = false,
    formAction,
}: {
    isLoading?: boolean;
    formAction: (values: FormData) => void;
}) {
    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const handleGuestLogin = () => {
        // Handle guest login logic here
    };

    return (
        <div className="w-[400px] rounded-lg p-6">
            <div className="mb-8">
                <h2 className="text-4xl font-semibold tracking-tight">
                    Sign up
                </h2>
            </div>
            <Form {...form}>
                <form action={formAction} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }: { field: any }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }: { field: any }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="Enter your password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        className="w-full"
                        isLoading={isLoading}
                    >
                        Signup
                    </Button>
                    <ContinueWithOptions onGuestLogin={handleGuestLogin} />

                    <Separator />
                    <div className="text-center gap-2 text-sm">
                        <span>Already have an account? </span>
                        <Link
                            href={"/auth/login"}
                            className="text-blue-400 font-semibold"
                        >
                            Login
                        </Link>
                    </div>
                </form>
            </Form>
        </div>
    );
}
