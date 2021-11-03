import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
} from "recharts";


function Chart({data}) {
  return (
    <div class="mt-2">
      <h2 class="is-size-4 has-text-weight-normal has-text-dark mb-2 has-text-centered">
        Statistics
      </h2>
      <PieChart
        width={400}
        height={200}
        margin={{
          top: 40,
          right: 0,
          left: 0,
          bottom: 20,
        }}
      >
        <Pie
          data={data}
          dataKey="pv"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#8884d8"
          label
        />
      </PieChart>
      <BarChart
        width={400}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}
export default Chart;
