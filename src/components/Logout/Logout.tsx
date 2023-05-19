import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box/Box";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

function Logout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 0.5 }}>
      <Button variant="contained" size="small" onClick={handleLogout}>
        LogOut?
      </Button>
    </Box>
  );
}

export default Logout;
