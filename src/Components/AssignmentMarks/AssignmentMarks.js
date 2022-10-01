import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const AssignmentMarks = () => {
    const data = [
        {
            name: "Page A",
            marks: 4000,
            quzie: 2400,
            amt: 2400
        },
        {
            name: "Page B",
            marks: 3000,
            quzie: 1398,
            amt: 2210
        },
        {
            name: "Page C",
            marks: 2000,
            quzie: 9800,
            amt: 2290
        },
        {
            name: "Page D",
            marks: 2780,
            quzie: 3908,
            amt: 2000
        },
        {
            name: "Page E",
            marks: 1890,
            quzie: 4800,
            amt: 2181
        },
        {
            name: "Page F",
            marks: 2390,
            quzie: 3800,
            amt: 2500
        },
        {
            name: "Page G",
            marks: 3490,
            quzie: 4300,
            amt: 2100
        }
    ];
    return (
        <LineChart
            width={380}
            height={250}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
                type="monotone"
                dataKey="quzie"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
        </LineChart>
    );
};

export default AssignmentMarks;