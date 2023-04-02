import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  let marksArray = [
    {
      id: 1,
      name: "John",
      physics: 80,
      chemistry: 75,
      math: 90,
    },
    {
      id: 2,
      name: "Alice",
      physics: 70,
      chemistry: 85,
      math: 80,
    },
    {
      id: 3,
      name: "Bob",
      physics: 90,
      chemistry: 80,
      math: 85,
    },
    {
      id: 4,
      name: "Cathy",
      physics: 75,
      chemistry: 70,
      math: 95,
    },
    {
      id: 5,
      name: "David",
      physics: 85,
      chemistry: 90,
      math: 75,
    },
    {
      id: 6,
      name: "Emily",
      physics: 95,
      chemistry: 85,
      math: 80,
    },
    {
      id: 7,
      name: "Frank",
      physics: 80,
      chemistry: 90,
      math: 75,
    },
    {
      id: 8,
      name: "Grace",
      physics: 70,
      chemistry: 75,
      math: 85,
    },
    {
      id: 9,
      name: "Harry",
      physics: 90,
      chemistry: 85,
      math: 95,
    },
    {
      id: 10,
      name: "Isabella",
      physics: 85,
      chemistry: 95,
      math: 90,
    },
    {
      id: 11,
      name: "Jacob",
      physics: 75,
      chemistry: 85,
      math: 80,
    },
    {
      id: 12,
      name: "Katherine",
      physics: 90,
      chemistry: 80,
      math: 85,
    },
  ];

  return (
    <div>
      <LineChart width={1000} height={300} data={marksArray}>
        <Line dataKey="physics"></Line>
        <Line stroke="#8884d8" dataKey="math"></Line>
        <Line dataKey="chemistry"></Line>
        <XAxis dataKey="name" />
        <YAxis></YAxis>
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Dashboard;
