import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const Event = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ minHeight: "70vh" }}>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          mt: 5,
          fontWeight: "bold",
          textDecoration: "underline",
          textUnderlineOffset: 3,
          mb: 5,
          cursor: "pointer",
        }}
      >
        Events
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", mx: 3, p: 3 }}
        onClick={() => setOpen(true)}
      >
        <Button
          variant="contained"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Add New Event
        </Button>
        <AddIcon
          sx={{
            mx: 1,
            ":hover": { transform: "scale(1.1)" },
            transition: "all ease-in 0.2s",
            fontSize: { xs: "1.3rem", sm: "1.7rem" },
            width: "30px",
            bgcolor: "primary.main",
            color: "info.main",
            p: 1,
            borderRadius: 3,
            display: { xs: "block", sm: "none" },
          }}
        />
      </Box>
    </Box>
  );
};

export default Event;
