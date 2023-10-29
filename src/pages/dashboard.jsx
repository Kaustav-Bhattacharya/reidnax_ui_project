import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Card, Tabs, Tab, Typography } from "@mui/material";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    if (newValue === "analytics") {
      navigate("/dashboard/analytics");
    } else if (newValue === "data") {
      navigate("/dashboard/data");
    }
  };

  const dashboardStyle = {
    display: "grid",
    gridTemplateColumns: "20% 80%",
  };

  return (
    <Card sx={{ maxWidth: "100%", minHeight: "100%" }}>
      <Typography variant="h4" sx={{ mt: 2, mb: 2, textAlign: "center" }}>
        Dashboard
      </Typography>
      <div style={dashboardStyle}>
        <div style={{ padding: "16px" }}>
          <Tabs value={false} onChange={handleTabChange} orientation="vertical" sx={{minHeight:'85vh'}}>
            <Tab
              label="Analytics"
              value="analytics"
              to="analytics"
              component={Link}
            />
            <Tab label="Data" value="data" to="data" component={Link} />
          </Tabs>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </Card>
  );
};

export { Dashboard };
