import { Box } from "@mui/material";
import { ReactNode, useEffect } from "react";
import TopBar from "./TopBar";
import Footer from "./Footer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchAppData } from "@/store/slice/appSlice";

interface Prop {
  children: ReactNode;
}

const AdminLayout = ({ children }: Prop) => {
  const { data } = useSession();
  const { isReady, ...router } = useRouter();
  const dispatch = useAppDispatch();
  const { init } = useAppSelector((state) => state.app);
  useEffect(() => {
    if (data && !init) {
      localStorage.setItem("login", data?.user?.name as string);
      dispatch(fetchAppData());
    } else {
      const check = localStorage.getItem("login");
      if (!check) {
        router.push("/admin");
      }
    }
  }, [data, isReady]);

  return (
    <Box>
      <TopBar />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};
export default AdminLayout;
