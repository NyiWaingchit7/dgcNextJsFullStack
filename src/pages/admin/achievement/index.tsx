import { Box, Button } from "@mui/material";
import React from "react";

const Achievement = () => {
  return (
    <Box
      sx={{
        height: "90vh",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", mx: 3, p: 3 }}>
        <Button variant="contained">Add New Achievement</Button>
      </Box>
    </Box>
  );
};

export default Achievement;
