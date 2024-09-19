import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// This is a mock type for a part. Replace with the actual type from your schema.
type Part = {
  id: string;
  part_number: string;
  description: string;
  category: string;
  vendor_id: string;
  unit_price: number;
  stock_quantity: number;
  reorder_point: number;
  lead_time_days: number;
};

interface PartCardProps {
  part: Part;
}

const PartCard: React.FC<PartCardProps> = ({ part }) => {
  const stockStatus = part.stock_quantity > part.reorder_point ? 'In Stock' : 'Low Stock';
  const stockStatusColor = part.stock_quantity > part.reorder_point ? 'success' : 'warning';

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {part.part_number}
          <Badge variant={stockStatusColor as 'success' | 'warning'}>
            {stockStatus}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-2 gap-2 text-sm">
          <dt className="font-semibold">Description:</dt>
          <dd>{part.description}</dd>
          
          <dt className="font-semibold">Category:</dt>
          <dd>{part.category}</dd>
          
          <dt className="font-semibold">Vendor ID:</dt>
          <dd>{part.vendor_id}</dd>
          
          <dt className="font-semibold">Unit Price:</dt>
          <dd>${part.unit_price.toFixed(2)}</dd>
          
          <dt className="font-semibold">Stock Quantity:</dt>
          <dd>{part.stock_quantity}</dd>
          
          <dt className="font-semibold">Reorder Point:</dt>
          <dd>{part.reorder_point}</dd>
          
          <dt className="font-semibold">Lead Time:</dt>
          <dd>{part.lead_time_days} days</dd>
        </dl>
      </CardContent>
    </Card>
  );
};

export default PartCard;