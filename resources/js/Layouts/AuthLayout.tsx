import React from "react";
import { Link } from "@inertiajs/react";

export default function AuthLayout({ children }) {
    return (
        <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="hidden h-full flex-col p-6 text-white lg:flex">
                <div className="relative flex flex-col p-10 flex-1 rounded-xl shadow-lg shadow-forms-200">
                    <div
                        className="absolute inset-0 bg-cover rounded-xl opacity-30"
                        style={{
                            backgroundImage: "url('grain.jpg')",
                        }}
                    />
                    <div className="absolute inset-0 bg-cover rounded-xl bg-forms-500 opacity-50" />
                    <div className="relative z-20 flex items-center">
                        <Link href="/">
                            <img className="h-8 invert" src="logo.png" />
                        </Link>
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;This library has saved me countless hours
                                of work and helped me deliver stunning designs
                                to my clients faster than ever before. Highly
                                recommended!&rdquo;
                            </p>
                            <footer className="text-sm">Sofia Davis</footer>
                        </blockquote>
                    </div>
                </div>
            </div>
            <div className="lg:p-8">{children}</div>
        </div>
    );
}
