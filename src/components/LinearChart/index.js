import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Week 1",
    commits: 60,
  },
  {
    name: "Week 2",
    commits: 160,
  },
  {
    name: "Week 3",
    commits: 180,
  },
  {
    name: "Week 4",
    commits: 220,
  },
  {
    name: "Week 5",
    commits: 300,
  },
  {
    name: "Week 6",
    commits: 250,
  },
];

export default function LinearChart() {
  return (
    <LineChart
      width={900}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="commits"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}
