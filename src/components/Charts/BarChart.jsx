import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "LGU",
    NurseriesMaintained: 4000,
  },
  {
    name: "PhilFIDA",
    NurseriesMaintained: 3000,
  },
];

export default class BarGraph extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width={500}
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
          <Legend />
          {/* <Bar dataKey="pv" fill="#82ca9d" background={{ fill: "#eee" }} /> */}
          <Bar dataKey="NurseriesMaintained" fill="#76a66e" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
