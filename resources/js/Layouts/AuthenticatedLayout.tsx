import React from "react";
import { Fragment, useState } from "react";
import { Link, useForm } from "@inertiajs/react";

import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

import { Dialog, Menu, Transition } from "@headlessui/react";
import {
    Bars3Icon,
    EnvelopeIcon,
    PlusIcon,
    PencilSquareIcon,
    PuzzlePieceIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
    {
        name: "Forms",
        href: "forms",
        icon: PencilSquareIcon,
        current: true,
    },
    {
        name: "Inbox",
        href: "inbox",
        icon: EnvelopeIcon,
        current: false,
    },
    {
        name: "Integrations",
        href: "integrations",
        icon: PuzzlePieceIcon,
        current: false,
    },
];

const teams = [
    { id: 1, name: "Personal", href: "#", initial: "P", current: false },
    { id: 2, name: "A-Team", href: "#", initial: "A", current: true },
    { id: 2, name: "Dexter's Lab", href: "#", initial: "D", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Authenticated({ user, header, children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="h-screen max-h-screen oveflow-hidden">
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-50 lg:hidden"
                    onClose={setSidebarOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/80" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                        <button
                                            type="button"
                                            className="-m-2.5 p-2.5"
                                            onClick={() =>
                                                setSidebarOpen(false)
                                            }
                                        >
                                            <span className="sr-only">
                                                Close sidebar
                                            </span>
                                            <XMarkIcon
                                                className="h-6 w-6 text-white"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </Transition.Child>
                                {/* Sidebar component, swap this element with another sidebar if you like */}
                                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                                    <div className="flex h-16 shrink-0 items-center">
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=forms&shade=600"
                                            alt="Your Company"
                                        />
                                    </div>
                                    <nav className="flex flex-1 flex-col">
                                        <ul
                                            role="list"
                                            className="flex flex-1 flex-col gap-y-7"
                                        >
                                            <li>
                                                <ul
                                                    role="list"
                                                    className="-mx-2 space-y-1"
                                                >
                                                    {navigation.map((item) => (
                                                        <li key={item.name}>
                                                            <a
                                                                href={item.href}
                                                                className={classNames(
                                                                    item.current
                                                                        ? "text-forms-600"
                                                                        : "text-gray-700 hover:text-forms-600",
                                                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                                                )}
                                                            >
                                                                <item.icon
                                                                    className={classNames(
                                                                        item.current
                                                                            ? "text-forms-600"
                                                                            : "text-gray-400 group-hover:text-forms-600",
                                                                        "h-6 w-6 shrink-0"
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                                {item.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                            <li>
                                                <div className="text-xs font-semibold leading-6 text-gray-400">
                                                    Teams
                                                </div>
                                                <ul
                                                    role="list"
                                                    className="-mx-2 mt-2 space-y-1"
                                                >
                                                    {teams.map((team) => (
                                                        <li key={team.name}>
                                                            <a
                                                                href={team.href}
                                                                className={classNames(
                                                                    team.current
                                                                        ? "text-forms-600"
                                                                        : "text-gray-700 hover:text-forms-600",
                                                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                                                )}
                                                            >
                                                                <span
                                                                    className={classNames(
                                                                        team.current
                                                                            ? "text-forms-600 border-forms-600"
                                                                            : "text-gray-400 border-gray-200 group-hover:border-forms-600 group-hover:text-forms-600",
                                                                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"
                                                                    )}
                                                                >
                                                                    {
                                                                        team.initial
                                                                    }
                                                                </span>
                                                                <span className="truncate">
                                                                    {team.name}
                                                                </span>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto border-gray-200 bg-white px-6 shadow-xl">
                    <div className="flex h-16 shrink-0 items-center">
                        <img
                            className="h-5 w-auto"
                            src="/logo.png"
                            alt="Your Company"
                        />
                    </div>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="border border-gray-300/75 shadow group w-full rounded-md px-3.5 py-2 text-left text-sm font-medium text-gray-700 ">
                                <span className="flex w-full items-center justify-between">
                                    <span className="flex min-w-0 items-center justify-between space-x-3">
                                        <img
                                            className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                                            src="https://pyxis.nymag.com/v1/imgs/903/7c8/56338589748e89ab9832f673c2ee205acb-19-spider-man-casting.rsquare.w330.jpg"
                                            alt=""
                                        />
                                        <span className="flex min-w-0 flex-1 flex-col">
                                            <span className="truncate text-sm font-medium text-gray-900">
                                                {user.name}
                                            </span>
                                            <span className="truncate text-sm text-gray-500">
                                                {user.email}
                                            </span>
                                        </span>
                                    </span>
                                    <ChevronUpDownIcon
                                        className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute left-0 right-0 z-10 mt-2 origin-top divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700",
                                                    "block px-4 py-2 text-sm"
                                                )}
                                            >
                                                View profile
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700",
                                                    "block px-4 py-2 text-sm"
                                                )}
                                            >
                                                Settings
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700",
                                                    "block px-4 py-2 text-sm"
                                                )}
                                            >
                                                Notifications
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700",
                                                    "block px-4 py-2 text-sm"
                                                )}
                                            >
                                                Get desktop app
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700",
                                                    "block px-4 py-2 text-sm"
                                                )}
                                            >
                                                Support
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                                <div className="py-1">
                                    <Menu.Item>
                                        <Link
                                            as="button"
                                            href="logout"
                                            method="post"
                                            className="w-full cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Logout
                                        </Link>
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <nav className="flex flex-1 flex-col">
                        <ul
                            role="list"
                            className="flex flex-1 flex-col gap-y-7"
                        >
                            <li>
                                <ul
                                    role="list"
                                    className="-mx-2 space-y-1 px-2"
                                >
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? "text-forms-600"
                                                        : "text-gray-700 hover:text-forms-600",
                                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                                )}
                                            >
                                                <item.icon
                                                    className={classNames(
                                                        item.current
                                                            ? "text-forms-600"
                                                            : "text-gray-400 group-hover:text-forms-600",
                                                        "h-6 w-6 shrink-0"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li>
                                <div className="text-xs font-semibold leading-6 text-gray-400">
                                    Teams
                                </div>
                                <ul
                                    role="list"
                                    className="-mx-2 mt-2 space-y-1 px-2"
                                >
                                    {teams.map((team) => (
                                        <li key={team.name}>
                                            <a
                                                href={team.href}
                                                className={classNames(
                                                    team.current
                                                        ? "text-forms-600"
                                                        : "text-gray-700 hover:text-forms-600",
                                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                                )}
                                            >
                                                <span
                                                    className={classNames(
                                                        team.current
                                                            ? "text-forms-600 border-forms-600"
                                                            : "text-gray-400 border-gray-200 group-hover:border-forms-600 group-hover:text-forms-600",
                                                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"
                                                    )}
                                                >
                                                    {team.initial}
                                                </span>
                                                <span className="truncate">
                                                    {team.name}
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                    <li>
                                        <a
                                            href="#"
                                            className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-400 hover:text-forms-600"
                                        >
                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-dashed text-gray-400 group-hover:border-forms-600 group-hover:text-forms-600">
                                                <PlusIcon
                                                    className="h-3 w-3"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                            <span className="truncate">
                                                Add new team
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
                <button
                    type="button"
                    className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                    onClick={() => setSidebarOpen(true)}
                >
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
                    Dashboard
                </div>
                <a href="#">
                    <span className="sr-only">Your profile</span>
                    <img
                        className="h-8 w-8 rounded-full bg-gray-50"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                </a>
            </div>

            <main className="relative lg:pl-72 h-screen max-h-screen overflow-hidden">
                <div className="h-full overflow-hidden">{children}</div>
            </main>
        </div>
    );
}
