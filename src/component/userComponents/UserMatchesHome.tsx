import { Box, Typography } from "@mui/material";

import { useRouter } from "next/router";

import FixtureCard from "@/component/FixtureCard";
import { useAppSelector } from "@/store/hooks";

const UserMatchesHome = () => {
  const router = useRouter();
  const path = router.pathname.includes("user");

  const data = useAppSelector((store) => store.fixture.items);

  if (!data) return null;
  return (
    <Box sx={{ my: 3, maxWidth: "90vw", mx: "auto" }}>
      <Box
        sx={{
          width: { xs: "80px", sm: "100px" },
          mt: 5,
          height: "5px",

          bgcolor: "success.main",
        }}
      />
      <Typography
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem" },
          fontWeight: "bold",
          mx: 1,
        }}
      >
        Matches
      </Typography>
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          display: "flex",
          overflow: "auto",
          width: "100%",
          alignItems: "center",
          mt: 2,
          gap: { xs: 2, sm: 4 },
        }}
      >
        {data.map((d) => (
          <FixtureCard key={d.id} data={d} path={path} />
        ))}
      </Box>{" "}
      <Box
        sx={{
          maxWidth: { xs: "80%", sm: "90%" },
          mt: 2,
          height: "1px",

          bgcolor: "primary.dark",
          mx: "auto",
        }}
      />
    </Box>
  );
};
export default UserMatchesHome;
