import { Box, Button, Typography } from "@mui/material";
import PlayerMatches from "./NewPlayerMatches";
import { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import AddIcon from "@mui/icons-material/Add";
interface Prop {
  id: number;
  path?: boolean;
}

const PlayerMatchesCard = ({ id, path }: Prop) => {
  const playerMatches = useAppSelector((store) => store.playerMatches.items);
  const data = playerMatches.find((d) => d.playerId === id);
  const [open, setOpen] = useState(false);

  if (!data) return null;
  return (
    <Box
      sx={{
        maxWidth: "800px",
        mx: { xs: 3, md: "auto" },
        mt: 2,
        bgcolor: "info.main",
        p: 1,
        borderRadius: 3,
      }}
    >
      {!path && (
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" onClick={() => setOpen(true)}>
            <AddIcon sx={{ fontSize: "1.3rem" }} />
          </Button>
        </Box>
      )}
      <Box
        sx={{
          mt: 1,
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "space-evenly" },
          color: "primary.light",
          gap: 1,
        }}
      >
        <Box
          sx={{
            width: { xs: "50px", sm: "100px" },
            borderRadius: "50%",
            border: 2,
            borderColor: "secondary.main",

            height: { xs: "50px", sm: "100px" },
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            p: 1,
          }}
        >
          <Typography sx={{ fontSize: { xs: "0.7rem", sm: "1rem" } }}>
            Win
          </Typography>
          <Typography sx={{ fontSize: { xs: "0.7rem", sm: "1rem" } }}>
            {data.win}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "50px", sm: "100px" },
            borderRadius: "50%",
            border: 2,
            borderColor: "secondary.main",

            height: { xs: "50px", sm: "100px" },
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            p: 1,
          }}
        >
          <Typography sx={{ fontSize: { xs: "0.7rem", sm: "1rem" } }}>
            Draw
          </Typography>
          <Typography sx={{ fontSize: { xs: "0.7rem", sm: "1rem" } }}>
            {data.draw}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "50px", sm: "100px" },
            borderRadius: "50%",
            border: 2,
            borderColor: "secondary.main",

            height: { xs: "50px", sm: "100px" },
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            p: 1,
          }}
        >
          <Typography sx={{ fontSize: { xs: "0.7rem", sm: "1rem" } }}>
            Lose
          </Typography>
          <Typography sx={{ fontSize: { xs: "0.7rem", sm: "1rem" } }}>
            {data.lose}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "50px", sm: "100px" },
            borderRadius: "50%",
            border: 2,
            borderColor: "secondary.main",

            height: { xs: "50px", sm: "100px" },
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            p: 1,
          }}
        >
          <Typography sx={{ fontSize: { xs: "0.7rem", sm: "1rem" } }}>
            Win Rate
          </Typography>
          <Typography sx={{ fontSize: { xs: "0.7rem", sm: "1rem" } }}>
            {data.winRate}%
          </Typography>
        </Box>
      </Box>
      <PlayerMatches open={open} setOpen={setOpen} data={data} />
    </Box>
  );
};
export default PlayerMatchesCard;
