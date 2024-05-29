import { useAppDispatch } from "@/store/hooks";
import { createAdminAccount } from "@/store/slice/adminSlice";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { Type } from "@prisma/client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Login = () => {
  const { data } = useSession();
  const name = data?.user?.name as string;
  const email = data?.user?.email as string;
  const assetUrl = data?.user?.image as string;
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [load, setLoad] = useState(false);
  const dispatch = useAppDispatch();
  const onSuccess = () => {
    setLoad(false);
    setPassword("");
    // router.push("/admin/home");
  };
  const createAdmin = () => {
    setLoad(true);
    dispatch(
      createAdminAccount({
        name,
        email,
        assetUrl,
        password,
        type: Type.PENDING,
        onSuccess,
      })
    );
  };

  return (
    <Box
      sx={{
        minHeight: "80vh",
      }}
    >
      <Box
        sx={{ width: 550, height: "30vh", mx: "auto", mt: 7, border: 1, p: 2 }}
      >
        <Typography
          sx={{ fontWeight: "bold", fontSize: "1.3rem", textAlign: "center" }}
        >
          Set Password
        </Typography>

        <TextField
          sx={{ mt: 2 }}
          fullWidth
          autoFocus
          required
          label="New Password"
          placeholder="New Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 2 }}
        >
          <Button variant="contained" color="success">
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={createAdmin}
            disabled={!password || load}
          >
            Comfirm {load && <CircularProgress size={15} />}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Login;
