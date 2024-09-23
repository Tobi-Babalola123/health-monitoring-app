import React, { useState } from "react";
import { Button, Modal, Typography } from "@mui/material";

const InfoModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Info
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div
          style={{
            padding: "20px",
            outline: "none",
            backgroundColor: "white",
            borderRadius: "8px",
            margin: "auto",
            marginTop: "100px",
            width: "300px",
          }}
        >
          <Typography variant="h6" gutterBottom>
            How to Use
          </Typography>
          <Typography>
            Enter your heart rate in the input field and click submit. Monitor
            your health data in the chart.
          </Typography>
        </div>
      </Modal>
    </>
  );
};

export default InfoModal;
