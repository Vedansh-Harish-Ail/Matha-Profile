'use client';

import React from 'react';
import { LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { icon: LayoutDashboard, label: 'Products', href: '/admin' },
];

export const AdminSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden h-screen w-64 flex-col border-r border-white/20 bg-white/70 p-6 shadow-sm backdrop-blur-deep md:flex">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-primary">Mata Admin</h1>
        <p className="mt-1 text-sm text-gray-500">Product control</p>
      </div>
      <nav className="flex-1">
        <ul className="space-y-3">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg p-3 font-medium transition-colors ${
                    isActive ? 'bg-primary text-white' : 'text-gray-600 hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
