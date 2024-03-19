import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Box, Button, Typography } from "@mui/material";
import { Player } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import NewPlayer from "@/component/NewPlayer";
import { deletePlayer } from "@/store/slice/playersSlice";
import { fetchAppData } from "@/store/slice/appSlice";
import PlayerMatchesCard from "@/component/PlayerMatchCard";
import PlayerDetailCard from "@/component/PlayerDetailCard";

const PlayerDetail = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
        Player Details
      </Typography>
      <Box sx={{ width: "100%" }}>
        <PlayerMatchesCard id={Number(id)} />
      </Box>
      <PlayerDetailCard id={Number(id)} />
    </Box>
  );
};
export default PlayerDetail;
