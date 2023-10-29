import React from "react";
import { Card, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";


const data = [
  { id: 1, name: "Item 1", value: 10 },
  { id: 2, name: "Item 2", value: 25 },
  { id: 3, name: "Item 3", value: 15 },
  { id: 4, name: "Item 3", value: 15 },
  { id: 5, name: "Item 3", value: 15 },
  { id: 6, name: "Item 3", value: 15 },
  { id: 7, name: "Item 3", value: 15 },
  { id: 8, name: "Item 3", value: 15 },
  { id: 9, name: "Item 3", value: 15 },
  { id: 10, name: "Item 3", value: 15 },
  { id: 11, name: "Item 3", value: 56 },
  { id: 12, name: "Item 3", value: 15 },
  { id: 13, name: "Item 3", value: 15 },
  { id: 14, name: "Item 3", value:39 },
  { id: 15, name: "Item 3", value: 15 },
  { id: 16, name: "Item 3", value: 15 },
  { id: 17, name: "Item 3", value: 15 },
  { id: 18, name: "Item 3", value: 15 },
  { id: 19, name: "Item 3", value: 78 },
  { id: 20, name: "Item 3", value: 15 },
];

const Analytics = () => {
  return (
    <Card>
      <Typography variant="h5" textAlign={'center'} sx={{margin:'5px 10px'}}>Analytics</Typography>
      <BarChart width={1000} height={500} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="value" fill="#8884d8" />
        <Tooltip />
        <Legend />
      </BarChart>
    </Card>
  );
};

export { Analytics };
