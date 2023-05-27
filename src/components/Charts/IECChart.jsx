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
    name: "Region 1",
    Category: 5,
    Male: 1,
    Female: 2,
    NoOfCopies: 2000,
  },
  {
    name: "Region 2",
    Category: 5,
    Male: 1,
    Female: 2,
    NoOfCopies: 3000,
  },
  {
    name: "Region 3",
    Category: 5,
    Male: 1,
    Female: 2,
    NoOfCopies: 4000,
  },
  {
    name: "Region 4",
    Category: 5,
    Male: 1,
    Female: 2,
    NoOfCopies: 5000,
  },
];

export default class IECBarGraph extends PureComponent {
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
          <Bar dataKey="Category" fill="#F7931E" />
          <Bar dataKey="Male" fill="#FF3434" />
          <Bar dataKey="Female" fill="#FF3434" />
          <Bar dataKey="NoOfCopies" fill="#3284FF" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
