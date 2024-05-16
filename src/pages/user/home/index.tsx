import UserAchievementHome from "@/component/userComponents/UserAchievementHome";
import UserEventHome from "@/component/userComponents/UserEventHome";
import UserHeadsHome from "@/component/userComponents/UserHeadsHome";
import UserMatchesHome from "@/component/userComponents/UserMatchesHome";
import { useAppSelector } from "@/store/hooks";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

const UserHome = () => {
  const [mount, setMount] = useState(true);
  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          my: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "50px", borderRadius: "50%" }}>
          <Box sx={{ width: "100%" }} component="img" src="../Red_Dragon.png" />
        </Box>
        <Typography
          sx={{
            fontSize: { xs: "0.7rem", sm: "1.2rem" },
            fontWeight: "bold",
            color: "success.main",
          }}
        >
          Dragon will dominate everything{" "}
        </Typography>
        <Box sx={{ width: "50px", borderRadius: "50%" }}>
          <Box sx={{ width: "100%" }} component="img" src="../Red_Dragon.png" />
        </Box>
      </Box>

      <Box>
        <UserHeadsHome />
        <UserEventHome />
        <UserAchievementHome />
        <UserMatchesHome />
      </Box>
    </Box>
  );
};
export default UserHome;
