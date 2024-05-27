import {
  Box,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NewFixtureCard from "@/component/NewFixtureCard";
import FixtureCard from "@/component/FixtureCard";
import { useAppSelector } from "@/store/hooks";
import { Fixture } from "@prisma/client";

const Fixture = () => {
  const router = useRouter();
  const originalValue = {
    fixture: "fixture",
    result: "result",
  };
  const [value, setValue] = useState(originalValue.fixture);
  const [open, setOpen] = useState(false);
  const data = useAppSelector((store) => store.fixture.items);
  const [matches, setMatches] = useState<Fixture[]>([]);
  const toolTipText = (text: string) => {
    return <Typography sx={{ fontSize: "1rem" }}>{text}</Typography>;
  };

  useEffect(() => {
    const fixtureData =
      value === originalValue.fixture
        ? data.filter((d) => d.matchResult === null)
        : data.filter((d) => d.matchResult !== null);

    setMatches(fixtureData);
  }, [value, data]);
  if (!matches) return null;
  return (
    <Box sx={{ minHeight: "70vh" }}>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          mt: 3,
          fontWeight: "bold",
          textDecoration: "underline",
          textUnderlineOffset: 3,
          mb: 3,
          cursor: "pointer",
        }}
      >
        Fixture and Opponent Team
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ mx: 1 }}>
          <Tooltip title={toolTipText("Add New Fixture")} arrow placement="top">
            <AddIcon
              sx={{
                fontSize: { xs: "1rem", sm: "1.5rem" },
                width: "30px",
                bgcolor: "primary.main",
                color: "info.main",
                p: 1,
                borderRadius: 3,
                mx: 1,
              }}
              onClick={() => setOpen(true)}
            />
          </Tooltip>

          <Tooltip title={toolTipText("Opponent Teams")} arrow placement="top">
            <WorkspacesIcon
              sx={{
                fontSize: { xs: "1rem", sm: "1.5rem" },
                width: "30px",
                bgcolor: "primary.main",
                color: "info.main",
                p: 1,
                borderRadius: 3,
                mx: 1,
              }}
              onClick={() => {
                router.push("/admin/opponentTeam");
              }}
            />
          </Tooltip>
        </Box>
        <Box>
          <ToggleButtonGroup
            sx={{ px: 1 }}
            color="primary"
            value={value}
            exclusive
            onChange={(evt, value) => setValue(value)}
          >
            <ToggleButton
              sx={{ px: 2, fontSize: { xs: "0.7rem", sm: "1rem" } }}
              value={originalValue.fixture}
            >
              Fixture
            </ToggleButton>
            <ToggleButton
              sx={{ px: 2, fontSize: { xs: "0.7rem", sm: "1rem" } }}
              value={originalValue.result}
            >
              Result
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
      {matches.length > 0 ? (
        <Box
          sx={{
            mt: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            mx: "auto",
          }}
        >
          {matches.map((d) => (
            <FixtureCard key={d.id} data={d} />
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            minHeight: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "1.5rem", color: "success.main" }}>
            There is no fixture right now .... !
          </Typography>
        </Box>
      )}
      <NewFixtureCard open={open} setOpen={setOpen} />
    </Box>
  );
};
export default Fixture;
