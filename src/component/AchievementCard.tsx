import { Box, Typography } from "@mui/material";
import { Achievement } from "@prisma/client";
import React from "react";
interface Props {
  data: Achievement;
}
const AchievementCard = ({ data }: Props) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ width: 325 }}>
        <Box
          component="img"
          src={data.assetUrl || "../defaultAch.webp"}
          sx={{ width: "100%", height: "200px" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "200px",
        }}
      >
        <Typography sx={{ width: "100%" }}>Year</Typography>
        <Typography sx={{ width: "20px" }}>-</Typography>
        <Typography sx={{ width: "100%" }}>{data.year}</Typography>
      </Box>
      <Box>{data.description}</Box>
    </Box>
  );
};

export default AchievementCard;
