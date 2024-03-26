import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import NewEvent from "@/component/NewEvent";
import { useAppSelector } from "@/store/hooks";
import Loading from "@/component/Loading";
import EventCard from "@/component/EventCard";
import { useRouter } from "next/router";

const Event = () => {
  const data = useAppSelector((store) => store.event.items);
  const router = useRouter();
  const path = router.pathname.includes("user");
  return (
    <Box sx={{ minHeight: "90vh", mb: 3 }}>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          mt: 5,
          fontWeight: "bold",
          textDecoration: "underline",
          textUnderlineOffset: 3,
          mb: 5,
          cursor: "pointer",
        }}
      >
        Events
      </Typography>

      {data.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          {data.map((d) => (
            <EventCard key={d.id} data={d} path={path} />
          ))}
        </Box>
      ) : (
        <Loading />
      )}
    </Box>
  );
};

export default Event;
