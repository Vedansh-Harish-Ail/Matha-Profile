import { GlassCard } from '@/components/admin/GlassCard';
import { 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownRight, 
  Search,
  Filter
} from 'lucide-react';

const recentPayments = [
  { id: '1', student: 'Alex Johnson', amount: '$450', status: 'Paid', date: '2024-05-10', class: 'Grade 10-A' },
  { id: '2', student: 'Maria Garcia', amount: '$450', status: 'Overdue', date: '2024-05-01', class: 'Grade 12-C' },
  { id: '3', student: 'James Wilson', amount: '$225', status: 'Partially Paid', date: '2024-05-08', class: 'Grade 8-B' },
  { id: '4', student: 'Lily Chen', amount: '$450', status: 'Paid', date: '2024-05-09', class: 'Grade 9-A' },
];

export default function FinanceDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-metropolis font-bold text-primary mb-2">Fees & Finance</h2>
          <p className="text-outline">Manage student fee collections and financial reports.</p>
        </div>
        <button className="bg-primary text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2">
          <ArrowUpRight size={20} />
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="p-6 border-l-4 border-l-green-500">
          <p className="text-sm font-medium text-outline">Total Collected</p>
          <h3 className="text-2xl font-bold text-primary mt-1">$84,200</h3>
          <p className="text-xs text-green-500 mt-2 flex items-center gap-1">
            <ArrowUpRight size={14} /> +15% from last month
          </p>
        </GlassCard>
        <GlassCard className="p-6 border-l-4 border-l-orange-500">
          <p className="text-sm font-medium text-outline">Outstanding Dues</p>
          <h3 className="text-2xl font-bold text-primary mt-1">$12,450</h3>
          <p className="text-xs text-orange-500 mt-2 flex items-center gap-1">
            <ArrowDownRight size={14} /> -5% reduction
          </p>
        </GlassCard>
        <GlassCard className="p-6 border-l-4 border-l-secondary">
          <p className="text-sm font-medium text-outline">Next Projected</p>
          <h3 className="text-2xl font-bold text-primary mt-1">$105,000</h3>
          <p className="text-xs text-secondary mt-2">Expected by June 1st</p>
        </GlassCard>
      </div>

      <GlassCard className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-primary">Recent Transactions</h3>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={18} />
              <input 
                type="text" 
                placeholder="Search students..." 
                className="pl-10 pr-4 py-2 bg-white/50 border border-white/20 rounded-lg text-sm focus:outline-none focus:border-primary/40"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/50 border border-white/20 rounded-lg text-sm text-primary font-medium hover:bg-white/80 transition-all">
              <Filter size={18} />
              Filters
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/20">
                <th className="pb-4 font-metropolis font-bold text-primary">Student Name</th>
                <th className="pb-4 font-metropolis font-bold text-primary">Class</th>
                <th className="pb-4 font-metropolis font-bold text-primary">Amount</th>
                <th className="pb-4 font-metropolis font-bold text-primary">Status</th>
                <th className="pb-4 font-metropolis font-bold text-primary">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {recentPayments.map((payment) => (
                <tr key={payment.id} className="hover:bg-white/30 transition-colors">
                  <td className="py-4 text-primary font-medium">{payment.student}</td>
                  <td className="py-4 text-outline text-sm">{payment.class}</td>
                  <td className="py-4 text-primary font-bold">{payment.amount}</td>
                  <td className="py-4">
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-bold
                      ${payment.status === 'Paid' ? 'bg-green-100 text-green-700' : ''}
                      ${payment.status === 'Overdue' ? 'bg-red-100 text-red-700' : ''}
                      ${payment.status === 'Partially Paid' ? 'bg-orange-100 text-orange-700' : ''}
                    `}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="py-4 text-outline text-sm">{payment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}
