import { GlassCard } from '@/components/admin/GlassCard';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  BookOpen 
} from 'lucide-react';

const stats = [
  { label: 'Total Students', value: '1,240', change: '+12%', icon: Users, color: 'text-primary' },
  { label: 'Total Teachers', value: '86', change: '+2%', icon: BookOpen, color: 'text-secondary' },
  { label: 'Total Revenue', value: '$124,500', change: '+8%', icon: DollarSign, color: 'text-green-600' },
  { label: 'Active Exams', value: '12', change: 'Current', icon: TrendingUp, color: 'text-orange-500' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-metropolis font-bold text-primary mb-2">Dashboard Overview</h2>
        <p className="text-outline">Welcome back, Admin. Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <GlassCard key={stat.label} className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-outline">{stat.label}</p>
                <h3 className="text-2xl font-bold mt-1 text-primary">{stat.value}</h3>
                <span className="text-xs font-semibold text-green-500">{stat.change}</span>
              </div>
              <div className={`p-3 rounded-lg bg-white/50 border border-white/40 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <GlassCard className="lg:col-span-2 p-8 h-[400px]">
          <h3 className="text-xl font-bold mb-6 text-primary">Revenue Analytics</h3>
          <div className="w-full h-full flex items-center justify-center text-outline italic">
            [Chart Component Placeholder - Re-evaluating Shadcn Charts]
          </div>
        </GlassCard>

        <GlassCard className="p-8">
          <h3 className="text-xl font-bold mb-6 text-primary">Recent Notifications</h3>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-secondary" />
              <div>
                <p className="text-sm font-medium text-primary">New admission request: Sarah J.</p>
                <p className="text-xs text-outline">2 minutes ago</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
              <div>
                <p className="text-sm font-medium text-primary">Fee collection report generated.</p>
                <p className="text-xs text-outline">1 hour ago</p>
              </div>
            </li>
          </ul>
        </GlassCard>
      </div>
    </div>
  );
}
