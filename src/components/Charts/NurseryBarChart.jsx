/* eslint-disable react/forbid-prop-types */
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
import PropTypes from "prop-types";
import randomColor from "randomcolor";

export default class NurseryBarChart extends PureComponent {
  render() {
    const { monthData, totalData } = this.props;

    if (!monthData || !totalData) {
      return null; // or display an error message
    }

    const data = [];
    const keysSet = new Set();
    const barkeys = [];

    const formattedTotalData = totalData.map((item) => ({
      name: `${item.name} Total`,
      Total: item.total,
    }));

    monthData.forEach((apiData) => {
      const apiDataMonths = apiData.months;
      data.push({
        name: apiData.name,
        ...apiDataMonths,
      });
      Object.keys(apiDataMonths).forEach((key) => {
        keysSet.add(key);
      });
    });

    const keys = Array.from(keysSet);

    const colors = randomColor({
      count: keys.length,
      format: "hslArray",
    });

    barkeys.push(
      ...keys.map((key, index) => (
        <Bar
          key={key}
          dataKey={key}
          stackId="a"
          fill={`hsl(${colors[index][0]}, ${colors[index][1]}%, ${colors[index][2]}%)`}
        />
      ))
    );

    data.push(...formattedTotalData);

    return (
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          width={500}
          height={100}
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
          {monthData.length > 0 ? (
            <Bar dataKey="Total" stackId="a" fill="#9195cb" />
          ) : null}
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

NurseryBarChart.defaultProps = {
  monthData: [],
  totalData: [],
};

NurseryBarChart.propTypes = {
  monthData: PropTypes.array,
  totalData: PropTypes.array,
};
