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
import chroma from "chroma-js";

// const apiData = this.props.monthData;
// const totalData = this.props.totalData;

// let graphData = [];

// if (datas) {
//   graphData = datas.map((data) => ({
//     name: data.funded_by,
//     NurseriesMaintained: data.count,
//   }));

//   console.log(graphData);
// }

let apiData = [
  {
    name: "LGU",
    months: {
      jan_2021: 1000,
      feb_2021: 2000,
      mar_2021: 4500,
      jan_2022: 3000,
      feb_2022: 5000,
      mar_2022: 7500,
      jan_2023: 40000,
      feb_2023: 3000,
      mar_2023: 1500,
    },
  },
  {
    name: "PhilFIDA",
    months: [
      {
        jan_2021: 2000,
        feb_2021: 2000,
        mar_2021: 2500,
        jan_2022: 2000,
        feb_2022: 2000,
        mar_2022: 2500,
        jan_2023: 4000,
        feb_2023: 4000,
        mar_2023: 4500,
      },
    ],
  },
  {
    name: "LGU_Total",
    months: [
      {
        jan_2021: 5000.75,
      },
    ],
  },
  {
    name: "PhilFIDA_Total",
    months: [
      {
        jan_2021: 5000.25,
      },
    ],
  },
];

let keys = Object.keys(apiData[0].months);

const data = [
  {
    name: apiData[0].name,
    ...apiData[0].months,
  },
  {
    name: apiData[1].name,
    ...apiData[1].months[0],
  },
  {
    name: apiData[2].name,
    ...apiData[2].months[0],
  },
  {
    name: apiData[3].name,
    ...apiData[3].months[0],
  },
];

const colors = chroma
  .scale(["#e393cf", "#1ba742"])
  .mode("hsl")
  .colors(keys.length);

let barkeys = keys.map((key, index) => (
  <Bar key={key} dataKey={key} stackId="a" fill={colors[index]} />
));

export default class NurseryBarChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
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
          {barkeys}
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
