import React from 'react';

interface TableProps {
  headers: string[];
  rows: string[][];
}

// Helper function to parse and render text with markdown-like bold syntax
const BOLD_PATTERN = /\*\*(.*?)\*\*/g;

function renderCellContent(content: string) {
  if (!content) return content;
  
  // Check if content contains **text** pattern for bold
  if (content.includes('**')) {
    const parts = content.split(BOLD_PATTERN);
    return (
      <>
        {parts.map((part, index) => {
          // Odd indices are the bold text (captured groups)
          if (index % 2 === 1) {
            return <strong key={index} className="font-bold text-oatmeal-white dark:text-oatmeal-white">{part}</strong>;
          }
          return <span key={index}>{part}</span>;
        })}
      </>
    );
  }
  
  return content;
}

// Helper to detect category header rows
function isCategoryHeaderRow(row: string[]): boolean {
  return row[0].startsWith('**') && row.slice(1).every(cell => !cell || cell.trim() === '');
}

export function ComparisonTable({ headers, rows }: TableProps) {
  return (
    <div className="my-8 overflow-x-auto border-y-2 border-oatmeal-olive/40 dark:border-oatmeal-olive">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-oatmeal-card/90 dark:bg-oatmeal-card border-b-2 border-oatmeal-olive/50 dark:border-oatmeal-olive">
            {headers.map((header, index) => (
              <th
                key={`header-${header}-${index}`}
                scope="col"
                className="px-6 py-4 text-left text-xs font-bold text-white dark:text-white uppercase tracking-wider border-r border-oatmeal-olive/30 dark:border-oatmeal-olive/40 last:border-r-0"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => {
            // Check if this is a category header row
            const isCategoryRow = isCategoryHeaderRow(row);
            
            return (
              <tr 
                key={`row-${rowIndex}-${row[0]}`} 
                className={`
                  ${isCategoryRow 
                    ? 'bg-oatmeal-card/70 dark:bg-oatmeal-card/80 border-y-2 border-oatmeal-olive/40 dark:border-oatmeal-olive/50' 
                    : 'hover:bg-oatmeal-olive/8 dark:hover:bg-oatmeal-olive/12 border-b border-oatmeal-olive/20 dark:border-oatmeal-olive/25'
                  } 
                  transition-colors duration-150
                `}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={`cell-${rowIndex}-${cellIndex}-${cell.substring(0, 10)}`}
                    className={`
                      px-6 py-4 text-sm border-r border-oatmeal-olive/15 dark:border-oatmeal-olive/20 last:border-r-0
                      ${isCategoryRow 
                        ? 'font-bold text-white dark:text-white' 
                        : 'text-oatmeal-stone dark:text-oatmeal-stone'
                      }
                      ${cellIndex === 0 && !isCategoryRow ? 'font-semibold text-oatmeal-white dark:text-oatmeal-white' : ''}
                    `}
                  >
                    {renderCellContent(cell)}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
