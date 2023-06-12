import React, { useEffect } from "react";

import {
    LayoutGrid,
    Library,
    ListMusic,
    Mic2,
    Music2,
    PlayCircle,
    Radio,
    User,
} from "lucide-react";

import { Button } from "@/Components/shadcn/Button";
import { ScrollArea } from "@/Components/shadcn/ScrollArea";
import { Transition } from "@headlessui/react";

type Playlist = (typeof playlists)[number];

const playlists = [
    "Recently Added",
    "Recently Played",
    "Top Songs",
    "Top Albums",
    "Top Artists",
    "Logic Discography",
    "Bedtime Beats",
    "Feeling Happy",
    "I miss Y2K Pop",
    "Runtober",
    "Mellow Days",
    "Eminem Essentials",
];

export default function CreateFormModal({}) {
    const [shouldShow, setShouldShow] = React.useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShouldShow(true);
        }, 100);
    });

    return (
        <Transition
            show={shouldShow}
            enter="transition ease-in duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
        >
            <div className="absolute top-0 h-screen w-screen left-0 z-50 backdrop-blur-sm bg-forms-900 bg-opacity-25 overflow-hidden flex items-center justify-center p-12">
                <Transition.Child
                    enter="delay-300 transition ease-in duration-500 transform"
                    enterFrom="translate-x-full opacity-25"
                    enterTo="translate-x-0 opacity-100"
                >
                    <div className="bg-white rounded-xl w-full h-full shadow-2xl shadow-forms-900/75 border-gray-200">
                        <div className="rounded-xl bg-background flex flex-col">
                            <div className="flex items-center justify-between py-3 px-4 border-b">
                                <h2 className="text-xl font-semibold tracking-tight text-gray-800">
                                    Untitled Form
                                </h2>
                                <div className="flex items-center space-x-2">
                                    <Button
                                        className="bg-forms-900 hover:bg-forms-500/50 hover:shadow"
                                        size="sm"
                                    >
                                        <Radio className="mr-2 h-4 w-4" />
                                        Publish
                                    </Button>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-5">
                                <div className="pb-12">
                                    <div className="space-y-4 py-4">
                                        <div className="px-4 py-2">
                                            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
                                                Discover
                                            </h2>
                                            <div className="space-y-1">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="w-full justify-start"
                                                >
                                                    <PlayCircle className="mr-2 h-4 w-4" />
                                                    Listen Now
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="w-full justify-start"
                                                >
                                                    <LayoutGrid className="mr-2 h-4 w-4" />
                                                    Browse
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="w-full justify-start"
                                                >
                                                    <Radio className="mr-2 h-4 w-4" />
                                                    Radio
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="px-4 py-2">
                                            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
                                                Library
                                            </h2>
                                            <div className="space-y-1">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="w-full justify-start"
                                                >
                                                    <ListMusic className="mr-2 h-4 w-4" />
                                                    Playlists
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="w-full justify-start"
                                                >
                                                    <Music2 className="mr-2 h-4 w-4" />
                                                    Songs
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="w-full justify-start"
                                                >
                                                    <User className="mr-2 h-4 w-4" />
                                                    Made for You
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="w-full justify-start"
                                                >
                                                    <Mic2 className="mr-2 h-4 w-4" />
                                                    Artists
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="w-full justify-start"
                                                >
                                                    <Library className="mr-2 h-4 w-4" />
                                                    Albums
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="py-2">
                                            <h2 className="relative px-6 text-lg font-semibold tracking-tight">
                                                Playlists
                                            </h2>
                                            <ScrollArea className="h-[300px] px-2">
                                                <div className="space-y-1 p-2">
                                                    {playlists?.map(
                                                        (playlist, i) => (
                                                            <Button
                                                                key={`${playlist}-${i}`}
                                                                variant="ghost"
                                                                size="sm"
                                                                className="w-full justify-start font-normal"
                                                            >
                                                                <ListMusic className="mr-2 h-4 w-4" />
                                                                {playlist}
                                                            </Button>
                                                        )
                                                    )}
                                                </div>
                                            </ScrollArea>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-3 lg:col-span-4 lg:border-l">
                                    <div className="h-full px-4 py-6 lg:px-8"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition.Child>
            </div>
        </Transition>
    );
}
