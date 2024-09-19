import React, { useState } from 'react';
import { Table } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// This is a mock type for a spend record. Replace with the actual type from your schema.
type Spend = {
  id: string;
  vendor_id: string;
  amount: number;
  date: string;
  category: string;
  description: string;
};

// This is mock data. Replace with actual data fetching logic.
const mockSpends: Spend[] = [
  { id: '1', vendor_id: 'V001', amount: 1000, date: '2023-01-15', category: 'Materials', description: 'Bulk order of raw materials' },
  { id: '2', vendor_id: 'V002', amount: 500, date: '2023-01-20', category: 'Services', description: 'Maintenance services' },
  { id: '3', vendor_id: 'V001', amount: 750, date: '2023-02-01', category: 'Materials', description: 'Additional raw materials' },
];

const SpendList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [spends, setSpends] = useState(mockSpends);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredSpends = mockSpends.filter(spend => 
      spend.vendor_id.toLowerCase().includes(term) ||
      spend.category.toLowerCase().includes(term) ||
      spend.description.toLowerCase().includes(term)
    );
    setSpends(filteredSpends);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Input 
          type="text" 
          placeholder="Search spend records..." 
          value={searchTerm}
          onChange={handleSearch}
          className="max-w-sm"
        />
        <Button>Add New Spend Record</Button>
      </div>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>Vendor ID</Table.Head>
            <Table.Head>Amount</Table.Head>
            <Table.Head>Date</Table.Head>
            <Table.Head>Category</Table.Head>
            <Table.Head>Description</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {spends.map((spend) => (
            <Table.Row key={spend.id}>
              <Table.Cell>{spend.vendor_id}</Table.Cell>
              <Table.Cell>${spend.amount.toFixed(2)}</Table.Cell>
              <Table.Cell>{spend.date}</Table.Cell>
              <Table.Cell>{spend.category}</Table.Cell>
              <Table.Cell>{spend.description}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default SpendList;