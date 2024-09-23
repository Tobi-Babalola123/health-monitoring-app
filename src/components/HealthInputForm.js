import React, { useState } from "react";
import { TextField, Button, Grid2, Snackbar } from "@mui/material";

const HealthInputForm = () => {
  const [heartRate, setHeartRate] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Heart Rate Submitted:", heartRate);
    setOpenSnackbar(true);
  };

  return (
    <>
      <Grid2 container spacing={2}>
        <Grid2 item xs={12}>
          <TextField
            className="heart-rate-input"
            label="Heart Rate (BPM)"
            value={heartRate}
            onChange={(e) => setHeartRate(e.target.value)}
            fullWidth
          />
        </Grid2>
        <Grid2 item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className="fade-in"
          >
            Submit
          </Button>
        </Grid2>
      </Grid2>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message="Heart Rate Submitted Successfully!"
      />
    </>
  );
};

export default HealthInputForm;
