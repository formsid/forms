import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/Components/shadcn/DataTable/DataTable";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

export function FormsTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    return <DataTable data={data} columns={columns} />;
}
