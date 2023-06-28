/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable class-methods-use-this */
import React, { PureComponent } from "react";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveBar } from "@nivo/bar";

import PropTypes from "prop-types";
// import randomColor from "randomcolor";
import { Box, Grid, Paper } from "@mui/material";
import styled from "@emotion/styled";

export default class MixBarGraph extends PureComponent {
  getUniqueKeys(data) {
    const keysSet = new Set();

    data.forEach((item) => {
      Object.keys(item).forEach((key) => {
        if (key !== "name") {
          keysSet.add(key);
        }
      });
    });

    return Array.from(keysSet);
  }

  render() {
    const {
      areaColor,
      decimal,
      lineChartLegend,
      barChartLegend,
      lineGraphData,
      barGraphData,
    } = this.props;

    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: "center",
      height: "30vh",
      color: theme.palette.text.secondary,
      borderRadius: "10px",
      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.4)",
    }));

    const keysArray = this.getUniqueKeys(barGraphData);

    return (
      <Box sx={{ mb: 2, mt: 1, flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Item>
              <ResponsiveLine
                data={lineGraphData}
                margin={{ top: 40, right: 110, bottom: 60, left: 60 }}
                xScale={{ type: "point" }}
                yScale={{
                  type: "linear",
                  min: "auto",
                  max: "auto",
                  stacked: false, // <------- Stacked or Merged
                  reverse: false,
                }}
                yFormat={decimal}
                curve="catmullRom"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: lineChartLegend,
                  legendOffset: 36,
                  legendPosition: "middle",
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 20,
                  tickRotation: 0,
                  legendPosition: "middle",
                  legendOffset: -40,
                }}
                enableGridX={false}
                colors={{ scheme: "nivo" }}
                // colors={{ scheme: "category10" }}
                pointSize={10}
                pointColor={{ from: "color", modifiers: [] }}
                enablePointLabel={true}
                pointLabelYOffset={-15}
                enableArea={areaColor}
                areaBlendMode="exclusion"
                useMesh={true}
                legends={[
                  {
                    anchor: "bottom-right",
                    direction: "column",
                    justify: true,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: "right-to-left",
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: "circle",
                    symbolBorderColor: "rgba(0, 0, 0, .5)",
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemBackground: "rgba(0, 0, 0, .03)",
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]}
              />
            </Item>
          </Grid>

          <Grid item xs={8}>
            <Item>
              <ResponsiveBar
                data={barGraphData}
                keys={keysArray}
                indexBy="name"
                margin={{ top: 40, right: 130, bottom: 60, left: 60 }}
                padding={0.3}
                groupMode="grouped"
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                valueFormat={decimal}
                colors={{ scheme: "nivo" }}
                // colors={{ scheme: "category10" }}
                defs={[
                  {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "#38bcb2",
                    size: 4,
                    padding: 1,
                    stagger: true,
                  },
                  {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "#eed312",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                  },
                ]}
                fill={[
                  {
                    match: {
                      id: "fries",
                    },
                    id: "dots",
                  },
                  {
                    match: {
                      id: "sandwich",
                    },
                    id: "lines",
                  },
                ]}
                borderColor={{
                  from: "color",
                  modifiers: [["darker", 1.6]],
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: barChartLegend,
                  legendPosition: "middle",
                  legendOffset: 32,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 20,
                  tickRotation: 0,
                  legendPosition: "middle",
                  legendOffset: -40,
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                  from: "color",
                  modifiers: [["darker", 1.6]],
                }}
                legends={[
                  {
                    dataFrom: "keys",
                    anchor: "bottom-right",
                    direction: "column",
                    justify: true,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: "right-to-left",
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]}
                role="application"
                // eslint-disable-next-line react/jsx-boolean-value
                isFocusable={true}
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={(e) =>
                  `${e.id}: ${e.formattedValue} in name: ${e.indexValue}`
                }
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

MixBarGraph.defaultProps = {
  areaColor: false,
  decimal: " >-.2f",
  lineChartLegend: "",
  barChartLegend: "",
  lineGraphData: [],
  barGraphData: [],
};

MixBarGraph.propTypes = {
  areaColor: PropTypes.bool,
  decimal: PropTypes.string,
  lineChartLegend: PropTypes.string,
  barChartLegend: PropTypes.string,
  lineGraphData: PropTypes.array,
  barGraphData: PropTypes.array,
};
