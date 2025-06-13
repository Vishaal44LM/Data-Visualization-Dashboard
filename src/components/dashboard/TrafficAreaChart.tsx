
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', visitors: 2400, pageViews: 4800 },
  { day: 'Tue', visitors: 1398, pageViews: 2796 },
  { day: 'Wed', visitors: 9800, pageViews: 19600 },
  { day: 'Thu', visitors: 3908, pageViews: 7816 },
  { day: 'Fri', visitors: 4800, pageViews: 9600 },
  { day: 'Sat', visitors: 3800, pageViews: 7600 },
  { day: 'Sun', visitors: 4300, pageViews: 8600 },
];

const TrafficAreaChart = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="day" 
            tick={{ fontSize: 12, fill: '#666' }}
            axisLine={{ stroke: '#e0e0e0' }}
          />
          <YAxis 
            tick={{ fontSize: 12, fill: '#666' }}
            axisLine={{ stroke: '#e0e0e0' }}
          />
          <Tooltip 
            formatter={(value, name) => [value, name === 'visitors' ? 'Visitors' : 'Page Views']}
            labelStyle={{ color: '#333' }}
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e0e0e0', 
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Area 
            type="monotone" 
            dataKey="pageViews" 
            stackId="1"
            stroke="#8b5cf6" 
            fill="url(#pageViewsGradient)"
            className="opacity-80"
          />
          <Area 
            type="monotone" 
            dataKey="visitors" 
            stackId="1"
            stroke="#06b6d4" 
            fill="url(#visitorsGradient)"
          />
          <defs>
            <linearGradient id="visitorsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.8}/>
              <stop offset="100%" stopColor="#06b6d4" stopOpacity={0.2}/>
            </linearGradient>
            <linearGradient id="pageViewsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.8}/>
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrafficAreaChart;
