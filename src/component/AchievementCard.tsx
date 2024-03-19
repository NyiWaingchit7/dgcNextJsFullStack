import { Box, Typography } from "@mui/material";
import { Achievement } from "@prisma/client";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React, { useState } from "react";
import NewAchievement from "./NewAchievement";
import { useAppDispatch } from "@/store/hooks";
import { deleteAchievement } from "@/store/slice/achievementSlice";
import { fetchAppData } from "@/store/slice/appSlice";
import { useRouter } from "next/router";
interface Props {
  data: Achievement;
  path?: Boolean;
}
const AchievementCard = ({ data, path }: Props) => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <Box
      sx={{
        width: { xs: 350, sm: 375 },
        borderRadius: 3,
        cursor: "pointer",
        ":hover": { borderColor: "info.dark" },
        transition: "all ease-in 0.3s",
        border: 3,
        borderColor: "secondary.main",
      }}
    >
      {!path && (
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <EditIcon
            onClick={() => setOpen(true)}
            sx={{
              mx: 1,
              ":hover": { transform: "scale(1.1)" },
              transition: "all ease-in 0.2s",
              fontSize: { xs: "1rem", sm: "1.7rem" },
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
                  id: data.id,
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
              fontSize: { xs: "1rem", sm: "1.7rem" },
              width: "30px",
              bgcolor: "primary.main",
              color: "info.main",
              p: 1,
              borderRadius: 3,
            }}
          />
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 350,
          mx: "auto",
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
      <NewAchievement open={open} setOpen={setOpen} id={data.id} />
    </Box>
  );
};

export default AchievementCard;
