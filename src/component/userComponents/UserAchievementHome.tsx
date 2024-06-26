import AchievementCard from "@/component/AchievementCard";
import NewAchievement from "@/component/NewAchievement";
import { useAppSelector } from "@/store/hooks";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const UserAchievementHome = () => {
  const router = useRouter();
  const path = router.pathname.includes("user");
  const data = useAppSelector((store) => store.achievement.items);
  return (
    <Box
      sx={{
        my: 3,
        maxWidth: "95vw",
        mx: "auto",
        bgcolor: "info.light",
        borderRadius: 2,
        p: { xs: 0, sm: 2 },
        boxShadow: 3,
      }}
    >
      <Box
        sx={{
          width: { xs: "80px", sm: "100px" },
          mt: 2,
          height: "5px",

          bgcolor: "success.main",
        }}
      />
      <Typography
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem" },
          fontWeight: "bold",
          mx: 1,
        }}
      >
        Achievements
      </Typography>
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          display: "flex",
          justifyContent: { xs: "flex-start", md: "center" },
          overflow: "auto",
          width: "100%",
          alignItems: "center",
          mt: 2,
          gap: { xs: 2, sm: 4 },
        }}
      >
        {data.slice(0, 3).map((d) => (
          <AchievementCard key={d.id} data={d} path={path} />
        ))}
      </Box>{" "}
    </Box>
  );
};

export default UserAchievementHome;
