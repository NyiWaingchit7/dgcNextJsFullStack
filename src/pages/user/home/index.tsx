import PlayerCard from "@/component/PlayerCard";
import UserEventHome from "@/component/userComponents/UserEventHome";
import UserHeadsHome from "@/component/userComponents/UserHeadsHome";
import { useAppSelector } from "@/store/hooks";
import { Box, Typography } from "@mui/material";
import { Head } from "@prisma/client";

const UserHome = () => {
  const data = useAppSelector((store) => store.home.items);
  const playerData = useAppSelector((store) => store.player.items);
  const head = playerData.filter((d) => d.head !== null);
  return (
    // <Box sx={{ minHeight: "90vh", maxWidth: "90vw", mx: "auto" }}>
    //   <Box
    //     sx={{
    //       width: { xs: "80px", sm: "100px" },
    //       mt: 5,
    //       height: "5px",

    //       bgcolor: "success.main",
    //     }}
    //   />

    //   <Typography
    //     sx={{
    //       fontSize: { xs: "1.5rem", sm: "2rem" },
    //       fontWeight: "bold",
    //       mx: 1,
    //     }}
    //   >
    //     Heads
    //   </Typography>

    //   <Box
    //     sx={{
    //       maxWidth: "1200px",
    //       mx: "auto",
    //       display: "flex",
    //       overflow: "auto",
    //       width: "100%",
    //       alignItems: "center",
    //       mt: 2,
    //     }}
    //   >
    //     {head &&
    //       head.map((p) => (
    //         <Box
    //           key={p.id}
    //           sx={{
    //             width: { xs: "50%", sm: "26%", md: "28%", lg: "25%" },
    //             flexShrink: 0,
    //             m: 2,
    //             mb: 3,
    //           }}
    //         >
    //           <PlayerCard id={p.id} name={p.name} role={p.head as Head} />
    //         </Box>
    //       ))}
    //   </Box>
    // </Box>
    <Box>
      <UserHeadsHome />
      <UserEventHome />
    </Box>
  );
};
export default UserHome;
