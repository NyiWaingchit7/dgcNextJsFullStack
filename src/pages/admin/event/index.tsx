import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import NewEvent from "@/component/NewEvent";
import { useAppSelector } from "@/store/hooks";
import Loading from "@/component/Loading";
import EventCard from "@/component/EventCard";

const Event = () => {
  const [open, setOpen] = useState(false);
  const data = useAppSelector((store) => store.event.items);

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
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", mx: 3, p: 3 }}
        onClick={() => setOpen(true)}
      >
        <Button
          variant="contained"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Add New Event
        </Button>
        <AddIcon
          sx={{
            mx: 1,
            ":hover": { transform: "scale(1.1)" },
            transition: "all ease-in 0.2s",
            fontSize: { xs: "1.3rem", sm: "1.7rem" },
            width: "30px",
            bgcolor: "primary.main",
            color: "info.main",
            p: 1,
            borderRadius: 3,
            display: { xs: "block", sm: "none" },
          }}
        />
      </Box>
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
            <EventCard key={d.id} data={d} />
          ))}
        </Box>
      ) : (
        <Loading />
      )}
      <NewEvent open={open} setOpen={setOpen} />
    </Box>
  );
};

export default Event;
