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
        AdultMale: 5,
        AdultFemale: 6,
        YouthMale: 5,
        YouthFemale: 6,
        NoOfDays: 40,
    },
    {
        name: "Region 2",
        AdultMale: 5,
        AdultFemale: 6,
        YouthMale: 5,
        YouthFemale: 6,
        NoOfDays: 40,
    },
    {
        name: "Region 3",
        AdultMale: 5,
        AdultFemale: 6,
        YouthMale: 5,
        YouthFemale: 6,
        NoOfDays: 40,
    },
    {
        name: "Region 4",
        AdultMale: 5,
        AdultFemale: 6,
        YouthMale: 6,
        YouthFemale: 6,
        NoOfDays: 40,
    },
];

export default class TrainingBarGraph extends PureComponent {
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
                    <Bar dataKey="AdultMale" fill="#F7931E" />
                    <Bar dataKey="AdultFemale" fill="#FF3434" />
                    <Bar dataKey="YouthMale" fill="#D9D9D9" />
                    <Bar dataKey="YouthFemale" fill="#000000" />
                    <Bar dataKey="NoOfDays" fill="#3284FF" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
