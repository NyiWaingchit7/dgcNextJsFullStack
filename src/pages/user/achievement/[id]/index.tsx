import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

const AchievementDetail = () => {
  const router = useRouter();
  const id = Number(router.query.id);
  const allAchievement = useAppSelector((store) => store.achievement.items);
  const data = allAchievement.find((d) => d.id === id);

  if (!data) return null;
  return (
    <Box
      sx={{
        width: { xs: "90vw", sm: "70vw" },
        mx: "auto",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          mt: 5,
          fontWeight: "bold",
          textDecoration: "underline",
          textUnderlineOffset: 3,
        }}
      >
        Achievements
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "200px",
          my: 2,
          color: "primary.main",
        }}
      >
        <Typography sx={{ width: "100%", fontSize: "1.2rem" }}>Year</Typography>
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          my: 5,
          minHeight: "70vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: { xs: "90vw", sm: "70vw" },
          }}
        >
          <Box
            sx={{
              width: { xs: 325, sm: 500 },
              p: 1,
              borderRadius: 3,
              boxShadow: 2,
            }}
          >
            <Box
              component="img"
              src={data.assetUrl || "../../defaultAch.webp"}
              sx={{
                width: "100%",
                height: { xs: "210px", sm: "250px" },
                borderRadius: 3,
              }}
            />
          </Box>
          <Box sx={{ mt: 2, mx: 1, maxWidth: 800 }}>
            <Typography variant="body2" sx={{ lineHeight: 1.4 }}>
              {data.description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AchievementDetail;
