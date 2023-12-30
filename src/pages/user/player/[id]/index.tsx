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
  const path = router.pathname.includes("user");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <PlayerMatchesCard id={Number(id)} path={path} />
      </Box>
      <PlayerDetailCard id={Number(id)} path={path} />
    </Box>
  );
};
export default PlayerDetail;
