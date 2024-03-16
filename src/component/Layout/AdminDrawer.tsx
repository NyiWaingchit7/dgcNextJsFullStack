import { Box, Drawer, Typography, Divider, Button } from "@mui/material";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Dispatch, ReactNode, SetStateAction, useEffect } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/router";
interface SideBar {
  id: number;
  name: string;
  route: string;
}
interface props {
  sideBar: SideBar[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  selected: string;
  setSelected: (d: string) => void;
  Icon: ReactNode;
}

const AdminDrawer = ({
  sideBar,
  open,
  setOpen,
  Icon,
  selected,
  setSelected,
}: props) => {
  const router = useRouter();
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
          {Icon}
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
                onClick={() => {
                  setOpen(false);
                  setSelected(s.name);
                  localStorage.setItem("adminSelectedItem", s.name);
                }}
              >
                <Box
                  sx={{
                    color: "info.main",
                    px: 3,
                    py: 1,
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
                    mb: 2,
                    px: 2,
                    width: "150px",
                  }}
                />
              </Link>
            );
          })}
          <Box sx={{ mx: "auto", mt: 2 }}>
            <Button
              variant="contained"
              sx={{ px: 1 }}
              onClick={() => {
                signOut({ callbackUrl: "/admin" });
                localStorage.removeItem("login");
              }}
              size="small"
            >
              Log Out <LogoutIcon sx={{ fontSize: "1rem", m: 1 }} />
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};
export default AdminDrawer;
