import React, { useState } from "react";
import { Card, Box, TextField, Button, Typography } from "@mui/material";
import LockPersonSharpIcon from "@mui/icons-material/LockPersonSharp";

const Login = ({ auth }) => {
  const [userName, setUserName] = useState("");
  return (
    <Card
      sx={{ maxWidth: 400, margin: "0 auto", padding: 3, textAlign: "center" }}
    >
      <LockPersonSharpIcon sx={{ fontSize: 64, color: "primary.main" }} />
      <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
        Log In
      </Typography>
      <Box component="form" sx={{ mt: 3 }}>
        <TextField
          label="Username"
          fullWidth
          variant="outlined"
          margin="normal"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
          color="primary"
          onClick={auth}
        >
          Sign In
        </Button>
      </Box>
    </Card>
  );
};

export { Login };
