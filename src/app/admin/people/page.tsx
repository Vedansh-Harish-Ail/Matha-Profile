"use client";

import React, { useState } from 'react';
import { GlassCard } from '@/components/admin/GlassCard';
import { 
  Users, 
  UserPlus, 
  Search, 
  MoreVertical, 
  Mail, 
  Phone 
} from 'lucide-react';

const students = [
  { id: 'S001', name: 'Alex Johnson', class: 'Grade 10-A', contact: '9876543210', status: 'Active' },
  { id: 'S002', name: 'Maria Garcia', class: 'Grade 12-C', contact: '9876543211', status: 'Active' },
  { id: 'S003', name: 'James Wilson', class: 'Grade 8-B', contact: '9876543212', status: 'On Leave' },
];

const teachers = [
  { id: 'T001', name: 'Dr. Sarah Smith', dept: 'Mathematics', contact: '9876543220', status: 'Active' },
  { id: 'T002', name: 'Prof. Robert Lee', dept: 'Physics', contact: '9876543221', status: 'Active' },
];

export default function PeopleManagement() {
  const [activeTab, setActiveTab] = useState<'students' | 'teachers'>('students');

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-metropolis font-bold text-primary mb-2">People Management</h2>
          <p className="text-outline">Directory of all students and faculty members.</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-white/50 border border-white/20 rounded-lg text-primary font-bold hover:bg-white/80 transition-all shadow-sm">
            Bulk Import
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-bold shadow-lg hover:shadow-primary/20 transition-all">
            <UserPlus size={20} />
            Quick Add
          </button>
        </div>
      </div>

      <div className="flex gap-8 border-b border-white/20">
        <button 
          onClick={() => setActiveTab('students')}
          className={`pb-4 px-2 font-metropolis font-bold transition-all ${activeTab === 'students' ? 'text-primary border-b-2 border-primary' : 'text-outline hover:text-primary'}`}
        >
          Student Directory
        </button>
        <button 
          onClick={() => setActiveTab('teachers')}
          className={`pb-4 px-2 font-metropolis font-bold transition-all ${activeTab === 'teachers' ? 'text-primary border-b-2 border-primary' : 'text-outline hover:text-primary'}`}
        >
          Teacher Directory
        </button>
      </div>

      <GlassCard className="p-8">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={18} />
            <input 
              type="text" 
              placeholder={`Search ${activeTab}...`}
              className="pl-10 pr-4 py-2 w-full bg-white/50 border border-white/20 rounded-lg text-sm focus:outline-none focus:border-primary/40"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/20">
                <th className="pb-4 font-metropolis font-bold text-primary">Name</th>
                <th className="pb-4 font-metropolis font-bold text-primary">ID</th>
                <th className="pb-4 font-metropolis font-bold text-primary">{activeTab === 'students' ? 'Class' : 'Department'}</th>
                <th className="pb-4 font-metropolis font-bold text-primary">Status</th>
                <th className="pb-4 font-metropolis font-bold text-primary">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {(activeTab === 'students' ? students : teachers).map((person) => (
                <tr key={person.id} className="hover:bg-white/30 transition-colors group">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {person.name[0]}
                      </div>
                      <span className="text-primary font-medium">{person.name}</span>
                    </div>
                  </td>
                  <td className="py-4 text-outline text-sm font-mono">{person.id}</td>
                  <td className="py-4 text-outline text-sm">{'class' in person ? person.class : person.dept}</td>
                  <td className="py-4">
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-bold
                      ${person.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}
                    `}>
                      {person.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-white/50 rounded-lg text-primary transition-colors">
                        <Mail size={16} />
                      </button>
                      <button className="p-2 hover:bg-white/50 rounded-lg text-primary transition-colors">
                        <Phone size={16} />
                      </button>
                      <button className="p-2 hover:bg-white/50 rounded-lg text-primary transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}
