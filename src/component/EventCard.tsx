import { Box, Typography } from "@mui/material";
import { Event } from "@prisma/client";
import Link from "next/link";
import React from "react";
interface Props {
  data: Event;
  id?: number;
  path?: boolean;
}
const EventCard = ({ data, id, path }: Props) => {
  return (
    <Link href={`/admin/event/${data.id}`} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          bgcolor: "info.main",
          p: 2,
          borderRadius: 3,
          border: 2,
          borderColor: "primary.main",
          ":hover": { borderColor: "info.dark" },
          transition: "all ease-in 0.3s",
        }}
      >
        <Box sx={{ width: { xs: 325, sm: 375 } }}>
          <Box
            component="img"
            src="../tournament.jpg"
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
