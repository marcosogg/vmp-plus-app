import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// This is a mock type for a spend record. Replace with the actual type from your schema.
type Spend = {
  id: string;
  vendor_id: string;
  amount: number;
  date: string;
  category: string;
  description: string;
  payment_status: 'Paid' | 'Pending' | 'Overdue';
  payment_method: string;
  invoice_number: string;
};

interface SpendCardProps {
  spend: Spend;
}

const SpendCard: React.FC<SpendCardProps> = ({ spend }) => {
  const statusColor = {
    Paid: 'success',
    Pending: 'warning',
    Overdue: 'destructive',
  }[spend.payment_status];

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Spend Record: {spend.invoice_number}
          <Badge variant={statusColor as 'success' | 'warning' | 'destructive'}>
            {spend.payment_status}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-2 gap-2 text-sm">
          <dt className="font-semibold">Vendor ID:</dt>
          <dd>{spend.vendor_id}</dd>
          
          <dt className="font-semibold">Amount:</dt>
          <dd>${spend.amount.toFixed(2)}</dd>
          
          <dt className="font-semibold">Date:</dt>
          <dd>{spend.date}</dd>
          
          <dt className="font-semibold">Category:</dt>
          <dd>{spend.category}</dd>
          
          <dt className="font-semibold">Description:</dt>
          <dd>{spend.description}</dd>
          
          <dt className="font-semibold">Payment Method:</dt>
          <dd>{spend.payment_method}</dd>
        </dl>
      </CardContent>
    </Card>
  );
};

export default SpendCard;