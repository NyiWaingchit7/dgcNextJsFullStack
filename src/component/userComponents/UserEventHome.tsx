import { useAppSelector } from "@/store/hooks";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import EventCard from "../EventCard";
import Loading from "../Loading";

const UserEventHome = () => {
  const data = useAppSelector((store) => store.event.items);
  const router = useRouter();
  const path = router.pathname.includes("user");
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
        Events
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
        {data.slice(0, 3).map((d) => (
          <EventCard key={d.id} data={d} path={path} />
        ))}
      </Box>
    </Box>
  );
};

export default UserEventHome;
