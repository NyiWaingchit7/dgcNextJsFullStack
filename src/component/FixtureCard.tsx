import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchAppData } from "@/store/slice/appSlice";
import { deleteFixture } from "@/store/slice/fixtureSlice";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Typography } from "@mui/material";
import { Fixture } from "@prisma/client";
import { useState } from "react";
import NewFixtureCard from "./NewFixtureCard";

interface prop {
  data: Fixture;
  path?: boolean;
}
const FixtureCard = ({ data, path }: prop) => {
  const opponentTeams = useAppSelector((store) => store.opponentTeam.items);
  const opponentTeam = opponentTeams.find(
    (d) => d.id === data.opponentTeamId
  )?.name;
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const handleDeleteFixture = () => {
    dispatch(
      deleteFixture({
        id: data.id,
        onSuccess: () => {
          dispatch(fetchAppData());
        },
      })
    );
  };
  return (
    <Box
      sx={{
        width: { xs: "90%", md: "40%" },

        m: 2,
        p: 2,
        ":hover": {
          boxShadow: 3,
        },
        cursor: "pointer",
        bgcolor: "info.main",
        flexShrink: 0,
        boxShadow: 1,
        borderRadius: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            width: "40%",
            mx: 1,
            fontSize: { xs: "0.7rem", sm: "1rem" },
            fontWeight: { xs: "bold" },
            textAlign: "center",
          }}
        >
          Dragon Calcio
        </Typography>
        {data.matchResult ? (
          <Typography
            sx={{
              textAlign: "center",
              width: "15%",
              mx: 1,
              fontSize: { xs: "0.7rem", sm: "1rem" },
            }}
          >
            {data.myTeamResult} - {data.opponentTeamResult}
          </Typography>
        ) : (
          <Typography>Vs</Typography>
        )}
        <Typography
          sx={{
            width: "40%",
            mx: 1,
            fontSize: { xs: "0.7rem", sm: "1rem" },
            textAlign: "center",
          }}
        >
          {opponentTeam?.toUpperCase()}
        </Typography>
        {!path && (
          <Box
            sx={{
              width: "fit-content",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              onClick={() => setOpen(true)}
              sx={{ width: "fit-content", m: 1 }}
            >
              <EditIcon sx={{ fontSize: "1.5rem" }} />
            </Box>
            <Box
              onClick={handleDeleteFixture}
              sx={{ width: "fit-content", m: 1 }}
            >
              <DeleteForeverIcon
                sx={{ fontSize: "1.5rem", color: "success.main" }}
              />
            </Box>
          </Box>
        )}
      </Box>
      <NewFixtureCard open={open} setOpen={setOpen} id={data.id} />
    </Box>
  );
};
export default FixtureCard;
