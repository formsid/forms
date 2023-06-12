import React from "react";

import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";
import { Badge } from "@/Components/shadcn/Badge";
import { Checkbox } from "@/Components/shadcn/Checkbox";
import { DataTableColumnHeader } from "@/Components/shadcn/DataTable/DataTableColumnHeader";

import {
    ArrowDownToLine,
    ArrowRightToLine,
    ArrowUpCircle,
    ArrowUpToLine,
    CheckCircle2,
    Circle,
    HelpCircle,
    XCircle,
} from "lucide-react";
import { DataTableRowActions } from "@/Components/shadcn/DataTable/DataTableRowActions";

export const labels = [
    {
        value: "bug",
        label: "Bug",
    },
    {
        value: "feature",
        label: "Feature",
    },
    {
        value: "documentation",
        label: "Documentation",
    },
];

export const statuses = [
    {
        value: "backlog",
        label: "Backlog",
        icon: HelpCircle,
    },
    {
        value: "todo",
        label: "Todo",
        icon: Circle,
    },
    {
        value: "in progress",
        label: "In Progress",
        icon: ArrowUpCircle,
    },
    {
        value: "done",
        label: "Done",
        icon: CheckCircle2,
    },
    {
        value: "canceled",
        label: "Canceled",
        icon: XCircle,
    },
];

export const priorities = [
    {
        label: "Low",
        value: "low",
        icon: ArrowDownToLine,
    },
    {
        label: "Medium",
        value: "medium",
        icon: ArrowRightToLine,
    },
    {
        label: "High",
        value: "high",
        icon: ArrowUpToLine,
    },
];

export const formSchema = z.object({
    id: z.string(),
    title: z.string(),
    status: z.string(),
    num_questions: z.number(),
});

export type Task = z.infer<typeof formSchema>;

export const columns: ColumnDef<Task>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
                className="translate-y-[2px]"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-[2px]"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "title",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Title" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    <span className="max-w-[500px] truncate font-medium">
                        {row.getValue("title")}
                    </span>
                </div>
            );
        },
        enableHiding: false,
    },
    {
        accessorKey: "num_respondents",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Respondents" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex items-center">
                    {row.getValue("num_respondents")}
                </div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    {
        accessorKey: "num_questions",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Questions" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex items-center">
                    {row.getValue("num_questions")}
                </div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    {
        accessorKey: "completion",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Completion" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex items-center">
                    {row.getValue("completion")}
                </div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    {
        accessorKey: "views",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Views" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex items-center">{row.getValue("views")}</div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    {
        accessorKey: "updated_at",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Updated" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex items-center">
                    {row.getValue("created_at")}
                </div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    {
        accessorKey: "created_at",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Created" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex items-center">
                    {row.getValue("created_at")}
                </div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    {
        id: "actions",
        cell: ({ row }) => <DataTableRowActions row={row} />,
    },
];
