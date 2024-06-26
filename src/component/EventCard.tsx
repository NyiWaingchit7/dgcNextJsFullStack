import { Box, Typography } from "@mui/material";
import { Event } from "@prisma/client";
import Link from "next/link";
import React from "react";
interface Props {
  data: Event;

  path?: boolean;
}
const EventCard = ({ data, path }: Props) => {
  const toHref = path ? "user" : "admin";
  return (
    <Link
      href={`/${toHref}/event/${data.id}`}
      style={{ textDecoration: "none" }}
    >
      <Box
        sx={{
          bgcolor: "info.main",
          p: 1,
          borderRadius: 4,
          border: 1,
          borderColor: "info.dark",
          boxShadow: 3,
          mb: 1,
        }}
        className="underline"
      >
        <Box
          sx={{
            width: { xs: 300, sm: 350 },
            height: { xs: 150, sm: 220 },
            mx: "auto",
          }}
        >
          <Box
            component="img"
            src={data.assetUrl || "../tournament.jpg"}
            sx={{ width: "100%", height: "100%", borderRadius: 3 }}
          />
        </Box>
        <Box sx={{}}>
          <Typography
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              color: "primary.dark",
              p: 1,
              fontSize: "1.2rem",
            }}
          >
            {data.title.toUpperCase()}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default EventCard;
