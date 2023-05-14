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
        Macropropagation: 1000,
        SeedDerived: 2000,
        Sucker: 3000,
    },
    {
        name: "Region 2",
        Macropropagation: 1000,
        SeedDerived: 2000,
        Sucker: 3000,
    },
    {
        name: "Region 3",
        Macropropagation: 1000,
        SeedDerived: 2000,
        Sucker: 3000,
    },
    {
        name: "Region 4",
        Macropropagation: 1000,
        SeedDerived: 2000,
        Sucker: 3000,
    },
];

export default class ExpansionAndRehabBarGraph extends PureComponent {
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
                    <Bar dataKey="Macropropagation" fill="#F7931E" />
                    <Bar dataKey="SeedDerived" fill="#D9D9D9" />
                    <Bar dataKey="Sucker" fill="#3284FF" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
