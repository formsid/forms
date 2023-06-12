import { Table } from "@tanstack/react-table";
import { X } from "lucide-react";

import { Button } from "@/Components/shadcn/Button";
import { Input } from "@/Components/shadcn/Input";
import { DataTableViewOptions } from "./DataTableViewOptions";

import { priorities, statuses } from "@/Data/Form";
import { DataTableFacetedFilter } from "./DataTableFacetedFilter";
import React from "react";

interface DataTableToolbarProps<TData> {
    table: Table<TData>;
}

export function DataTableToolbar<TData>({
    table,
}: DataTableToolbarProps<TData>) {
    const isFiltered =
        table.getPreFilteredRowModel().rows.length >
        table.getFilteredRowModel().rows.length;

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
                <Input
                    placeholder="Filter tasks..."
                    value={
                        (table
                            .getColumn("title")
                            ?.getFilterValue() as string) ?? ""
                    }
                    onChange={(event) =>
                        table
                            .getColumn("title")
                            ?.setFilterValue(event.target.value)
                    }
                    className="h-8 w-[150px] lg:w-[250px]"
                />
            </div>
            <DataTableViewOptions table={table} />
        </div>
    );
}
