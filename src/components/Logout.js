import React from "react";
import { auth } from "../firebase"; // Firebase config file
import { signOut } from "firebase/auth";
import { Button } from "@mui/material";

const Logout = () => {
  const handleLogout = async () => {
    await signOut(auth);
    alert("Logout successful!");
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default Logout;
