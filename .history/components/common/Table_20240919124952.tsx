import React, { useState } from 'react';
import {
  Table as ShadcnTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface TableProps<T> {
  data: T[];
  columns: {
    key: keyof T;
    header: string;
    render?: (value: T[keyof T], item: T) => React.ReactNode;
  }[];
  itemsPerPage?: number;
}

function Table<T>({ data, columns, itemsPerPage = 10 }: TableProps<T>) {
  const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);

  const sortedData = React.useMemo(() => {
    if (sortColumn) {
      return [...data].sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
        if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return data;
  }, [data, sortColumn, sortDirection]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (column: keyof T) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  return (
    <div>
      <ShadcnTable>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead
                key={column.key.toString()}
                onClick={() => handleSort(column.key)}
                className="cursor-pointer"
              >
                {column.header}
                {sortColumn === column.key && (
                  <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                )}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((item, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column.key.toString()}>
                  {column.render
                    ? column.render(item[column.key], item)
                    : item[column.key] as React.ReactNode}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </ShadcnTable>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink 
                onClick={() => setCurrentPage(i + 1)}
                isActive={currentPage === i + 1}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default Table;