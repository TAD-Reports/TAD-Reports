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
        TotalAreaPlanted: 4000,
        TotalNoOfSeedDerivedPlantingMaterialsDistributed: 4000,
    },
    {
        name: "Region 2",
        TotalAreaPlanted: 4000,
        TotalNoOfSeedDerivedPlantingMaterialsDistributed: 4000,
    },
    {
        name: "Region 3",
        TotalAreaPlanted: 4000,
        TotalNoOfSeedDerivedPlantingMaterialsDistributed: 4000,
    },
    {
        name: "Region 4",
        TotalAreaPlanted: 4000,
        TotalNoOfSeedDerivedPlantingMaterialsDistributed: 4000,
    },
];

export default class ExpansionUnderCocoBarGraph extends PureComponent {
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
                    <Bar dataKey="TotalAreaPlanted" fill="#FF3434" />
                    <Bar
                        dataKey="TotalNoOfSeedDerivedPlantingMaterialsDistributed"
                        fill="#3284FF"
                    />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
