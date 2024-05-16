import { Box, Typography } from "@mui/material";

import { useRouter } from "next/router";

import FixtureCard from "@/component/FixtureCard";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";

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
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem" },
            fontWeight: "bold",
            mx: 1,
          }}
        >
          Matches
        </Typography>
        <Link href={"/user/fixture"} style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontSize: { xs: "0.6rem", sm: "0.8rem" },
              cursor: "pointer",
              color: "success.dark",
            }}
          >
            All Matches
          </Typography>
        </Link>
      </Box>
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
        {data.slice(0, 5).map((d) => (
          <FixtureCard key={d.id} data={d} path={path} />
        ))}
      </Box>{" "}
    </Box>
  );
};
export default UserMatchesHome;
