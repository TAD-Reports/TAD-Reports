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
import randomColor from "randomcolor";

export default class NurseryBarChart extends PureComponent {
  render() {
    const apiData = this.props.monthData;
    const totalData = this.props.totalData;

    console.log(apiData);
    console.log(totalData);

    if (!apiData || !totalData) {
      // Handle the case when apiData or totalData is undefined or null
      return null; // or display an error message
    }

    let data = [];
    let keys = [];
    let barkeys = [];

    if (apiData.length < 2) {
      const firstApiData = apiData[0] || {};
      const firstApiDataMonths = firstApiData.months || {};
      data = [
        {
          name: firstApiData.name,
          ...firstApiDataMonths,
        },
        {
          name: firstApiData.name === "LGU" ? "PhilFIDA" : "LGU",
          _: 0,
        },
        {
          name: totalData[0]?.name + " Total",
          Total: totalData[0]?.total,
        },
        {
          name: totalData[0]?.name === "LGU" ? "PhilFIDA Total" : "LGU Total",
          Total: 0,
        },
      ];
      keys = Object.keys(firstApiDataMonths);
      const colors = randomColor({
        count: keys.length,
        format: "hslArray",
      });

      barkeys = keys.map((key, index) => (
        <Bar
          key={key}
          dataKey={key}
          stackId="a"
          fill={`hsl(${colors[index][0]}, ${colors[index][1]}%, ${colors[index][2]}%)`}
        />
      ));
    } else {
      const firstApiData = apiData[0] || {};
      const firstApiDataMonths = firstApiData.months || {};
      const secondApiData = apiData[1] || {};
      const secondApiDataMonths = secondApiData.months || {};
      data = [
        {
          name: firstApiData.name,
          ...firstApiDataMonths,
        },
        {
          name: secondApiData.name,
          ...secondApiDataMonths,
        },
        {
          name: totalData[0]?.name + " Total",
          Total: totalData[0]?.total,
        },
        {
          name: totalData[1]?.name + " Total",
          Total: totalData[1]?.total,
        },
      ];
      keys = [
        ...new Set([
          ...Object.keys(firstApiDataMonths),
          ...Object.keys(secondApiDataMonths),
        ]),
      ];

      const colors = randomColor({
        count: keys.length,
        format: "hslArray",
      });

      barkeys = keys.map((key, index) => (
        <Bar
          key={key}
          dataKey={key}
          stackId="a"
          fill={`hsl(${colors[index][0]}, ${colors[index][1]}%, ${colors[index][2]}%)`}
        />
      ));
    }

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
          <Bar dataKey="_" stackId="a" fill="white" />
          <Bar dataKey="Total" stackId="a" fill="#9195cb" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
