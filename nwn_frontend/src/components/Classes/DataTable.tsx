import React from 'react';

interface DataTableProps {
  headers: string[];
  rows: string[][];
}

export const DataTable: React.FC<DataTableProps> = ({ headers, rows }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/10">
      <table className="w-full text-xs text-left">
        <thead>
          <tr className="bg-white/10 border-b border-white/15">
            {headers.map((h, i) => (
              <th key={i} className="px-3 py-2 text-white/90 font-semibold whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors duration-150">
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2 text-white/70">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
