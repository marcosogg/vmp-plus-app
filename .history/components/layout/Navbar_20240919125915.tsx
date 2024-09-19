import React from 'react';
import Link from 'next/link';
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                VMP+
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/vendors" className="text-gray-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Vendors
              </Link>
              <Link href="/parts" className="text-gray-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Parts
              </Link>
              <Link href="/spend" className="text-gray-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Spend
              </Link>
              <Link href="/risk" className="text-gray-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Risk Assessment
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;