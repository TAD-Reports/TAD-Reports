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
    SumOfActualArea: 4000,
    SumofDiseaseIncidenceDuringEradication: 4000,
  },
  {
    name: "Region 2",
    SumOfActualArea: 4000,
    SumofDiseaseIncidenceDuringEradication: 4000,
  },
  {
    name: "Region 3",
    SumOfActualArea: 4000,
    SumofDiseaseIncidenceDuringEradication: 4000,
  },
  {
    name: "Region 4",
    SumOfActualArea: 4000,
    SumofDiseaseIncidenceDuringEradication: 4000,
  },
];

export default class DiseaseBarGraph extends PureComponent {
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
          <Bar dataKey="SumOfActualArea" fill="#F7931E" />
          <Bar
            dataKey="SumofDiseaseIncidenceDuringEradication"
            fill="#FF3434"
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
