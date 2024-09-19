import React from 'react';
import Table from '../common/Table';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Manager' },
  // Add more users as needed to demonstrate pagination
];

const columns = [
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email' },
  { key: 'role', header: 'Role' },
  {
    key: 'actions',
    header: 'Actions',
    render: (value: any, item: User) => (
      <button onClick={() => alert(`Edit user ${item.name}`)}>Edit</button>
    ),
  },
];

const TableExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Table Example</h2>
      <Table
        data={users}
        columns={columns}
        itemsPerPage={2}
      />
    </div>
  );
};

export default TableExample;