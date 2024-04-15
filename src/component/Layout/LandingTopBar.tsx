import { Box, Typography } from "@mui/material";

const LandingTopBar = () => {
  return (
    <Box sx={{ bgcolor: "success.main", position: "sticky", top: 0 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 70,
          mx: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "70px" }}>
            <Box sx={{ width: "100%" }} component="img" src="../football.png" />
          </Box>
          <Typography
            sx={{
              color: "secondary.main",
              fontSize: { xs: "1.2rem", sm: "1.5rem" },
            }}
          >
            Dragon Calcio EFC
          </Typography>
        </Box>
        <Box sx={{ width: "60px", borderRadius: "50%" }}>
          <Box sx={{ width: "100%" }} component="img" src="../Red_Dragon.png" />
        </Box>
      </Box>
    </Box>
  );
};
export default LandingTopBar;
