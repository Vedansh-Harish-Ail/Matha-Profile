"use client";

import React, { useState } from 'react';
import { GlassCard } from '@/components/admin/GlassCard';
import { 
  Settings, 
  Shield, 
  Bell, 
  History, 
  Save,
  Check
} from 'lucide-react';

const roles = ['Admin', 'Principal', 'Teacher', 'Accountant', 'Registrar'];
const modules = [
  'User Management',
  'Financial Records',
  'Academic Grading',
  'Attendance Tracking',
  'System Configuration'
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'general' | 'permissions' | 'security'>('permissions');

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-metropolis font-bold text-primary mb-2">Settings & Configuration</h2>
        <p className="text-outline">Manage institutional settings and user access controls.</p>
      </div>

      <div className="flex gap-8 border-b border-white/20">
        {[
          { id: 'general', icon: Settings, label: 'General' },
          { id: 'permissions', icon: Shield, label: 'Roles & Permissions' },
          { id: 'security', icon: Bell, label: 'Security' },
        ].map((tab) => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 pb-4 px-2 font-metropolis font-bold transition-all ${activeTab === tab.id ? 'text-primary border-b-2 border-primary' : 'text-outline hover:text-primary'}`}
          >
            <tab.icon size={18} />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'permissions' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <GlassCard className="p-6 h-fit">
            <h3 className="text-lg font-bold text-primary mb-4">Roles</h3>
            <ul className="space-y-2">
              {roles.map((role) => (
                <li key={role}>
                  <button className={`w-full text-left p-3 rounded-lg transition-all ${role === 'Admin' ? 'bg-primary text-white font-bold' : 'text-primary hover:bg-white/50'}`}>
                    {role}
                  </button>
                </li>
              ))}
            </ul>
            <button className="w-full mt-6 py-2 border border-dashed border-primary/40 rounded-lg text-primary text-sm font-bold hover:bg-primary/5 transition-all">
              + Add New Role
            </button>
          </GlassCard>

          <GlassCard className="lg:col-span-3 p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-primary">Permission Matrix: <span className="text-secondary">Admin</span></h3>
              <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg font-bold shadow-md hover:shadow-lg transition-all">
                <Save size={18} />
                Save Changes
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="pb-4 font-metropolis font-bold text-primary">Module</th>
                    <th className="pb-4 font-metropolis font-bold text-primary text-center">View</th>
                    <th className="pb-4 font-metropolis font-bold text-primary text-center">Create</th>
                    <th className="pb-4 font-metropolis font-bold text-primary text-center">Edit</th>
                    <th className="pb-4 font-metropolis font-bold text-primary text-center">Delete</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {modules.map((module) => (
                    <tr key={module} className="hover:bg-white/30 transition-colors">
                      <td className="py-6 text-primary font-medium">{module}</td>
                      {['view', 'create', 'edit', 'delete'].map((action) => (
                        <td key={action} className="py-6 text-center">
                          <button className="w-6 h-6 mx-auto rounded border-2 border-primary/20 flex items-center justify-center hover:border-primary/40 transition-colors">
                            <Check size={14} className="text-primary" />
                          </button>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
}
