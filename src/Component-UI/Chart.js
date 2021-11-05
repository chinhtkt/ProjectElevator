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

function Chart({ data }) {
  return (
    <div class="mt-2">
      {/* <h2 class="is-size-4 has-text-weight-normal has-text-dark mb-2 has-text-centered is-uppercase is-family-monospace	 mb-3">
        Statistics
      </h2> */}
      <span class="icon-text is-flex is-justify-content-center">
        <span class="icon">
        <i class="fas fa-chart-line"></i>
        </span>
        <span><h2 class="is-size-4 has-text-weight-normal has-text-dark mb-2 has-text-centered is-uppercase is-family-monospace	mb-3">
        Statistics
      </h2></span>
      </span>
      <PieChart
        width={400}
        height={200}
        margin={{
          top: 40,
          right: 0,
          left: 150,
          bottom: 20,
        }}
      >
        <Pie
          data={data}
          dataKey="latitude"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#8884d8"
          label
        />
      </PieChart>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 20,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="latitude" fill="#8884d8" />
        <Bar dataKey="longitude" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}
export default Chart;
