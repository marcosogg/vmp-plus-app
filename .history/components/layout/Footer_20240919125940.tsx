import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <Link href="/about" className="text-base text-gray-500 hover:text-gray-900">
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/privacy" className="text-base text-gray-500 hover:text-gray-900">
              Privacy Policy
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/terms" className="text-base text-gray-500 hover:text-gray-900">
              Terms of Service
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/contact" className="text-base text-gray-500 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </nav>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} VMP+ All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;