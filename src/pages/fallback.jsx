import { Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Fallback = () => {
  return (
    <Card>
      <Typography variant="h5" textAlign={"center"} sx={{ margin: "20px" }}>
        Page Not Found
      </Typography>
      <Typography variant="body1" textAlign={"center"}>
        The requested page does not exist. <Link to='/'>Login</Link>
      </Typography>
    </Card>
  );
};

export { Fallback };
