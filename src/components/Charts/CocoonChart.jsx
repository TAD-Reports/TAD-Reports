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
        BoxReared: 1000,
        ProductioninKg: 2000,
        ValueinPhp: 3000,
    },
    {
        name: "Region 2",
        BoxReared: 3000,
        ProductioninKg: 2000,
        ValueinPhp: 1000,
    },
    {
        name: "Region 3",
        BoxReared: 200,
        ProductioninKg: 3000,
        ValueinPhp: 1000,
    },
    {
        name: "Region 4",
        BoxReared: 1000,
        ProductioninKg: 3000,
        ValueinPhp: 2000,
    },
];

export default class CocoonBarGraph extends PureComponent {
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
                    <Bar dataKey="BoxReared" fill="#3284FF" />
                    <Bar dataKey="ProductioninKg" fill="#F69400" />
                    <Bar dataKey="ValueinPhp" fill="#D9D9D9" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
