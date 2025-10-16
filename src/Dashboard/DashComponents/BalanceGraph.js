import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = {
  daily: [
    { name: "Mon", balance: 400 },
    { name: "Tue", balance: 300 },
    { name: "Wed", balance: 500 },
    { name: "Thu", balance: 700 },
    { name: "Fri", balance: 600 },
    { name: "Sat", balance: 800 },
    { name: "Sun", balance: 900 },
  ],
  weekly: [
    { name: "Week 1", balance: 2800 },
    { name: "Week 2", balance: 3000 },
    { name: "Week 3", balance: 3200 },
    { name: "Week 4", balance: 2900 },
  ],
  monthly: [
    { name: "Jan", balance: 12000 },
    { name: "Feb", balance: 15000 },
    { name: "Mar", balance: 14000 },
    { name: "Apr", balance: 16000 },
  ],
};

export default function BalanceGraph() {
  const [timeRange, setTimeRange] = useState("weekly");
  const [productFilter, setProductFilter] = useState("all");

  const currentData = data[timeRange];

  const totalBalance = currentData.reduce((acc, item) => acc + item.balance, 0);

  return (
    <div className="balance-graph-container">
      <div className="balance-graph-header">
        <div className="balance-graph-title-section">
          <div className="balance-graph-title">Total Balance</div>
          <div className="balance-graph-figure">${totalBalance.toLocaleString()} <span>+15%</span> <b>vs last week</b></div>
        </div>

        <div className="balance-graph-dropdowns">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="balance-graph-select"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>

          <select
            value={productFilter}
            onChange={(e) => setProductFilter(e.target.value)}
            className="balance-graph-select"
          >
            <option value="all">All</option>
            <option value="allProducts">All Products</option>
          </select>
        </div>
      </div>

      <div className="balance-graph-chart-wrapper">
        <ResponsiveContainer width="100%" height={320}>
          <LineChart
            data={currentData}
            margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" className="balance-graph-grid" />
            <XAxis dataKey="name" className="balance-graph-axis" />
            <YAxis className="balance-graph-axis" />
            <Tooltip
              contentStyle={{ borderRadius: 8, fontSize: 14 }}
              itemStyle={{ fontWeight: "600" }}
              cursor={{ strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="balance"
              className="balance-graph-line"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}