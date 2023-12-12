import { Box } from "@mui/material";
import { ReactNode, useEffect } from "react";
import TopBar from "./TopBar";
import Footer from "./Footer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/store/hooks";
import { fetchAppData } from "@/store/slice/appSlice";

interface Prop {
  children: ReactNode;
}

const AdminLayout = ({ children }: Prop) => {
  const { data } = useSession();
  const router = useRouter();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!data) {
      router.push("/admin");
    }
    if (data) {
      dispatch(fetchAppData());
    }
  }, [data]);

  return (
    <Box>
      <TopBar />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};
export default AdminLayout;
