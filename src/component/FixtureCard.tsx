import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  Box,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Fixture } from "@prisma/client";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useEffect, useState } from "react";
import { deleteFixture } from "@/store/slice/fixtureSlice";
import { fetchAppData } from "@/store/slice/appSlice";
import NewFixtureCard from "./NewFixtureCard";

interface prop {
  data: Fixture;
}
const FixtureCard = ({ data }: prop) => {
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
        bgcolor: "info.main",
        borderRadius: 3,
        m: 2,
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            width: "45%",
            fontSize: { xs: "0.7rem", sm: "1rem" },
            fontWeight: { xs: "bold" },
            textAlign: "center",
          }}
        >
          Red Dragon
        </Typography>
        {data.matchResult ? (
          <Typography
            sx={{
              textAlign: "center",
              width: "45%",
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
            width: "45%",
            fontSize: { xs: "0.7rem", sm: "1rem" },
            textAlign: "center",
          }}
        >
          {opponentTeam}
        </Typography>
        <Button onClick={() => setOpen(true)}>
          <EditIcon sx={{ fontSize: "1.5rem" }} />
        </Button>
        <Button onClick={handleDeleteFixture}>
          <DeleteForeverIcon
            sx={{ fontSize: "1.5rem", color: "success.main" }}
          />
        </Button>
      </Box>
      <NewFixtureCard open={open} setOpen={setOpen} id={data.id} />
    </Box>
  );
};
export default FixtureCard;
