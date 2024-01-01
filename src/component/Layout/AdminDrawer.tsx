import { Box, Drawer, Typography, Divider, Button } from "@mui/material";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Dispatch, ReactNode, SetStateAction } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
interface SideBar {
  id: number;
  name: string;
  route: string;
}
interface props {
  sideBar: SideBar[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  Icon: ReactNode;
}

const AdminDrawer = ({ sideBar, open, setOpen, Icon }: props) => {
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
          <Box sx={{ mx: "auto", mt: 2 }}>
            <Button
              variant="contained"
              sx={{ px: 1 }}
              onClick={() => signOut({ callbackUrl: "/admin" })}
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
