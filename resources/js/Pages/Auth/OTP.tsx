import React from "react";

import AuthLayout from "@/Layouts/AuthLayout";
import GuestLayout from "@/Layouts/GuestLayout";

import { cn } from "@/Components/shadcn/lib/utils";
import { Button } from "@/Components/shadcn/Button";
import { Icons } from "@/Components/shadcn/Icons";
import InputError from "@/Components/InputError";

import OtpInput from "react18-input-otp";

import { Head, Link, useForm } from "@inertiajs/react";

export default function OTP({}) {
    const { data, setData, post, processing, errors } = useForm({
        otp: "",
    });

    const handleChange = (value: string) => {
        setData("otp", value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <GuestLayout>
            <AuthLayout>
                <Head title="Log in" />

                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-4 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Enter the code sent to your email
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            A six-digit confirmation code should arrive soon
                        </p>
                    </div>
                    <div className={cn("grid gap-6")}>
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-2">
                                <div className="grid gap-1">
                                    <div className="space-y-4">
                                        <OtpInput
                                            className="w-full justify-center h-16"
                                            value={data.otp}
                                            onChange={handleChange}
                                            onSubmit={handleSubmit}
                                            numInputs={6}
                                            inputStyle={
                                                "focus:ring-none focus:outline-none h-full block rounded bg-forms-50 border shadow border-gray-200/50 !w-[40px]"
                                            }
                                            shouldAutoFocus={true}
                                        />
                                        {errors.otp && (
                                            <InputError
                                                className="text-center"
                                                message={errors.otp}
                                            />
                                        )}
                                    </div>
                                </div>
                                <Button className="mt-4" disabled={processing}>
                                    {processing && (
                                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                    )}
                                    Sign In
                                </Button>
                            </div>
                        </form>
                    </div>
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        Didn't receive an email?{" "}
                        <Link
                            href="/login"
                            className="font-semibold underline underline-offset-4 hover:text-forms-600"
                        >
                            Try again
                        </Link>
                    </p>
                </div>
            </AuthLayout>
        </GuestLayout>
    );
}
