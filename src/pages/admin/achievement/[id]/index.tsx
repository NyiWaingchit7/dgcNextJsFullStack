import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteAchievement } from "@/store/slice/achievementSlice";
import { fetchAppData } from "@/store/slice/appSlice";
import NewAchievement from "@/component/NewAchievement";
const AchievementDetail = () => {
  const router = useRouter();
  const id = Number(router.query.id);
  const allAchievement = useAppSelector((store) => store.achievement.items);
  const data = allAchievement.find((d) => d.id === id);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  if (!data) return null;
  return (
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
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "200px",
              my: 2,
              color: "primary.main",
            }}
          >
            <Typography sx={{ width: "100%", fontSize: "1.2rem" }}>
              Year
            </Typography>
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

          <Box>
            <EditIcon
              onClick={() => setOpen(true)}
              sx={{
                mx: 1,
                ":hover": { transform: "scale(1.1)" },
                transition: "all ease-in 0.2s",
                fontSize: { xs: "1.3rem", sm: "1.7rem" },
                width: "30px",
                bgcolor: "success.main",
                color: "info.main",
                p: 1,
                borderRadius: 3,
              }}
            />

            <DeleteForeverIcon
              onClick={() =>
                dispatch(
                  deleteAchievement({
                    id,
                    onSuccess: () => {
                      dispatch(fetchAppData());
                      router.push("/admin/achievement");
                    },
                  })
                )
              }
              sx={{
                mx: 1,
                ":hover": { transform: "scale(1.2)" },
                transition: "all ease-in 0.2s",
                fontSize: { xs: "1.3rem", sm: "1.7rem" },
                width: "30px",
                bgcolor: "primary.main",
                color: "info.main",
                p: 1,
                borderRadius: 3,
              }}
            />
          </Box>
        </Box>
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
      <NewAchievement open={open} setOpen={setOpen} id={id} />
    </Box>
  );
};

export default AchievementDetail;
