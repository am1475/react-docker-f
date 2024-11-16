import React, { useState, useEffect } from 'react';
import { db } from '../Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { CircularProgress } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';
import Insights from './Insights';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userCollection = collection(db, 'users');
        const userSnapshot = await getDocs(userCollection);
        const userList = userSnapshot.docs.map((doc) => doc.data());
        setUsers(userList);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
        <CircularProgress />
      </div>
    );
  }

  const chartData = users.map((user) => ({
    name: user.name,
    sleepHours: user.sleepHours,
    hydration: user.hydration,
    weight: user.weight,
    activityLevel: user.activityLevel || 0,
  }));

  const pieData = chartData.map((user) => ({
    name: user.name,
    value: user.hydration,
  }));

  const radarData = chartData.map((user) => ({
    name: user.name,
    Sleep: user.sleepHours,
    Hydration: user.hydration,
    Weight: user.weight,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 pt-16">
      <div className="p-8 rounded-lg w-full max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          User Wellness Dashboard
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Line Chart */}
          <div>
            <h3 className="text-2xl font-semibold text-white text-center mb-4">Sleep Hours</h3>
            <LineChart width={400} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#fff" fontSize={12} />
              <YAxis stroke="#fff" fontSize={12} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sleepHours" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
          </div>

          {/* Bar Chart */}
          <div>
            <h3 className="text-2xl font-semibold text-white text-center mb-4">Hydration (Liters)</h3>
            <BarChart width={400} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#fff" fontSize={12} />
              <YAxis stroke="#fff" fontSize={12} />
              <Tooltip />
              <Legend />
              <Bar dataKey="hydration" fill="#82ca9d" />
            </BarChart>
          </div>

          {/* Pie Chart */}
          <div>
            <h3 className="text-2xl font-semibold text-white text-center mb-4">Hydration Distribution</h3>
            <PieChart width={400} height={300}>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label={{ fill: '#fff', fontSize: 10 }}
              />
              <Tooltip />
            </PieChart>
          </div>

          {/* Radar Chart */}
          <div>
            <h3 className="text-2xl font-semibold text-white text-center mb-4">User Comparison</h3>
            <RadarChart outerRadius={90} width={400} height={300} data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" stroke="#fff" fontSize={12} />
              <PolarRadiusAxis stroke="#fff" fontSize={12} />
              <Radar name="Sleep" dataKey="Sleep" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Radar name="Hydration" dataKey="Hydration" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              <Radar name="Weight" dataKey="Weight" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
          </div>

          {/* Area Chart */}
          <div>
            <h3 className="text-2xl font-semibold text-white text-center mb-4">Weight (kg)</h3>
            <AreaChart width={400} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#fff" fontSize={12} />
              <YAxis stroke="#fff" fontSize={12} />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="weight" stroke="#8884d8" fill="#fff" />
            </AreaChart>
          </div>

          {/* Activity Level vs. Weight */}
          <div>
            <h3 className="text-2xl font-semibold text-white text-center mb-4">Activity Level vs. Weight</h3>
            <LineChart width={400} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#fff" fontSize={12} />
              <YAxis stroke="#fff" fontSize={12} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="activityLevel" stroke="#ffff" strokeWidth={2} name="Activity Level" />
              <Line type="monotone" dataKey="weight" stroke="#fff" strokeWidth={2} name="Weight" />
            </LineChart>
          </div>
        </div>
        <Insights />
      </div>
    </div>
  );
};

export default Dashboard;
