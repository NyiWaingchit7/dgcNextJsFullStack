import { Box, Typography } from "@mui/material";
import { Player } from "@prisma/client";
import PlayerMatchesCard from "./PlayerMatchCard";

interface Prop {
  playerData: Player;
}

const PlayerDetail = ({ playerData }: Prop) => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: { xs: 270, sm: 320, md: 320, lg: 420 },
          color: "info.light",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", lg: "70%" },
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "0.8rem", lg: "1rem" }, width: "100%" }}
          >
            Name
          </Typography>
          <Typography sx={{ width: { xs: "50px", md: "100px" } }}>
            {" "}
            -{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", lg: "1rem" },
              textAlign: "start",
              width: "100%",
            }}
          >
            {playerData.name.toLocaleUpperCase()}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "90%", lg: "70%" },
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "0.8rem", lg: "1rem" }, width: "100%" }}
          >
            Age
          </Typography>
          <Typography sx={{ width: { xs: "50px", md: "100px" } }}>
            -{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", lg: "1rem" },
              textAlign: "start",
              width: "100%",
            }}
          >
            {playerData.age}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "90%", lg: "70%" },
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "0.8rem", lg: "1rem" }, width: "100%" }}
          >
            City
          </Typography>
          <Typography sx={{ width: { xs: "50px", md: "100px" } }}>
            {" "}
            -{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", lg: "1rem" },
              textAlign: "start",
              width: "100%",
            }}
          >
            {playerData.city.toLocaleUpperCase()}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "90%", lg: "70%" },
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "0.8rem", lg: "1rem" }, width: "100%" }}
          >
            Join Date{" "}
          </Typography>
          <Typography sx={{ width: { xs: "50px", md: "100px" } }}>
            {" "}
            -{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", lg: "1rem" },
              textAlign: "start",
              width: "100%",
            }}
          >
            {playerData.joinDate}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default PlayerDetail;
