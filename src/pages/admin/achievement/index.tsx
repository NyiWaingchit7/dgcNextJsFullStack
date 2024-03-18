import AchievementCard from "@/component/AchievementCard";
import NewAchievement from "@/component/NewAchievement";
import { useAppSelector } from "@/store/hooks";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const Achievement = () => {
  const [open, setOpen] = useState(false);
  const data = useAppSelector((store) => store.achievement.items);
  return (
    <Box
      sx={{
        minHeight: "90vh",
        mb: 3,
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", mx: 3, p: 3 }}
        onClick={() => setOpen(true)}
      >
        <Button
          variant="contained"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Add New Achievement
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        {data.map((d) => (
          <AchievementCard key={d.id} data={d} />
        ))}
      </Box>
      <NewAchievement open={open} setOpen={setOpen} />
    </Box>
  );
};

export default Achievement;
