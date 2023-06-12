/* eslint-disable no-else-return */
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

export default class MixBarGraph extends PureComponent {
  render() {
    const { graphData } = this.props;

    if (!graphData) {
      return null;
    }

    const data = [];
    const keysSet = new Set();
    const barkeys = [];

    graphData.forEach((apiData) => {
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

    // Remove the "total" key from the keys array
    const totalIndex = keys.indexOf("Total");
    if (totalIndex !== -1) {
      keys.splice(totalIndex, 1);
    }

    // Push the "total" key to the end of the keys array
    keys.push("Total");

    barkeys.push(
      ...keys.map((key, index) => {
        if (key !== "Total") {
          return (
            <Bar
              key={key}
              dataKey={key}
              stackId="a"
              fill={`hsl(${colors[index][0]}, ${colors[index][1]}%, ${colors[index][2]}%)`}
            />
          );
        } else if (key === "Total" && keys.length > 2) {
          return (
            <Bar
              key={key}
              dataKey={key}
              fill={`hsl(${colors[index][0]}, ${colors[index][1]}%, ${colors[index][2]}%)`}
            />
          );
        } else {
          return null;
        }
      })
    );

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
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

MixBarGraph.defaultProps = {
  graphData: [],
};

MixBarGraph.propTypes = {
  graphData: PropTypes.array,
};
