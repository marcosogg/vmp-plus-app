import React, { useState } from 'react';
import { Table } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// This is a mock type for a vendor. Replace with the actual type from your schema.
type Vendor = {
  id: string;
  vendor_name: string;
  vendor_id: string;
  country: string;
  rating: number;
};

// This is mock data. Replace with actual data fetching logic.
const mockVendors: Vendor[] = [
  { id: '1', vendor_name: 'Acme Corp', vendor_id: 'V001', country: 'USA', rating: 4 },
  { id: '2', vendor_name: 'GlobalTech', vendor_id: 'V002', country: 'Canada', rating: 5 },
  { id: '3', vendor_name: 'EuroSupplies', vendor_id: 'V003', country: 'Germany', rating: 3 },
];

const VendorList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [vendors, setVendors] = useState(mockVendors);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredVendors = mockVendors.filter(vendor => 
      vendor.vendor_name.toLowerCase().includes(term) ||
      vendor.vendor_id.toLowerCase().includes(term) ||
      vendor.country.toLowerCase().includes(term)
    );
    setVendors(filteredVendors);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Input 
          type="text" 
          placeholder="Search vendors..." 
          value={searchTerm}
          onChange={handleSearch}
          className="max-w-sm"
        />
        <Button>Add New Vendor</Button>
      </div>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>Vendor Name</Table.Head>
            <Table.Head>Vendor ID</Table.Head>
            <Table.Head>Country</Table.Head>
            <Table.Head>Rating</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {vendors.map((vendor) => (
            <Table.Row key={vendor.id}>
              <Table.Cell>{vendor.vendor_name}</Table.Cell>
              <Table.Cell>{vendor.vendor_id}</Table.Cell>
              <Table.Cell>{vendor.country}</Table.Cell>
              <Table.Cell>{vendor.rating}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default VendorList;