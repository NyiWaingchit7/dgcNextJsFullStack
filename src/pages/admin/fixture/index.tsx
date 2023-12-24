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
import { useState } from "react";

const Fixture = () => {
  const router = useRouter();
  const originalValue = {
    fixture: "fixture",
    result: "result",
  };
  const [value, setValue] = useState(originalValue.fixture);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Button variant="contained" color="primary" sx={{ m: 2 }}>
            <AddIcon sx={{ fontSize: "1.5rem" }} />
          </Button>
          <Button
            variant="contained"
            sx={{ m: 2 }}
            onClick={() => {
              router.push("/admin/opponentTeam");
            }}
          >
            <WorkspacesIcon sx={{ fontSize: "1.5rem" }} />
          </Button>
        </Box>
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
    </Box>
  );
};
export default Fixture;
