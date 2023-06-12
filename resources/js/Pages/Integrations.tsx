import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Toggle from "@/Components/Toggle";

import { InformationCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const clients = [
    {
        id: 1,
        name: "Cal.com",
        imageUrl:
            "https://ph-files.imgix.net/39eadfe0-8f39-40f8-8213-ee9e516df919.png?auto=format",
    },
    {
        id: 2,
        name: "Lemon Squeezy",
        imageUrl:
            "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/r3jedpekkhjqad6kq06k",
    },
];

export default function Integrations({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Integrations
                </h2>
            }
        >
            <Head title="Integrations" />

            <div className="bg-white">
                <header className="relative isolate">
                    <div
                        className="absolute inset-0 -z-10 overflow-hidden"
                        aria-hidden="true"
                    >
                        <div
                            className="absolute inset-0 overflow-hidden opacity-[.03]"
                            style={{ backgroundImage: 'url("grain.jpg")' }}
                        ></div>
                        <div className="absolute left-16 top-full -mt-16 transform-gpu opacity-50 blur-3xl xl:left-1/2 xl:-ml-80">
                            <div
                                className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-forms-600 to-forms-400"
                                style={{
                                    clipPath:
                                        "polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)",
                                }}
                            />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 h-px bg-gray-900/5" />
                    </div>

                    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                        <div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none ">
                            <div className="flex items-center gap-x-4">
                                <h1 className="text-3xl font-bold tracking-tightest text-gray-700">
                                    Integrations
                                </h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="space-y-16 xl:space-y-20">
                    {/* Form list*/}
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                            <ul
                                role="list"
                                className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
                            >
                                {clients.map((client) => (
                                    <li
                                        key={client.id}
                                        className="overflow-hidden rounded-xl border border-gray-00 shadow"
                                    >
                                        <div className="flex items-center gap-x-3 border-b border-gray-900/5 bg-gray-50 p-6 py-4">
                                            <img
                                                src={client.imageUrl}
                                                alt={client.name}
                                                className="h-8 w-8 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
                                            />
                                            <div className="text-sm font-medium leading-6 text-gray-900">
                                                {client.name}
                                            </div>
                                            <InformationCircleIcon className="cursor-pointer relative ml-auto flex-none w-6 h-6 text-gray-400" />
                                        </div>

                                        <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                                            <div className="flex justify-between gap-x-4 py-3">
                                                <dt className="text-gray-500">
                                                    Enabled
                                                </dt>
                                                <dd className="text-gray-700">
                                                    <Toggle />
                                                </dd>
                                            </div>
                                        </dl>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
