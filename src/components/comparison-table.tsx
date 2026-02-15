import React from 'react';

interface TableProps {
  headers: string[];
  rows: string[][];
}

export function ComparisonTable({ headers, rows }: TableProps) {
  return (
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={`header-${header}-${index}`}
                scope="col"
                className="border border-oatmeal-olive/30 dark:border-oatmeal-olive bg-oatmeal-card/50 dark:bg-oatmeal-card px-4 py-3 text-left text-sm font-semibold text-oatmeal-white"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}-${row[0]}`} className="hover:bg-oatmeal-card/30 dark:hover:bg-oatmeal-card/30 transition-colors">
              {row.map((cell, cellIndex) => (
                <td
                  key={`cell-${rowIndex}-${cellIndex}-${cell.substring(0, 10)}`}
                  className="border border-oatmeal-olive/20 dark:border-oatmeal-olive/20 px-4 py-3 text-sm text-oatmeal-stone dark:text-oatmeal-stone"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
