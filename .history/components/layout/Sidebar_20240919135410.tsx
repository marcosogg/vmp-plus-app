import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 h-screen">
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/vendors" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">
              Vendors
            </Link>
          </li>
          <li>
            <Link href="/settings" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
