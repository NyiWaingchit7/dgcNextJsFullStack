import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchAppData } from "@/store/slice/appSlice";
import { deletePlayer } from "@/store/slice/playersSlice";
import { Box, Typography } from "@mui/material";
import { Player } from "@prisma/client";
import router from "next/router";
import { useState } from "react";
import NewPlayer from "./NewPlayer";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PlayerDetail from "./PlayerDetail";

interface Prop {
  id: number;
}

const PlayerDetailCard = ({ id }: Prop) => {
  const dispatch = useAppDispatch();
  const players = useAppSelector((store) => store.player.items) as Player[];
  const playerData = players.find((p) => p.id === id);
  const [open, setOpen] = useState(false);
  if (!playerData) return null;
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
        my: 10,
      }}
    >
      <Box
        sx={{
          width: { xs: "50%", sm: "30%", md: "25%", lg: "20%" },
          height: { xs: 270, sm: 320, md: 320, lg: 420 },
          borderRadius: 5,
          mb: 2,
          bgcolor: "primary.dark",
        }}
      >
        <Box
          component="img"
          src={playerData.assetUrl || `../../unknown.png`}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            backgroundImage: "url(../../Red_Dragon.png)",
            backgroundPosition: "center",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: "80%", sm: "50%", md: "40%", lg: "45%" },
          borderRadius: 5,
          mx: 2,
          bgcolor: "success.main",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ mx: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  bgcolor: "secondary.main",
                  px: 2,
                  borderRadius: 2,
                  fontWeight: "bold",
                  "&:hover": { transform: "scale(1.05)" },
                  color: "primary.main",
                }}
              >
                {playerData.role}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                mt: 3,
                mx: 2,
              }}
            >
              <Box
                sx={{
                  "&:hover": { transform: "scale(1.2)" },
                }}
                onClick={() => setOpen(true)}
              >
                <EditIcon sx={{ fontSize: "2rem", m: 1 }} />
              </Box>
              <Box
                sx={{ "&:hover": { transform: "scale(1.2)" } }}
                onClick={() => {
                  dispatch(
                    deletePlayer({
                      id: Number(id),
                      onSuccess: () => {
                        dispatch(fetchAppData());
                        router.push("/admin/player");
                      },
                    })
                  );
                }}
              >
                <DeleteForeverIcon
                  sx={{ fontSize: "2rem", color: "info.main" }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <PlayerDetail playerData={playerData} />
        </Box>
      </Box>
      <NewPlayer open={open} setOpen={setOpen} playerData={playerData} />
    </Box>
  );
};
export default PlayerDetailCard;
