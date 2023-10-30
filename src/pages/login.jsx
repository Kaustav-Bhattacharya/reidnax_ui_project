import { useState } from "react";
import { Card, Box, TextField, Button, Typography } from "@mui/material";
import LockPersonSharpIcon from "@mui/icons-material/LockPersonSharp";
import axios from "axios";

const Login = ({ auth }) => {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const login = async () => {
    if (!userName || !pass) {
      if (!pass) {
        setError("Please enter password.");
        return;
      }
      if (!userName) {
        setError("Please enter username");
        return;
      }
      setError("Please enter both username and password.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        userName,
        pass,
      });
      if (response.data.success) auth();
      else setError(response.data.message);
    } catch (error) {
      console.error("Axios error:", error);
      setError(error.message);
    }
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
    setError("");
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
    setError("");
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: "10% auto",
        padding: 3,
        textAlign: "center",
      }}
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
          onChange={handleUserNameChange}
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          margin="normal"
          value={pass}
          onChange={handlePassChange}
          required
        />
        {error && (
          <Typography color="error" variant="body2" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
        <Button
          type="button"
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
          color="primary"
          onClick={login}
        >
          Sign In
        </Button>
      </Box>
    </Card>
  );
};

export { Login };
