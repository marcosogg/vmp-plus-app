import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

// This is a mock type for a vendor. Replace with the actual type from your schema.
type Vendor = {
  id?: string;
  vendor_name: string;
  vendor_id: string;
  payment_terms: string;
  country: string;
  average_discount: number;
  contract_type: string;
  rating: number;
  credit_limit: number;
  contract_year: number;
  relationship_type: string;
};

interface VendorFormProps {
  vendor?: Vendor;
  onSubmit: (vendor: Vendor) => void;
}

const VendorForm: React.FC<VendorFormProps> = ({ vendor, onSubmit }) => {
  const [formData, setFormData] = useState<Vendor>(
    vendor || {
      vendor_name: '',
      vendor_id: '',
      payment_terms: '',
      country: '',
      average_discount: 0,
      contract_type: '',
      rating: 0,
      credit_limit: 0,
      contract_year: new Date().getFullYear(),
      relationship_type: '',
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'average_discount' || name === 'rating' || name === 'credit_limit' || name === 'contract_year'
        ? Number(value)
        : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="vendor_name">Vendor Name</Label>
        <Input
          id="vendor_name"
          name="vendor_name"
          value={formData.vendor_name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="vendor_id">Vendor ID</Label>
        <Input
          id="vendor_id"
          name="vendor_id"
          value={formData.vendor_id}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="payment_terms">Payment Terms</Label>
        <Input
          id="payment_terms"
          name="payment_terms"
          value={formData.payment_terms}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="country">Country</Label>
        <Input
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="average_discount">Average Discount (%)</Label>
        <Input
          type="number"
          id="average_discount"
          name="average_discount"
          value={formData.average_discount}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="contract_type">Contract Type</Label>
        <Input
          id="contract_type"
          name="contract_type"
          value={formData.contract_type}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="rating">Rating</Label>
        <Select name="rating" value={formData.rating.toString()} onValueChange={(value) => handleChange({ target: { name: 'rating', value } } as any)}>
          <Select.Option value="1">1</Select.Option>
          <Select.Option value="2">2</Select.Option>
          <Select.Option value="3">3</Select.Option>
          <Select.Option value="4">4</Select.Option>
          <Select.Option value="5">5</Select.Option>
        </Select>
      </div>

      <div>
        <Label htmlFor="credit_limit">Credit Limit</Label>
        <Input
          type="number"
          id="credit_limit"
          name="credit_limit"
          value={formData.credit_limit}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="contract_year">Contract Year</Label>
        <Input
          type="number"
          id="contract_year"
          name="contract_year"
          value={formData.contract_year}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="relationship_type">Relationship Type</Label>
        <Input
          id="relationship_type"
          name="relationship_type"
          value={formData.relationship_type}
          onChange={handleChange}
        />
      </div>

      <Button type="submit">
        {vendor ? 'Update Vendor' : 'Create Vendor'}
      </Button>
    </form>
  );
};

export default VendorForm;