import React, { useState, useEffect } from "react";
import { Snackbar, Alert } from "@mui/material";

const AlertNotification = ({ heartRate }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (heartRate > 100) {
      setOpen(true);
    } else {
      setOpen(false); // Close the alert if heart rate is back to normal
    }
  }, [heartRate]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
        High Heart Rate: {heartRate} BPM
      </Alert>
    </Snackbar>
  );
};

export default AlertNotification;
