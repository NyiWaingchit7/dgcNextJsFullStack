import AchievementCard from "@/component/AchievementCard";
import NewAchievement from "@/component/NewAchievement";
import { useAppSelector } from "@/store/hooks";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const Achievement = () => {
  const router = useRouter();
  const path = router.pathname.includes("user");
  const data = useAppSelector((store) => store.achievement.items);
  return (
    <Box
      sx={{
        minHeight: "90vh",
        mb: 3,
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
          mb: 5,
          cursor: "pointer",
        }}
      >
        Achievements
      </Typography>
      <Box
        sx={{
          maxWidth: "95vw",
          mx: "auto",
          display: "flex",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {data.map((d) => (
          <AchievementCard key={d.id} data={d} path={path} />
        ))}
      </Box>
    </Box>
  );
};

export default Achievement;
