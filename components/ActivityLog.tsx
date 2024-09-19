import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table } from '@/components/ui/table';

// This is a mock type for activity log entry. Replace with the actual type from your schema.
type ActivityLogEntry = {
  id: string;
  user_id: string;
  user_name: string;
  action: string;
  entity_type: string;
  entity_id: string;
  timestamp: string;
};

interface ActivityLogProps {
  activities: ActivityLogEntry[];
}

const ActivityLog: React.FC<ActivityLogProps> = ({ activities }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Activity Log</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head>User</Table.Head>
              <Table.Head>Action</Table.Head>
              <Table.Head>Entity</Table.Head>
              <Table.Head>Timestamp</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {activities.map((activity) => (
              <Table.Row key={activity.id}>
                <Table.Cell>{activity.user_name}</Table.Cell>
                <Table.Cell>{activity.action}</Table.Cell>
                <Table.Cell>{`${activity.entity_type} (${activity.entity_id})`}</Table.Cell>
                <Table.Cell>{new Date(activity.timestamp).toLocaleString()}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ActivityLog;

// Example usage:
// const mockActivities: ActivityLogEntry[] = [
//   {
//     id: '1',
//     user_id: 'user1',
//     user_name: 'John Doe',
//     action: 'Created',
//     entity_type: 'Vendor',
//     entity_id: 'V001',
//     timestamp: '2023-06-01T10:30:00Z',
//   },
//   {
//     id: '2',
//     user_id: 'user2',
//     user_name: 'Jane Smith',
//     action: 'Updated',
//     entity_type: 'Part',
//     entity_id: 'P005',
//     timestamp: '2023-06-02T14:45:00Z',
//   },
// ];
// 
// <ActivityLog activities={mockActivities} />