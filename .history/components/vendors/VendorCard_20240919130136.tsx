import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// This is a mock type for a vendor. Replace with the actual type from your schema.
type Vendor = {
  id: string;
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

interface VendorCardProps {
  vendor: Vendor;
}

const VendorCard: React.FC<VendorCardProps> = ({ vendor }) => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {vendor.vendor_name}
          <Badge variant={vendor.rating >= 4 ? "success" : "warning"}>
            Rating: {vendor.rating}/5
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-2 gap-2 text-sm">
          <dt className="font-semibold">Vendor ID:</dt>
          <dd>{vendor.vendor_id}</dd>
          
          <dt className="font-semibold">Country:</dt>
          <dd>{vendor.country}</dd>
          
          <dt className="font-semibold">Payment Terms:</dt>
          <dd>{vendor.payment_terms}</dd>
          
          <dt className="font-semibold">Average Discount:</dt>
          <dd>{vendor.average_discount}%</dd>
          
          <dt className="font-semibold">Contract Type:</dt>
          <dd>{vendor.contract_type}</dd>
          
          <dt className="font-semibold">Credit Limit:</dt>
          <dd>${vendor.credit_limit.toLocaleString()}</dd>
          
          <dt className="font-semibold">Contract Year:</dt>
          <dd>{vendor.contract_year}</dd>
          
          <dt className="font-semibold">Relationship:</dt>
          <dd>{vendor.relationship_type}</dd>
        </dl>
      </CardContent>
    </Card>
  );
};

export default VendorCard;