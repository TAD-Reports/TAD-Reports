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
        QuantityofSeeds: 4000,
        SeedHarvested: 4000,
        NoOfBeneficiaries: 4000,
        AreaPlanted: 4000,
    },
    {
        name: "Region 2",
        QuantityofSeeds: 5000,
        SeedHarvested: 5000,
        NoOfBeneficiaries: 5000,
        AreaPlanted: 5000,
    },
    {
        name: "Region 3",
        QuantityofSeeds: 3000,
        SeedHarvested: 3000,
        NoOfBeneficiaries: 3000,
        AreaPlanted: 3000,
    },
    {
        name: "Region 4",
        QuantityofSeeds: 1000,
        SeedHarvested: 2000,
        NoOfBeneficiaries: 3000,
        AreaPlanted: 4000,
    },
];

export default class CottonBarGraph extends PureComponent {
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
                    <Bar dataKey="QuantityofSeeds" fill="#F7931E" />
                    <Bar dataKey="SeedHarvested" fill="#FF3434" />
                    <Bar dataKey="NoOfBeneficiaries" fill="#D9D9D9" />
                    <Bar dataKey="AreaPlanted" fill="#3284FF" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
