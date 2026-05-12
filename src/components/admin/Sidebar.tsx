import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  CreditCard, 
  Settings, 
  LogOut 
} from 'lucide-react';
import Link from 'next/link';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
  { icon: Users, label: 'People', href: '/admin/people' },
  { icon: GraduationCap, label: 'Exams', href: '/admin/exams' },
  { icon: CreditCard, label: 'Finance', href: '/admin/finance' },
  { icon: Settings, label: 'Settings', href: '/admin/settings' },
];

export const AdminSidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white/40 backdrop-blur-deep border-r border-white/20 p-6 flex flex-col">
      <div className="mb-10">
        <h1 className="text-2xl font-metropolis font-bold text-primary">EduSphere</h1>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link 
                href={item.href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors text-primary-fixed-dim hover:text-primary font-medium"
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto">
        <button className="flex items-center gap-3 p-3 text-red-500 hover:bg-red-50 rounded-lg w-full transition-colors">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};
