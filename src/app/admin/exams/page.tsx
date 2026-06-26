import { GlassCard } from '@/components/admin/GlassCard';
import { 
  GraduationCap, 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertCircle 
} from 'lucide-react';

const upcomingExams = [
  { id: '1', subject: 'Mathematics', class: 'Grade 10-A', date: '2024-05-15', time: '10:00 AM', status: 'Scheduled' },
  { id: '2', subject: 'Physics', class: 'Grade 12-C', date: '2024-05-18', time: '02:00 PM', status: 'Scheduled' },
  { id: '3', subject: 'History', class: 'Grade 8-B', date: '2024-05-12', time: '09:00 AM', status: 'In Progress' },
];

export default function ExamsDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-metropolis font-bold text-primary mb-2">Exams & Results</h2>
        <p className="text-outline">Track academic assessments and result processing.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <GlassCard className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
              <GraduationCap size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-outline">Total Exams</p>
              <h3 className="text-2xl font-bold text-primary">42</h3>
            </div>
          </div>
        </GlassCard>
        <GlassCard className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 text-green-600 rounded-lg">
              <CheckCircle size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-outline">Evaluated</p>
              <h3 className="text-2xl font-bold text-primary">35</h3>
            </div>
          </div>
        </GlassCard>
        <GlassCard className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-outline">Pending</p>
              <h3 className="text-2xl font-bold text-primary">7</h3>
            </div>
          </div>
        </GlassCard>
        <GlassCard className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
              <AlertCircle size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-outline">Avg. Performance</p>
              <h3 className="text-2xl font-bold text-primary">78%</h3>
            </div>
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-primary">Upcoming Schedule</h3>
            <button className="text-sm text-primary font-bold hover:underline">View Calendar</button>
          </div>
          <div className="space-y-4">
            {upcomingExams.map((exam) => (
              <div key={exam.id} className="p-4 bg-white/40 border border-white/20 rounded-xl flex justify-between items-center group hover:bg-white/60 transition-all">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{exam.subject}</h4>
                    <p className="text-xs text-outline">{exam.class}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-primary">{exam.date}</p>
                  <p className="text-xs text-outline">{exam.time}</p>
                </div>
                <div className={`
                  ml-4 px-3 py-1 rounded-full text-[10px] font-bold
                  ${exam.status === 'In Progress' ? 'bg-orange-100 text-orange-600 animate-pulse' : 'bg-blue-100 text-blue-600'}
                `}>
                  {exam.status}
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-8">
          <h3 className="text-xl font-bold mb-6 text-primary">Recent Results</h3>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-primary">Mathematics (Grade 10-A)</span>
                <span className="text-outline font-bold">88%</span>
              </div>
              <div className="w-full h-2 bg-white/50 rounded-full overflow-hidden">
                <div className="w-[88%] h-full bg-primary" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-primary">English Literature (Grade 9-B)</span>
                <span className="text-outline font-bold">72%</span>
              </div>
              <div className="w-full h-2 bg-white/50 rounded-full overflow-hidden">
                <div className="w-[72%] h-full bg-secondary" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-primary">General Science (Grade 8-A)</span>
                <span className="text-outline font-bold">94%</span>
              </div>
              <div className="w-full h-2 bg-white/50 rounded-full overflow-hidden">
                <div className="w-[94%] h-full bg-green-500" />
              </div>
            </div>
          </div>
          <button className="w-full mt-8 py-3 bg-white/50 border border-white/20 rounded-lg text-primary font-bold hover:bg-white/80 transition-all">
            Upload New Results
          </button>
        </GlassCard>
      </div>
    </div>
  );
}
