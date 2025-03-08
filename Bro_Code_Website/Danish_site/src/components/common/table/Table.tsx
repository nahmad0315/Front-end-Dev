import { useReactTable, getCoreRowModel, flexRender, ColumnDef } from "@tanstack/react-table";

interface TableProps<T> {
    columns: ColumnDef<T>[];
    data: T[];
}

export default function Table<T>({ columns, data }: TableProps<T>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-y-2 bg-transparent">
                {/* Header */}
                <thead className="bg-transparent text-black">
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id} className="px-4 py-2 text-left">
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                {/* Body */}
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr
                            key={row.id}
                            className="h-[80px] bg-white hover:bg-primary hover:text-white hover:shadow-lg"
                        >
                            {row.getVisibleCells().map((cell, index, arr) => (
                                <td
                                    key={cell.id}
                                    className={`px-4 py-2 ${index === 0 ? "rounded-l-lg" : ""} ${index === arr.length - 1 ? "rounded-r-lg" : ""}`}
                                >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}
