import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const FixtureCard = () => {
  const originalValue = {
    fixture: "fixture",
    result: "result",
  };
  const [value, setValue] = useState(originalValue.fixture);
  // const [matches, setMatches] = useState<FixtureType[]>([]);

  // useEffect(() => {
  //   const data =
  //     value === originalValue.fixture
  //       ? fixture.filter((d) => d.result === "")
  //       : fixture.filter((d) => d.result !== "");

  //   setMatches(data);
  // }, [value, !matches]);
  // if (!matches) return null;
  return (
    <Box sx={{ my: 3, minHeight: "70vh" }}>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
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
        {/* {matches.map((d) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                width: { xs: "190%", md: "40%" },
                p: { xs: 2, sm: 3 },
                m: 2,
                bgcolor: "info.main",
                borderRadius: 3,
              }}
              key={d.id}
            >
              <Typography
                sx={{
                  width: "40%",
                  fontSize: { xs: "0.85rem", sm: "1rem" },
                  fontWeight: { xs: "bold" },
                  textAlign: "center",
                }}
              >
                Red Dragon
              </Typography>
              {d.result ? (
                <Typography sx={{ textAlign: "center" }}>{d.result}</Typography>
              ) : (
                <Typography>Vs</Typography>
              )}
              <Typography
                sx={{
                  width: "40%",
                  fontSize: { xs: "0.85rem", sm: "1rem" },
                  textAlign: "center",
                }}
              >
                {d.teamName}
              </Typography>
            </Box>
          ))} */}
      </Box>
    </Box>
  );
};
export default FixtureCard;
