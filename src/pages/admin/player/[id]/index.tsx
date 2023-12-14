import { useAppSelector } from "@/store/hooks";
import { Box, Button, Typography } from "@mui/material";
import { Player } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import NewPlayer from "@/component/NewPlayer";

const PlayerDetail = () => {
  const id = useRouter().query.id;
  const players = useAppSelector((store) => store.player.items) as Player[];
  const playerData = players.find((p) => p.id === Number(id));
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
        mx: "auto",
      }}
    >
      <Box
        sx={{
          width: { xs: "70%", sm: "30%", md: "25%", lg: "20%" },
          height: { sm: 320, lg: 500 },
          borderRadius: 5,
          mb: 2,
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
          bgcolor: "success.main",
          width: { xs: "90%", sm: "50%" },
          borderRadius: 5,
          mx: 2,
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              mt: 3,
              mx: 3,
            }}
          >
            <Box
              sx={{
                p: 1,
                "&:hover": { transform: "scale(1.2)" },
                color: "info.main",
              }}
              onClick={() => setOpen(true)}
            >
              <EditIcon sx={{ fontSize: "1.7rem" }} />
            </Box>
            <Box sx={{ p: 1, "&:hover": { transform: "scale(1.2)" } }}>
              <DeleteForeverIcon
                sx={{ fontSize: "1.7rem", color: "info.main" }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: { sm: 320, lg: 500 },
            color: "info.light",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Box
            sx={{
              width: { xs: "90%", lg: "60%" },
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "1rem", lg: "1.5rem" }, width: "100%" }}
            >
              Name
            </Typography>
            <Typography> - </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", lg: "1.5rem" },
                textAlign: "start",
                width: "100%",
                m: 2,
              }}
            >
              {playerData.name}
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "90%", lg: "60%" },
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "1rem", lg: "1.5rem" }, width: "100%" }}
            >
              Age
            </Typography>
            <Typography> - </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", lg: "1.5rem" },
                textAlign: "start",
                width: "100%",
                m: 2,
              }}
            >
              {playerData.age}
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "90%", lg: "60%" },
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "1rem", lg: "1.5rem" }, width: "100%" }}
            >
              City
            </Typography>
            <Typography> - </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", lg: "1.5rem" },
                textAlign: "start",
                width: "100%",
                m: 2,
              }}
            >
              {playerData.city}
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "90%", lg: "60%" },
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "1rem", lg: "1.5rem" }, width: "100%" }}
            >
              Join Date{" "}
            </Typography>
            <Typography> - </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", lg: "1.5rem" },
                textAlign: "start",
                width: "100%",
                m: 2,
              }}
            >
              {playerData.joinDate}
            </Typography>
          </Box>
        </Box>
      </Box>
      <NewPlayer open={open} setOpen={setOpen} playerData={playerData} />
    </Box>
  );
};
export default PlayerDetail;
