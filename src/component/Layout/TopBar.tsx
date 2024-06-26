import { Box, Button, Typography } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

import { useRouter } from "next/router";
import AdminDrawer from "./AdminDrawer";
const TopBar = () => {
  const { data } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Home");
  useEffect(() => {
    const selectedItem = localStorage.getItem("adminSelectedItem");

    if (selectedItem) {
      setSelected(selectedItem);
      router.push(`/admin/${selectedItem.toLocaleLowerCase()}`);
    } else {
      setSelected("Home");
    }
  }, [selected]);
  return (
    <Box
      sx={{
        position: "sticky",
        bgcolor: "success.main",
        top: { xs: 0, lg: -50 },
        zIndex: 5,
      }}
    >
      <Box
        sx={{
          p: 1,
          display: { xs: "none", lg: "block" },
        }}
      >
        <Typography
          sx={{
            fontSize: "1.3rem",
            color: "secondary.main",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Dragon Calcio E.F.C (Admin Dashboard)
        </Typography>
      </Box>
      <Box>
        {data ? (
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
                      onClick={() => {
                        setOpen(false);
                        setSelected(s.name);
                        localStorage.setItem("adminSelectedItem", s.name);
                      }}
                    >
                      <Box
                        sx={{
                          color: "info.main",
                          m: 1,
                          px: 3,
                          py: 1,
                          bgcolor:
                            selected === s.name
                              ? "success.dark"
                              : "success.main",
                          borderRadius: 4,
                          ":hover": {
                            bgcolor: "success.dark",
                          },
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
                Admin Dashboard
              </Typography>
            </Box>
            <Box
              sx={{
                width: "60px",
                borderRadius: "50%",
                display: { xs: "block", lg: "none" },
              }}
            >
              <Box
                sx={{ width: "100%", "&:hover": { transform: "scale(1.1)" } }}
                component="img"
                src="../../Red_Dragon.png"
              />
            </Box>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <Button
                variant="contained"
                sx={{ px: 1 }}
                onClick={() => {
                  signOut({ callbackUrl: "/admin" });
                  localStorage.removeItem("login");
                }}
              >
                Log Out
              </Button>
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mx: 2,
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
            <Box sx={{ width: "60px", borderRadius: "50%" }}>
              <Box
                sx={{ width: "100%" }}
                component="img"
                src="../Red_Dragon.png"
              />
            </Box>
          </Box>
        )}
        <Box>
          <AdminDrawer
            sideBar={sideBar}
            open={open}
            setOpen={setOpen}
            selected={selected}
            setSelected={setSelected}
            Icon={
              <CloseIcon sx={{ fontSize: "2rem", color: "info.main", mx: 1 }} />
            }
          />
        </Box>
      </Box>
    </Box>
  );
};
export default TopBar;
export const sideBar = [
  {
    id: 1,
    name: "Home",
    route: "/admin/home",
  },
  {
    id: 2,
    name: "Player",
    route: "/admin/player",
  },
  {
    id: 3,
    name: "Achievement",
    route: "/admin/achievement",
  },

  {
    id: 4,
    name: "Fixture",
    route: "/admin/fixture",
  },
  {
    id: 5,
    name: "Event",
    route: "/admin/event",
  },
];
