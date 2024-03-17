import AchievementCard from "@/component/AchievementCard";
import NewAchievement from "@/component/NewAchievement";
import { useAppSelector } from "@/store/hooks";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";

const Achievement = () => {
  const [open, setOpen] = useState(false);
  const data = useAppSelector((store) => store.achievement.items);
  return (
    <Box
      sx={{
        height: "90vh",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", mx: 3, p: 3 }}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Add New Achievement
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {data.map((d) => (
          <AchievementCard data={d} />
        ))}
      </Box>
      <NewAchievement open={open} setOpen={setOpen} />
    </Box>
  );
};

export default Achievement;
