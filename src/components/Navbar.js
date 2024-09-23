import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter"; // Example icon
import { useUser } from "../UserContext";

const Navbar = () => {
  const { user, setUser } = useUser();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setUser(null);
    handleClose();
    alert("You have logged out successfully!");
  };

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#1a73e8", padding: "0.5rem" }}
    >
      <Toolbar>
        {/* Nav brand with icon */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <FitnessCenterIcon
            style={{ color: "white", marginRight: "0.5rem" }}
          />
          <Typography
            variant="h6"
            component={Link}
            to="/" // Make the brand a link to the homepage
            style={{ color: "white", textDecoration: "none" }}
          >
            Health Monitoring App
          </Typography>
        </Box>

        {/* Navlinks */}
        <Box sx={{ display: "flex", gap: "2rem", marginRight: "auto" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              fontFamily: "Arial, sans-serif",
              fontSize: "1.1rem",
            }}
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            style={{
              textDecoration: "none",
              color: "white",
              fontFamily: "Arial, sans-serif",
              fontSize: "1.1rem",
            }}
          >
            Dashboard
          </Link>
          <Link
            to="/profile"
            style={{
              textDecoration: "none",
              color: "white",
              fontFamily: "Arial, sans-serif",
              fontSize: "1.1rem",
            }}
          >
            Profile
          </Link>
          <Link
            to="/account"
            style={{
              textDecoration: "none",
              color: "white",
              fontFamily: "Arial, sans-serif",
              fontSize: "1.1rem",
            }}
          >
            Account
          </Link>
        </Box>

        {/* Account Icon */}
        <IconButton edge="end" color="inherit" onClick={handleMenu}>
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {!user ? (
            <>
              <MenuItem onClick={handleClose}>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Sign In
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Sign Up
                </Link>
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem onClick={handleClose}>
                <Link
                  to="/profile"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Profile
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  to="/settings"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Settings
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  to="/notifications"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Notifications
                </Link>
              </MenuItem>
              <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
            </>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
