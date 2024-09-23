import React from "react";
import {
  Grid2,
  Button,
  Paper,
  Typography,
  Box,
  IconButton,
} from "@mui/material"; // Import IconButton here
import HealthChart from "./HealthChart";
import HealthInputForm from "./HealthInputForm";
import AlertNotification from "./AlertNotification";
import { useSpring, animated } from "react-spring";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Dashboard = () => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={fade}>
      <Box
        sx={{ padding: "2rem", backgroundColor: "#f5f5f5", minHeight: "100vh" }}
      >
        <Grid2 container spacing={4}>
          {/* Health Summary Section */}
          <Grid2 item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{ padding: "1.5rem", backgroundColor: "#ffffff" }}
            >
              <Typography variant="h5" gutterBottom>
                Health Summary
              </Typography>
              <Typography variant="body1">
                Your heart rate looks stable. Keep monitoring your health
                regularly.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: "1rem" }}
              >
                View Details
              </Button>
            </Paper>
          </Grid2>

          {/* Heart Rate Form Section */}
          <Grid2 item xs={12} md={6}>
            <HealthInputForm />
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: "1rem", width: "100%" }}
            >
              Submit Heart Rate
            </Button>
          </Grid2>

          {/* Health Chart and Image Section */}
          <Grid2 item xs={12}>
            <Grid2 container spacing={2}>
              <Grid2 item xs={12} md={6}>
                <Paper
                  elevation={3}
                  sx={{ padding: "1.5rem", backgroundColor: "#ffffff" }}
                >
                  <Typography variant="h5" gutterBottom>
                    Health Chart
                  </Typography>
                  <HealthChart />
                </Paper>
              </Grid2>

              <Grid2 item xs={12} md={6}>
                <img
                  src="https://img.freepik.com/premium-photo/endocrinologist-online-service-platform-thyroid-gland-examination-doctor-examine-hormone-glucose-online-magazine_968529-295623.jpg?uid=R134190840&ga=GA1.2.1695319709.1711572879&semt=ais_hybrid" // Update with your actual image path
                  alt="Health Monitoring"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "400px",
                    objectFit: "cover",
                  }}
                />
              </Grid2>
            </Grid2>
          </Grid2>

          {/* Alerts/Notifications */}
          <Grid2 item xs={12}>
            <AlertNotification />
          </Grid2>

          {/* New Section: Cards for Tips, Activities, and Contact Information */}
          <Grid2 container spacing={2}>
            {/* Health Tips Section */}
            <Grid2 item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{ padding: "1.5rem", backgroundColor: "#ffffff" }}
              >
                <Typography variant="h6" gutterBottom>
                  Health Tips
                </Typography>
                <Typography variant="body2">
                  1. Keep a balanced diet, exercise regularly, and stay
                  hydrated!
                </Typography>
                <Typography variant="body2">
                  2. Get enough sleep and manage stress effectively.
                </Typography>
                <Typography variant="body2">
                  3. Regular check-ups can help catch issues early.
                </Typography>
              </Paper>
            </Grid2>

            {/* Recent Activities Section */}
            <Grid2 item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{ padding: "1.5rem", backgroundColor: "#ffffff" }}
              >
                <Typography variant="h6" gutterBottom>
                  Recent Activities
                </Typography>
                <Typography variant="body2">
                  1. Logged heart rate: 75 BPM
                </Typography>
                <Typography variant="body2">
                  2. Exercise completed: 30 minutes of cardio.
                </Typography>
                <Typography variant="body2">
                  3. Daily water intake: 2 liters.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: "1rem" }}
                >
                  View More Activities
                </Button>
              </Paper>
            </Grid2>

            {/* Contact Information Section */}
            <Grid2 item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{ padding: "1.5rem", backgroundColor: "#ffffff" }}
              >
                <Typography variant="h6" gutterBottom>
                  Contact Information
                </Typography>
                <Typography variant="body2">
                  For support or inquiries, contact us at support@example.com.
                </Typography>
              </Paper>
            </Grid2>
          </Grid2>
        </Grid2>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          backgroundColor: "#1a73e8",
          padding: "1rem",
          textAlign: "center",
          color: "white",
          marginTop: "2rem",
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Health Monitoring App. All Rights
          Reserved.
        </Typography>
        <Box sx={{ marginTop: "0.5rem" }}>
          <IconButton
            sx={{ color: "white" }}
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            sx={{ color: "white" }}
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            sx={{ color: "white" }}
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
    </animated.div>
  );
};

export default Dashboard;
