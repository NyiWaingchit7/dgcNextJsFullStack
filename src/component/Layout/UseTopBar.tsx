import { Box, Divider, Drawer, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Link from "next/link";
const UserTopBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ bgcolor: "success.main", position: "sticky", top: 0 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 70,
          mx: 2,
        }}
      >
        <Box
          onClick={() => setOpen(true)}
          sx={{ display: { xs: "block", lg: "none" } }}
        >
          <MenuIcon sx={{ fontSize: "1.5rem", color: "info.main" }} />
        </Box>
        <Box sx={{ display: { xs: "none", lg: "block" } }}>
          <Box sx={{ display: "flex" }}>
            {sideBar.map((s) => {
              return (
                <Link
                  key={s.id}
                  style={{ textDecoration: "none" }}
                  href={s.route}
                  onClick={() => setOpen(false)}
                >
                  <Box
                    sx={{
                      color: "info.main",
                      m: 1,
                      px: 2,
                      "&:hover": { bgcolor: "success.dark" },
                    }}
                  >
                    <Typography sx={{ fontWeight: "bold" }}>
                      {s.name}{" "}
                    </Typography>
                  </Box>
                </Link>
              );
            })}
          </Box>
        </Box>
        <Box sx={{ display: { xs: "block", lg: "none" } }}>
          <Typography
            sx={{
              fontSize: { md: "1.5rem", sm: "1.3rem", xs: "1rem" },
              color: "secondary.main",
              fontWeight: "bold",
            }}
          >
            RED DRAGON E.F.C
          </Typography>
        </Box>
        <Box sx={{ width: "60px", borderRadius: "50%" }}>
          <Box sx={{ width: "100%" }} component="img" src="../Red_Dragon.png" />
        </Box>
      </Box>
      <Box>
        <Drawer
          sx={{ display: { lg: "none" } }}
          anchor={"left"}
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          PaperProps={{
            style: {
              backgroundColor: "#d40b29",
            },
          }}
        >
          <Box onClick={() => setOpen(false)} sx={{ mx: "auto", mt: 3, p: 2 }}>
            <CloseIcon sx={{ fontSize: "3rem", color: "info.main" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              bgcolor: "success.main",
            }}
          >
            {sideBar.map((s) => {
              return (
                <Link
                  style={{ textDecoration: "none" }}
                  key={s.id}
                  href={s.route}
                  onClick={() => setOpen(false)}
                >
                  <Box
                    sx={{
                      color: "info.main",
                      px: 2,
                      "&:hover": { boxShadow: 3 },
                    }}
                  >
                    <Typography sx={{ fontWeight: "bold", p: 1 }}>
                      {s.name}
                    </Typography>
                  </Box>
                  <Divider
                    variant={"middle"}
                    sx={{
                      bgcolor: "info.light",
                      mb: 2,
                      px: 2,
                      width: "150px",
                    }}
                  />
                </Link>
              );
            })}
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};
export default UserTopBar;
export const sideBar = [
  {
    id: 1,
    name: "Home",
    icon: <HomeIcon sx={{ fontSize: "2rem" }} />,
    route: "/user/home",
  },
  {
    id: 2,
    name: "Player",
    icon: <GroupsIcon sx={{ fontSize: "2rem" }} />,
    route: "/user/player",
  },

  {
    id: 4,
    name: "Fixture",
    icon: <SportsSoccerIcon sx={{ fontSize: "2rem" }} />,
    route: "/user/fixture",
  },
];
