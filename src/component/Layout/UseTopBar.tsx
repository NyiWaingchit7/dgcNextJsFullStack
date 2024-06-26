import { Box, Divider, Drawer, Typography, Zoom } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";

import { useAppDispatch } from "@/store/hooks";
import { fetchUserAppData } from "@/store/slice/appSlice";
import Link from "next/link";
import { useRouter } from "next/router";
const UserTopBar = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{ bgcolor: "success.main", position: "sticky", top: 0, zIndex: 5 }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 70,
          mx: 2,
        }}
      >
        <Zoom
          in={true}
          style={{
            transitionDelay: "1000ms",
            transitionDuration: "1000ms",
          }}
        >
          <Box onClick={() => setOpen(true)}>
            <MenuIcon sx={{ fontSize: "2rem", color: "info.main" }} />
          </Box>
        </Zoom>

        <Zoom
          in={true}
          style={{
            transitionDelay: "1000ms",
            transitionDuration: "1000ms",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { md: "1.5rem", sm: "1.3rem", xs: "1rem" },
                color: "secondary.main",
                fontWeight: "bold",
              }}
            >
              Dragon Calcio E.F.C
            </Typography>
          </Box>
        </Zoom>
        <Zoom
          in={true}
          style={{
            transitionDelay: "1000ms",
            transitionDuration: "1000ms",
          }}
        >
          <Box sx={{ width: "60px", borderRadius: "50%" }}>
            <Box
              sx={{ width: "100%" }}
              component="img"
              src="../Red_Dragon.png"
            />
          </Box>
        </Zoom>
      </Box>
      <Box>
        <Drawer
          anchor={"left"}
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          PaperProps={{
            style: {
              backgroundColor: "#640002",
            },
          }}
        >
          <Box
            onClick={() => setOpen(false)}
            sx={{
              width: "100%",
              mt: 3,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <CloseIcon sx={{ fontSize: "2rem", color: "info.main", mx: 1 }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              bgcolor: "success.main",
              mt: 2,
            }}
          >
            {sideBar.map((s) => {
              return (
                <Link
                  style={{ textDecoration: "none" }}
                  key={s.id}
                  href={s.route}
                  onClick={() => {
                    setOpen(false);
                    setSelected(s.name);
                    localStorage.setItem("selectedItem", s.name);
                  }}
                >
                  <Box
                    sx={{
                      color: "info.main",
                      px: 2,
                      bgcolor:
                        selected === s.name ? "success.dark" : "success.main",
                      borderRadius: 4,
                      ":hover": {
                        bgcolor: "success.dark",
                      },
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
                      my: 2,
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
    route: "/user/home",
  },
  {
    id: 2,
    name: "Player",
    route: "/user/player",
  },
  {
    id: 3,
    name: "Achievement",
    route: "/user/achievement",
  },
  {
    id: 4,
    name: "Event",
    route: "/user/event",
  },
  {
    id: 5,
    name: "Fixture",
    route: "/user/fixture",
  },
];
