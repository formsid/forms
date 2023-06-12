import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";

import {
    Bars4Icon,
    MagnifyingGlassIcon,
    Squares2X2Icon as Squares2X2IconMini,
} from "@heroicons/react/20/solid";
import React from "react";
import { FormsTable } from "@/Components/FormsTable";

import { columns } from "@/Data/Form";
import CreateFormModal from "./Partials/CreateFormModal";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const clients = [
    {
        id: 1,
        name: "Tuple",
        imageUrl: "https://tailwindui.com/img/logos/48x48/tuple.svg",
        lastInvoice: {
            date: "2 days ago",
            amount: "2",
        },
    },
    {
        id: 2,
        name: "SavvyCal",
        imageUrl: "https://tailwindui.com/img/logos/48x48/savvycal.svg",
        lastInvoice: {
            date: "2 days ago",
            amount: "2",
        },
    },
    {
        id: 3,
        name: "Reform",
        imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
        lastInvoice: {
            date: "2 days ago",
            amount: "2",
        },
    },
    {
        id: 4,
        name: "Reform",
        imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
        lastInvoice: {
            date: "2 days ago",
            amount: "2",
        },
    },
    {
        id: 5,
        name: "Reform",
        imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
        lastInvoice: {
            date: "2 days ago",
            amount: "2",
        },
    },
    {
        id: 6,
        name: "Reform",
        imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
        lastInvoice: {
            date: "2 days ago",
            amount: "2",
        },
    },
];

export default function Create({ auth, forms }) {
    const [displayMode, setDisplayMode] = useState("list");

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Forms
                </h2>
            }
        >
            <Head title="Forms" />

            <CreateFormModal />

            <div className="bg-white relative flex flex-col h-full overflow-hidden">
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
                                    Forms
                                </h1>
                            </div>
                            <div className="flex items-center gap-x-4 sm:gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-forms-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-forms-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forms-600"
                                >
                                    New Form
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                <div>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex">
                            <div className="ml-6 flex items-center rounded-lg bg-gray-100 p-0.5 sm:hidden">
                                <button
                                    type="button"
                                    className="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none"
                                    onClick={() => setDisplayMode("list")}
                                >
                                    <Bars4Icon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                    <span className="sr-only">
                                        Use list view
                                    </span>
                                </button>
                                <button
                                    type="button"
                                    className="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none"
                                    onClick={() => setDisplayMode("grid")}
                                >
                                    <Squares2X2IconMini
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                    <span className="sr-only">
                                        Use grid view
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="mt-3 sm:mt-2">
                            <div className="block">
                                <div className="flex items-center border-b border-gray-200 py-2">
                                    <div className="relative w-full h-full">
                                        <MagnifyingGlassIcon
                                            className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-500"
                                            aria-hidden="true"
                                        />
                                        <input
                                            id="filter-field"
                                            className="block h-8 w-full border-0 bg-transparent py-0 pl-8 pr-0 focus:ring-0 focus:outline-none sm:text-sm"
                                            placeholder="Search..."
                                            name="filter"
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="ml-6 hidden items-center rounded-lg bg-gray-100 p-0.5 sm:flex">
                                        <button
                                            type="button"
                                            className={classNames(
                                                displayMode == "list"
                                                    ? "bg-white"
                                                    : "",
                                                "rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none"
                                            )}
                                            onClick={() =>
                                                setDisplayMode("list")
                                            }
                                        >
                                            <Bars4Icon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                            <span className="sr-only">
                                                Use list view
                                            </span>
                                        </button>
                                        <button
                                            type="button"
                                            className={classNames(
                                                displayMode == "grid"
                                                    ? "bg-white"
                                                    : "",
                                                "ml-0.5 rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none"
                                            )}
                                            onClick={() =>
                                                setDisplayMode("grid")
                                            }
                                        >
                                            <Squares2X2IconMini
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                            <span className="sr-only">
                                                Use grid view
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 space-y-16 xl:space-y-20">
                    {/* Form GRID*/}
                    {displayMode === "grid" && (
                        <div className="h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="h-full mx-auto lg:mx-0 lg:max-w-none pt-6">
                                <ul
                                    role="list"
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
                                >
                                    {clients.map((client) => (
                                        <li
                                            key={client.id}
                                            className="overflow-hidden rounded-xl border border-gray-00 shadow"
                                        >
                                            <div className="flex items-center gap-x-3 border-b border-gray-900/5 bg-gray-50 p-6 py-4">
                                                <div className="text-sm font-medium leading-6 text-gray-900">
                                                    {client.name}
                                                </div>
                                                <Menu
                                                    as="div"
                                                    className="relative ml-auto"
                                                >
                                                    <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                                                        <span className="sr-only">
                                                            Open options
                                                        </span>
                                                        <EllipsisHorizontalIcon
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    </Menu.Button>
                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                                            <Menu.Item>
                                                                {({
                                                                    active,
                                                                }) => (
                                                                    <a
                                                                        href="#"
                                                                        className={classNames(
                                                                            active
                                                                                ? "bg-gray-50"
                                                                                : "",
                                                                            "block px-3 py-1 text-sm leading-6 text-gray-900"
                                                                        )}
                                                                    >
                                                                        View
                                                                        <span className="sr-only">
                                                                            ,{" "}
                                                                            {
                                                                                client.name
                                                                            }
                                                                        </span>
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({
                                                                    active,
                                                                }) => (
                                                                    <a
                                                                        href="#"
                                                                        className={classNames(
                                                                            active
                                                                                ? "bg-gray-50"
                                                                                : "",
                                                                            "block px-3 py-1 text-sm leading-6 text-gray-900"
                                                                        )}
                                                                    >
                                                                        Edit
                                                                        <span className="sr-only">
                                                                            ,{" "}
                                                                            {
                                                                                client.name
                                                                            }
                                                                        </span>
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                            </div>
                                            <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                                                <div className="flex justify-between gap-x-4 py-3">
                                                    <dt className="text-gray-500">
                                                        Submissions
                                                    </dt>
                                                    <dd className="flex items-start gap-x-2">
                                                        <div className="font-medium text-gray-900">
                                                            {
                                                                client
                                                                    .lastInvoice
                                                                    .amount
                                                            }
                                                        </div>
                                                    </dd>
                                                </div>
                                            </dl>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                    {/* Form GRID*/}
                    {displayMode === "list" && (
                        <div className="h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="h-full mx-auto lg:mx-0 lg:max-w-none pt-6">
                                <FormsTable data={forms} columns={columns} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
