import { useEffect, useState } from "react";
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

const Analytics = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/analytics"); 
      const data = await response.json(); 
      setData(data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card>
      <Typography variant="h5" textAlign={"center"} sx={{ margin: "5px 10px" }}>
        Analytics
      </Typography>
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
