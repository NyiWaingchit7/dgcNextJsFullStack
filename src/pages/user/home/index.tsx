import PlayerCard from "@/component/PlayerCard";
import { useAppSelector } from "@/store/hooks";
import { Box, Typography } from "@mui/material";
import { Head } from "@prisma/client";

const UserHome = () => {
  const data = useAppSelector((store) => store.home.items);
  const playerData = useAppSelector((store) => store.player.items);
  const head = playerData.filter((d) => d.head !== null);
  return (
    <Box sx={{ minHeight: "90vh" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            width: { xs: "50%", sm: "35%", md: "15%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "100%" }} component="img" src="../Red_Dragon.png" />
        </Box>
        <Box
          sx={{
            width: { xs: "80%", md: "70%" },
            bgcolor: "info.light",
            p: 2,
            borderRadius: 5,
          }}
        >
          <Typography
            sx={{
              color: "primary.light",
              fontWeight: "light",
              fontSize: { xs: "0.85rem", sm: "1.2rem" },
            }}
          >
            {data[0]?.description}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", mx: "auto", mt: 5 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {head &&
            head.map((p) => (
              <Box
                key={p.id}
                sx={{
                  width: { xs: "40%", sm: "26%", md: "28%", lg: "20%" },

                  m: 2,
                  mb: 3,
                }}
              >
                <PlayerCard id={p.id} name={p.name} role={p.head as Head} />
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
};
export default UserHome;
