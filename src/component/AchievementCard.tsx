import { Box, Typography } from "@mui/material";
import { Achievement } from "@prisma/client";
import Link from "next/link";
import React from "react";
interface Props {
  data: Achievement;
  path?: Boolean;
}
const AchievementCard = ({ data, path }: Props) => {
  const linkTo = path ? "user" : "admin";
  return (
    <Link
      href={`/${linkTo}/achievement/${data.id}`}
      style={{ textDecoration: "none" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 350,

          boxShadow: 2,
          borderRadius: 3,
          cursor: "pointer",
          ":hover": { transform: "scale(1.05)" },
          transition: "all ease-in 0.2s",
        }}
      >
        <Box sx={{ width: 325, p: 1, borderRadius: 3 }}>
          <Box
            component="img"
            src={data.assetUrl || "../defaultAch.webp"}
            sx={{
              width: "100%",
              height: { xs: "150px", sm: "200px" },
              borderRadius: 3,
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "200px",
            my: 2,
            color: "primary.main",
          }}
        >
          <Typography sx={{ width: "100%" }}>Year</Typography>
          <Typography sx={{ width: "20px" }}>-</Typography>
          <Typography
            sx={{
              width: "100%",

              fontWeight: "bold",
              mx: 2,
            }}
          >
            {data.year}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default AchievementCard;
