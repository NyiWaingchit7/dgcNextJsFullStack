import {
  Box,
  Button,
  ToggleButton,
  ToggleButtonGroup,
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
import Loading from "@/component/Loading";

const Fixture = () => {
  const router = useRouter();
  const path = router.pathname.includes("user");
  const originalValue = {
    fixture: "fixture",
    result: "result",
  };
  const [value, setValue] = useState(originalValue.fixture);
  const [open, setOpen] = useState(false);
  const data = useAppSelector((store) => store.fixture.items);
  const [matches, setMatches] = useState<Fixture[]>([]);

  useEffect(() => {
    const fixtureData =
      value === originalValue.fixture
        ? data.filter((d) => d.matchResult === null)
        : data.filter((d) => d.matchResult !== null);

    setMatches(fixtureData);
  }, [value, data]);
  if (!matches) return null;
  return (
    <Box sx={{ minHeight: "70vh", mt: 3 }}>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          mt: 2,
          fontWeight: "bold",
          textDecoration: "underline",
          textUnderlineOffset: 3,
          mb: 2,
          cursor: "pointer",
        }}
      >
        Fixture and Results
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <ToggleButtonGroup
            sx={{ px: 3 }}
            color="primary"
            value={value}
            exclusive
            onChange={(evt, value) => setValue(value)}
          >
            <ToggleButton sx={{ px: 3 }} value={originalValue.fixture}>
              Fixture
            </ToggleButton>
            <ToggleButton sx={{ px: 3 }} value={originalValue.result}>
              Result
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
      {matches.length > 0 ? (
        <Box
          sx={{
            maxWidth: "95vw",
            mx: "auto",
            mt: 2,
            display: "flex",

            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {matches.map((d) => (
            <FixtureCard key={d.id} data={d} path={path} />
          ))}
        </Box>
      ) : (
        <Loading />
      )}
      <NewFixtureCard open={open} setOpen={setOpen} />
    </Box>
  );
};
export default Fixture;
