import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from '@tanstack/react-table';
import { Skeleton } from '@/components/ui/skeleton';

interface Props<T> {
  columns: ColumnDef<T, unknown>[];
  data: T[];
  loading?: boolean;
  empty?: React.ReactNode;
}

export function DataTable<T>({ columns, data, loading, empty }: Props<T>) {
  // eslint-disable-next-line react-hooks/incompatible-library -- API TanStack Table connue, aucun composant mémoïsé ne reçoit `table`
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="overflow-x-auto rounded-lg border border-line bg-surface-2">
      <table className="w-full text-left text-sm">
        <thead className="bg-surface text-xs uppercase tracking-wide text-content-2">
          {table.getHeaderGroups().map((hg) => (
            <tr key={hg.id}>
              {hg.headers.map((h) => (
                <th key={h.id} scope="col" className="px-4 py-3 font-semibold">
                  {flexRender(h.column.columnDef.header, h.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <tr key={i} className="border-t border-line">
                  <td colSpan={columns.length} className="px-4 py-3">
                    <Skeleton className="h-5 w-full" />
                  </td>
                </tr>
              ))
            : table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="border-t border-line hover:bg-surface">
                  {row.getVisibleCells().map((c) => (
                    <td key={c.id} className="px-4 py-3">
                      {flexRender(c.column.columnDef.cell, c.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
        </tbody>
      </table>
      {!loading && data.length === 0 && empty}
    </div>
  );
}
