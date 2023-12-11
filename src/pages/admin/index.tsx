import { Box, Typography, Button } from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Admin = () => {
  const { data } = useSession();
  const router = useRouter();
  if (!data) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          onClick={() => signIn("google", { callbackUrl: "/admin/home" })}
        >
          sign in
        </Button>
      </Box>
    );
  } else {
    router.push("/admin/home");
  }
};
export default Admin;
