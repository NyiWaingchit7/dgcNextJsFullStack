import { Box } from "@mui/material";
import { ReactNode } from "react";
import AdminLayout from "./AdminLayout";
import { useRouter } from "next/router";
import UserLayout from "./UseLayout";

interface Prop {
  children: string | JSX.Element | JSX.Element[];
}
const Layout = ({ children }: Prop) => {
  const router = useRouter();
  const isAdmin = router.pathname.includes("/admin");
  const isUser = router.pathname.includes("/user");

  if (isAdmin) {
    return (
      <Box>
        <AdminLayout>{children}</AdminLayout>
      </Box>
    );
  }
  if (isUser) {
    return (
      <Box>
        <UserLayout>{children}</UserLayout>
      </Box>
    );
  }
  return <Box>{children}</Box>;
};
export default Layout;
