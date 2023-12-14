import { Box } from "@mui/material";
import { ReactNode } from "react";
import AdminLayout from "./AdminLayout";
import { useRouter } from "next/router";

interface Prop {
  children: string | JSX.Element | JSX.Element[];
}
const Layout = ({ children }: Prop) => {
  const router = useRouter();
  const isAdmin = router.pathname.includes("/admin");
  if (isAdmin) {
    return (
      <Box>
        <AdminLayout>{children}</AdminLayout>
      </Box>
    );
  }
  return <Box>{children}</Box>;
};
export default Layout;
