import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ minHeight: "90vh" }}>
      <Box sx={{ display: { xs: "none", lg: "block" }, mt: 5 }}>
        <Typography
          sx={{
            fontSize: "1.7rem",
            color: "secondary.main",
            textAlign: "center",
            fontWeight: "bold",
          }}
        ></Typography>
      </Box>
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
            width: { xs: "50%", sm: "35%", md: "20%" },
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
            Hello,honorable audience., Welcome to our red dragon efootball
            club.Our team was one of the first team to participate in Myanmar's
            e league since its establishment. We have been able to firmly prove
            ourselves as the big team in Myanmar.The achievements we have been
            owned by the third place in myanmar e league twice (season 3 and 4)
            and the entry into the Asian Champions League twice.We managed to
            find and recruit good efootball players in Myanmar in a systematic
            way and become a strong great,together with the managers and all the
            members of the team.Moving forward, we will try to introduce the
            most skilled,sharp and top-level players for the Myanmar efootball
            community.
          </Typography>
        </Box>
      </Box>
      {/* <Box sx={{ display: "flex", mx: "auto", mt: 5 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {head.map((p) => (
            <Box
              key={p.id}
              sx={{
                width: { xs: "40%", sm: "26%", md: "28%", lg: "20%" },

                m: 2,
              }}
            >
              <PlayerCard id={p.id} name={p.name} img={p.img} role={p.role} />
            </Box>
          ))}
        </Box>
      </Box> */}
    </Box>
  );
};
export default Home;
