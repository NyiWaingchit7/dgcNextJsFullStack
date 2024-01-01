import { Box, Button, Typography } from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const { data } = useSession();
  const router = useRouter();

  if (!data) {
    return (
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "column",
            height: { xs: "60vh", sm: "70vh" },
            width: { xs: "90vw", sm: "50vw", md: "40vw" },
            mx: "auto",
            my: 5,
            bgcolor: "info.main",
            borderRadius: 4,
          }}
        >
          <Box sx={{ width: "50%" }}>
            <Box sx={{ width: "100%" }} component="img" src="Red_Dragon.png" />
          </Box>
          <Box sx={{ color: "success.main", my: 2 }}>
            <Typography
              sx={{
                fontSize: { xs: "1rem", am: "1.3rem" },
                fontWeight: "bold",
              }}
            >
              Are you Admin at Red Dragon EFC ?
            </Typography>
          </Box>
          <Button
            variant="contained"
            onClick={() => signIn("google", { callbackUrl: "/admin" })}
          >
            Sign in
          </Button>
        </Box>
      </Box>
    );
  } else {
    router.push("/admin/home");
  }
}
