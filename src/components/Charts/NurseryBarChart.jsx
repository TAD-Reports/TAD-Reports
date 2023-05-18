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
          name: totalData[0]?.name + " Total",
          Total: totalData[0]?.total,
        },
      ];
      keys = Object.keys(firstApiDataMonths);
      const colors = chroma
        .scale(["#7ca1d4", "#1ba742"])
        .mode("hsl")
        .colors(keys.length);

      barkeys = keys.map((key, index) => (
        <Bar key={key} dataKey={key} stackId="a" fill={colors[index]} />
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

      const colors = chroma
        .scale(["#7ca1d4", "#1ba742"])
        .mode("hsl")
        .colors(keys.length);

      barkeys = keys.map((key, index) => (
        <Bar key={key} dataKey={key} stackId="a" fill={colors[index]} />
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
          <Bar dataKey="Total" stackId="a" fill="#0ed145" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
