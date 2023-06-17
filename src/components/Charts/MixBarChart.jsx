/* eslint-disable no-else-return */
/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

import PropTypes from "prop-types";
import randomColor from "randomcolor";
import { Grid } from "@mui/material";

export default class MixBarGraph extends PureComponent {
  render() {
    const { graphData } = this.props;

    if (!graphData) {
      return null;
    }

    const data = [];
    const keysSet = new Set();
    const barkeys = [];
    const lineKeys = [];
    const areaKeys = [];

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

    lineKeys.push(
      ...keys.map((key, index) => {
        if (key !== "Total") {
          return (
            <Line
              key={key}
              dataKey={key}
              stroke={`hsl(${colors[index][0]}, ${colors[index][1]}%, ${colors[index][2]}%)`}
              fill={`hsl(${colors[index][0]}, ${colors[index][1]}%, ${colors[index][2]}%)`}
            />
          );
        } else if (key === "Total" && keys.length > 2) {
          return (
            <Line
              key={key}
              dataKey={key}
              stroke={`hsl(${colors[index][0]}, ${colors[index][1]}%, ${colors[index][2]}%)`}
              fill={`hsl(${colors[index][0]}, ${colors[index][1]}%, ${colors[index][2]}%)`}
            />
          );
        } else {
          return null;
        }
      })
    );

    areaKeys.push(
      ...keys.map((key, index) => {
        if (key !== "Total") {
          return (
            <Area
              key={key}
              dataKey={key}
              stroke={`hsl(${colors[index][0]}, ${colors[index][1]}%, ${colors[index][2]}%)`}
              fill={`hsl(${colors[index][0]}, ${colors[index][1]}%, ${colors[index][2]}%)`}
            />
          );
        } else if (key === "Total" && keys.length > 2) {
          return (
            <Area
              key={key}
              dataKey={key}
              stroke={`hsl(${colors[index][0]}, ${colors[index][1]}%, ${colors[index][2]}%)`}
              fill={`hsl(${colors[index][0]}, ${colors[index][1]}%, ${colors[index][2]}%)`}
            />
          );
        } else {
          return null;
        }
      })
    );

    return (
      <Grid container spacing={0}>
        <Grid
          item
          xs={5}
          sx={{
            display: "flex",
            alignItems: "center",
            py: 2,
            mb: 2,
            backgroundColor: "#FFFF",
          }}
        >
          <ResponsiveContainer width="100%" height={438}>
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
        </Grid>
        <Grid
          item
          xs={7}
          sx={{
            display: "flex",
            alignItems: "center",
            py: 2,
            mb: 2,
            pr: 4,
            backgroundColor: "#FFFF",
          }}
        >
          <div style={{ width: "100%" }}>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart
                width={500}
                height={200}
                data={data}
                margin={{
                  top: 0,
                  right: 30,
                  left: 0,
                  bottom: 7,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {lineKeys}
              </LineChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height={200}>
              <AreaChart
                width={500}
                height={200}
                data={data}
                margin={{
                  top: 0,
                  right: 30,
                  left: 0,
                  bottom: 7,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {areaKeys}
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Grid>
      </Grid>
    );
  }
}

MixBarGraph.defaultProps = {
  graphData: [],
};

MixBarGraph.propTypes = {
  graphData: PropTypes.array,
};
