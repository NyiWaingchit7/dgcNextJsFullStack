import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchAppData } from "@/store/slice/appSlice";
import { deletePlayer, updatePlayer } from "@/store/slice/playersSlice";
import { Box, Button, Typography } from "@mui/material";
import { Player } from "@prisma/client";
import router, { useRouter } from "next/router";
import { useState } from "react";
import NewPlayer from "./NewPlayer";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PlayerDetail from "./PlayerDetail";
import { fileUpload } from "@/utils/fileUpload";

interface Prop {
  id: number;
  path?: boolean;
}

const PlayerDetailCard = ({ id, path }: Prop) => {
  const dispatch = useAppDispatch();
  const players = useAppSelector((store) => store.player.items) as Player[];
  const playerData = players.find((p) => p.id === id) as Player;
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState(false);
  const handleUpdateImage = async (e: any) => {
    const image = e.target.files[0];

    const assetUrl = await fileUpload(image);
    dispatch(
      updatePlayer({
        ...playerData,
        assetUrl,
        onSuccess: () => {
          dispatch(fetchAppData());
          setUpdate(false);
        },
      })
    );
  };

  if (!playerData) return null;
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
        my: 5,
      }}
    >
      <Box
        sx={{
          width: { xs: "50%", sm: "30%", md: "25%", lg: "20%" },
          height: { xs: 270, sm: 320, md: 320, lg: 420 },
          borderRadius: 5,
          mb: { xs: 7, md: 0 },
          bgcolor: "primary.main",
          display: "flext",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
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
        {!path && (
          <Button
            variant="outlined"
            component="label"
            sx={{ ml: { xs: 4, md: 8 } }}
            size="small"
            disabled={update}
          >
            Update Photo
            <input
              type="file"
              hidden
              onChange={(e) => {
                setUpdate(!update);
                handleUpdateImage(e);
              }}
            />
          </Button>
        )}
      </Box>

      <Box
        sx={{
          width: { xs: "90%", sm: "50%", md: "40%", lg: "40%" },
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
            <Box
              sx={{
                mx: 3,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  bgcolor: "secondary.main",
                  px: 2,
                  borderRadius: 2,
                  fontWeight: "bold",
                  cursor: "pointer",
                  my: 2,

                  color: "primary.main",
                  fontSize: "1rem",
                }}
              >
                {playerData.role}
              </Typography>
            </Box>
            {!path && (
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
                    "&:hover": {
                      transform: "scale(1.2)",
                    },
                    transition: "all ease-in 0.2s",
                  }}
                  onClick={() => setOpen(true)}
                >
                  <EditIcon
                    sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, m: 1 }}
                  />
                </Box>
                <Box
                  sx={{
                    "&:hover": {
                      transform: "scale(1.2)",
                    },
                    transition: "all ease-in 0.2s",
                  }}
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
                    sx={{
                      fontSize: { xs: "1.5rem", md: "2rem" },
                      color: "info.main",
                    }}
                  />
                </Box>
              </Box>
            )}
          </Box>

          <Box>
            <PlayerDetail playerData={playerData} />
          </Box>
        </Box>
      </Box>
      <NewPlayer open={open} setOpen={setOpen} playerData={playerData} />
    </Box>
  );
};
export default PlayerDetailCard;
