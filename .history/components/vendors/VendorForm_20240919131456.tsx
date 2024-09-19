import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { createVendor, updateVendor } from '@/actions/vendor-actions';
import { useToast } from '@/components/ui/use-toast';

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
  onSuccess?: () => void;
}

const VendorForm: React.FC<VendorFormProps> = ({ vendor, onSuccess }) => {
  const { toast } = useToast();
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

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: ['average_discount', 'rating', 'credit_limit', 'contract_year'].includes(name)
        ? Number(value)
        : value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const action = vendor?.id ? updateVendor : createVendor;
      const result = vendor?.id ? await action(vendor.id, formData) : await action(formData);

      if (result.success) {
        toast({
          title: vendor?.id ? "Vendor Updated" : "Vendor Created",
          description: "The vendor has been successfully saved.",
        });
        if (onSuccess) onSuccess();
      } else {
        throw new Error(result.error || 'An unknown error occurred');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to ${vendor?.id ? 'update' : 'create'} vendor: ${error.message}`,
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
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
      </div>

      <div className="grid grid-cols-2 gap-4">
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
      </div>

      <div className="grid grid-cols-2 gap-4">
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
      </div>

      <div className="grid grid-cols-2 gap-4">
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
      </div>

      <div className="grid grid-cols-2 gap-4">
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
      </div>

      <Button type="submit" className="w-full">
        {vendor ? 'Update Vendor' : 'Create Vendor'}
      </Button>
    </form>
  );
};

export default VendorForm;