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

let apiData = [
    {
        name: "Copies Distributed",
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
];

let keys = Object.keys(apiData[0].months);

const data = [
    {
        name: apiData[0].name,
        ...apiData[0].months,
    },
];

const colors = chroma
    .scale(["#e393cf", "#1ba742"])
    .mode("hsl")
    .colors(keys.length);

let barkeys = keys.map((key, index) => (
    <Bar key={key} dataKey={key} stackId="a" fill={colors[index]} />
));

export default class DistributionOfIECMaterialsBarChart extends PureComponent {
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
