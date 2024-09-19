import React, { useState } from 'react';
import { Table } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// This is a mock type for a part. Replace with the actual type from your schema.
type Part = {
  id: string;
  part_number: string;
  description: string;
  category: string;
  vendor_id: string;
  unit_price: number;
};

// This is mock data. Replace with actual data fetching logic.
const mockParts: Part[] = [
  { id: '1', part_number: 'P001', description: 'Bolt 5mm', category: 'Fasteners', vendor_id: 'V001', unit_price: 0.5 },
  { id: '2', part_number: 'P002', description: 'Nut 5mm', category: 'Fasteners', vendor_id: 'V001', unit_price: 0.3 },
  { id: '3', part_number: 'P003', description: 'Resistor 10k', category: 'Electronics', vendor_id: 'V002', unit_price: 0.1 },
];

const PartList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [parts, setParts] = useState(mockParts);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredParts = mockParts.filter(part => 
      part.part_number.toLowerCase().includes(term) ||
      part.description.toLowerCase().includes(term) ||
      part.category.toLowerCase().includes(term)
    );
    setParts(filteredParts);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Input 
          type="text" 
          placeholder="Search parts..." 
          value={searchTerm}
          onChange={handleSearch}
          className="max-w-sm"
        />
        <Button>Add New Part</Button>
      </div>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>Part Number</Table.Head>
            <Table.Head>Description</Table.Head>
            <Table.Head>Category</Table.Head>
            <Table.Head>Vendor ID</Table.Head>
            <Table.Head>Unit Price</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {parts.map((part) => (
            <Table.Row key={part.id}>
              <Table.Cell>{part.part_number}</Table.Cell>
              <Table.Cell>{part.description}</Table.Cell>
              <Table.Cell>{part.category}</Table.Cell>
              <Table.Cell>{part.vendor_id}</Table.Cell>
              <Table.Cell>${part.unit_price.toFixed(2)}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default PartList;