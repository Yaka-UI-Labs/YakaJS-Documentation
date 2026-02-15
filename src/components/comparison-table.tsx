import React from 'react';

interface TableProps {
  headers: string[];
  rows: string[][];
}

// Helper function to parse and render text with markdown-like bold syntax
function renderCellContent(content: string) {
  if (!content) return content;
  
  // Check if content contains **text** pattern for bold
  const boldPattern = /\*\*(.*?)\*\*/g;
  if (boldPattern.test(content)) {
    const parts = content.split(boldPattern);
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

export function ComparisonTable({ headers, rows }: TableProps) {
  return (
    <div className="my-8 overflow-x-auto rounded-lg border border-oatmeal-olive/20 dark:border-oatmeal-olive/30">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-oatmeal-card/80 dark:bg-oatmeal-card">
            {headers.map((header, index) => (
              <th
                key={`header-${header}-${index}`}
                scope="col"
                className="border-b-2 border-oatmeal-olive/40 dark:border-oatmeal-olive px-6 py-4 text-left text-sm font-bold text-white dark:text-white uppercase tracking-wide"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => {
            // Check if this is a category header row (first cell has bold text and other cells are empty)
            const isCategoryRow = row[0].startsWith('**') && row.slice(1).every(cell => !cell || cell.trim() === '');
            
            return (
              <tr 
                key={`row-${rowIndex}-${row[0]}`} 
                className={`
                  ${isCategoryRow 
                    ? 'bg-oatmeal-card/60 dark:bg-oatmeal-card/70 border-y border-oatmeal-olive/30 dark:border-oatmeal-olive/40' 
                    : 'hover:bg-oatmeal-olive/10 dark:hover:bg-oatmeal-olive/15 border-b border-oatmeal-olive/15 dark:border-oatmeal-olive/20'
                  } 
                  transition-colors
                `}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={`cell-${rowIndex}-${cellIndex}-${cell.substring(0, 10)}`}
                    className={`
                      px-6 py-3.5 text-sm
                      ${isCategoryRow 
                        ? 'font-bold text-oatmeal-white dark:text-white' 
                        : 'text-oatmeal-stone dark:text-oatmeal-stone'
                      }
                      ${cellIndex === 0 ? 'font-medium' : ''}
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
