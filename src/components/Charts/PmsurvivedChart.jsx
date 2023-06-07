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

export default class PmsurvivedBarGraph extends PureComponent {
  render() {
    const { monthData, totalData } = this.props;

    if (!monthData || !totalData) {
      // Handle the case when apiData or totalData is undefined or null
      return null; // or display an error message
    }

    let data = [];
    let keys = [];
    let barkeys = [];

    console.log(data);

    if (monthData.length < 3) {
      const firstApiData = monthData[0] || {};
      const secondApiData = monthData[1] || {};
      const firstApiDataMonths = firstApiData.months || {};
      const secondApiDataMonths = secondApiData.months || {};
      const formattedTotalData = totalData.slice(0, 2).map((item) => ({
        name: `${item.name} Total`,
        Total: item.total || 0,
      }));
      console.log(firstApiData.name);
      data = [
        {
          name: firstApiData.name,
          ...firstApiDataMonths,
        },
        {
          name: secondApiData.name,
          ...secondApiDataMonths,
        },
        ...formattedTotalData,
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
      const firstApiData = monthData[0] || {};
      const firstApiDataMonths = firstApiData.months || {};
      const secondApiData = monthData[1] || {};
      const secondApiDataMonths = secondApiData.months || {};
      const thirdApiData = monthData[2] || {};
      const thirdApiDataMonths = thirdApiData.months || {};
      const formattedTotalData = totalData.map((item) => ({
        name: `${item.name} Total`,
        Total: item.total,
      }));
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
          name: thirdApiData.name,
          ...thirdApiDataMonths,
        },
        ...formattedTotalData,
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
          {barkeys}
          {monthData.length > 0 ? (
            <Bar dataKey="Total" stackId="a" fill="#9195cb" />
          ) : null}
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

PmsurvivedBarGraph.defaultProps = {
  monthData: [],
  totalData: [],
};

PmsurvivedBarGraph.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  monthData: PropTypes.array,
  // eslint-disable-next-line react/forbid-prop-types
  totalData: PropTypes.array,
};
