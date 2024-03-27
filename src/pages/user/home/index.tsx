import UserAchievementHome from "@/component/userComponents/UserAchievementHome";
import UserEventHome from "@/component/userComponents/UserEventHome";
import UserHeadsHome from "@/component/userComponents/UserHeadsHome";
import { useAppSelector } from "@/store/hooks";
import { Box } from "@mui/material";

const UserHome = () => {
  return (
    <Box>
      <UserHeadsHome />
      <UserEventHome />
      <UserAchievementHome />
    </Box>
  );
};
export default UserHome;
