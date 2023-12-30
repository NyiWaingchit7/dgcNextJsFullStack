import { Box } from "@mui/material";
import { ReactNode, useEffect } from "react";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchUserAppData } from "@/store/slice/appSlice";
import UserTopBar from "./UseTopBar";

interface Prop {
  children: ReactNode;
}

const UserLayout = ({ children }: Prop) => {
  const { isReady, ...router } = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserAppData());
  }, []);

  return (
    <Box>
      <UserTopBar />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};
export default UserLayout;
