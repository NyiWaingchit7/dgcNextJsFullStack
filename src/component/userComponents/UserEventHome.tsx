import { useAppSelector } from "@/store/hooks";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import EventCard from "../EventCard";
import Loading from "../Loading";
import Link from "next/link";

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
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1.1rem", sm: "1.7rem" },
            fontWeight: "bold",
            mx: 1,
            textAlign: "center",
          }}
        >
          Take Place in Tournament Events
        </Typography>
        <Link href={"/user/event"} style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontSize: { xs: "0.6rem", sm: "0.8rem" },
              cursor: "pointer",
              color: "success.dark",
              ":hover": {
                textDecoration: "underline",
                textUnderlineOffset: 3,
              },
            }}
          >
            All Events
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
        {data.slice(0, 3).map((d) => (
          <EventCard key={d.id} data={d} path={path} />
        ))}
      </Box>
    </Box>
  );
};

export default UserEventHome;
