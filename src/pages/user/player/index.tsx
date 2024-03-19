import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NewPlayers from "@/component/NewPlayer";
import { useAppSelector } from "@/store/hooks";
import AddIcon from "@mui/icons-material/Add";
import { Player } from "@prisma/client";
import PlayerCard from "@/component/PlayerCard";
import Loading from "@/component/Loading";

const Player = () => {
  const [open, setOpen] = useState(false);
  const players = useAppSelector((store) => store.player.items);
  const [filterPlayer, setFilterPlayer] = useState<Player[]>([]);
  const [name, setName] = useState("");
  const handleFilterPlayer = (e: any) => {
    const name = e.target.value;
    setName(name);
    const data = players.filter((p) =>
      p.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );
    setFilterPlayer(data);
  };
  useEffect(() => {
    setFilterPlayer(players);
  }, [players]);
  if (!players) return null;
  return (
    <Box sx={{ minHeight: "70vh" }}>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          mt: 5,
          fontWeight: "bold",
          textDecoration: "underline",
          textUnderlineOffset: 3,
          mb: 5,
          cursor: "pointer",
        }}
      >
        Players
      </Typography>
      <Box
        sx={{
          my: 2,
          maxWidth: "100vw",

          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
          onChange={handleFilterPlayer}
        >
          <TextField
            sx={{
              p: 1,
            }}
            size="small"
            placeholder={`Search Players.... `}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "success.main" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {filterPlayer.length > 0 ? (
          filterPlayer.map((p) => (
            <Box
              key={p.id}
              sx={{
                width: { xs: "40%", sm: "26%", md: "28%", lg: "20%" },

                m: 2,
              }}
            >
              <PlayerCard id={p.id} name={p.name} role={p.role} />
            </Box>
          ))
        ) : (
          <Loading />
        )}
      </Box>
      <NewPlayers open={open} setOpen={setOpen} />
    </Box>
  );
};
export default Player;
