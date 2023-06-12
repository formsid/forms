import React from "react";

import { Row } from "@tanstack/react-table";
import {
    Copy,
    MoreHorizontal,
    Pen,
    Share,
    Star,
    Tags,
    Trash,
} from "lucide-react";

import { Button } from "@/Components/shadcn/Button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/Components/shadcn/DropdownMenu";

import { formSchema } from "@/Data/Form";

interface DataTableRowActionsProps<TData> {
    row: Row<TData>;
}

export function DataTableRowActions<TData>({
    row,
}: DataTableRowActionsProps<TData>) {
    const task = formSchema.parse(row.original);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                >
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
                <DropdownMenuItem>
                    <Pen className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                    Edit
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Copy className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                    Duplicate
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Share className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                    Share
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Trash className="mr-2 h-3.5 w-3.5 text-red-500/90" />
                    <span className="text-red-500/90">Delete</span>
                    <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
