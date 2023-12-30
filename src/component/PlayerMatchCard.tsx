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
        maxWidth: "1100px",
        mx: { xs: 3, lg: "auto" },
        mt: 2,
        bgcolor: "success.main",
        p: 2,
        borderRadius: 3,
      }}
    >
      {!path && (
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            color="info"
            onClick={() => setOpen(true)}
          >
            <AddIcon sx={{ fontSize: "1.5rem" }} />{" "}
          </Button>
        </Box>
      )}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", sm: "space-evenly" },
          color: "info.light",
        }}
      >
        <Box
          sx={{
            width: { xs: "80px", sm: "125px" },
            borderRadius: "50%",
            border: "5px solid #FBE122",
            m: 2,
            height: { xs: "80px", sm: "125px" },
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            p: 1,
          }}
        >
          <Typography>Win</Typography>
          <Typography>{data.win}</Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "80px", sm: "125px" },
            borderRadius: "50%",
            border: "5px solid #FBE122",
            m: 2,
            height: { xs: "80px", sm: "125px" },
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            p: 1,
          }}
        >
          <Typography>Draw</Typography>
          <Typography>{data.draw}</Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "80px", sm: "125px" },
            borderRadius: "50%",
            border: "5px solid #FBE122",
            m: 2,
            height: { xs: "80px", sm: "125px" },
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            p: 1,
          }}
        >
          <Typography>Lose</Typography>
          <Typography>{data.lose}</Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "80px", sm: "125px" },
            borderRadius: "50%",
            border: "5px solid #FBE122",
            m: 2,
            height: { xs: "80px", sm: "125px" },
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            p: 1,
          }}
        >
          <Typography>Win Rate</Typography>
          <Typography>{data.winRate}%</Typography>
        </Box>
      </Box>
      <PlayerMatches open={open} setOpen={setOpen} data={data} />
    </Box>
  );
};
export default PlayerMatchesCard;
