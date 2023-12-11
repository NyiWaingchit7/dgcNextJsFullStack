import { Box } from "@mui/material";
import { ReactNode, useEffect } from "react";
import TopBar from "./TopBar";
import Footer from "./Footer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

interface Prop {
  children: ReactNode;
}

const AdminLayout = ({ children }: Prop) => {
  const { data } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!data) {
      router.push("/admin");
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
