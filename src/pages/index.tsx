import PlayerCard from "@/component/PlayerCard";
import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";

const App = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ maxWidth: "1300px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            sx={{ width: { xs: "40%", md: "30%" } }}
            src="../Red_Dragon.png"
          />
        </Box>

        <Typography
          sx={{
            maxWidth: "800px",
            p: 2,
            m: 1,
            bgcolor: "info.main",
            color: "primary.main",
            lineHeight: 2,
          }}
        >
          It is our team(Red Dragon Efootball Club) mini website develope with
          NextJs(ReactJs) , Next auth for authentication and Material UI for
          UI/UX . It includes Admin side and User side.You can control web in
          admin side and User side has user oriented Page.Clicking the following
          button to where you want to go.
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            my: 5,
          }}
        >
          <Box
            sx={{ width: { xs: "30%", sm: "25%", md: "30%", lg: "40%" }, m: 2 }}
          >
            <Box
              sx={{
                width: "100%",
                height: {
                  xs: "125px",
                  sm: "150px",
                  md: "200px",
                  lg: "250px",
                },

                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                bgcolor: "info.main",
              }}
            >
              <Box
                component="img"
                src={`../unknown.png`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  backgroundImage: "url(../Red_Dragon.png)",
                  backgroundPosition: "center",
                  backgroundSize: "70%",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  color="success"
                  sx={{ px: 5, mx: 2 }}
                  onClick={() => {
                    router.push("/admin");
                  }}
                >
                  Admin
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{ width: { xs: "30%", sm: "25%", md: "30%", lg: "40%" }, m: 2 }}
          >
            <Box
              sx={{
                width: "100%",
                height: {
                  xs: "125px",
                  sm: "150px",
                  md: "200px",
                  lg: "250px",
                },

                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                bgcolor: "info.main",
              }}
            >
              <Box
                component="img"
                src={`../unknown.png`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  backgroundImage: "url(../Red_Dragon.png)",
                  backgroundPosition: "center",
                  backgroundSize: "70%",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  color="success"
                  sx={{ px: 5, mx: 2 }}
                  onClick={() => {
                    router.push("/user/home");
                  }}
                >
                  User
                </Button>{" "}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default App;

export const landData = [
  {
    id: 1,
    name: "Admin",
  },
  {
    id: 2,
    name: "User",
  },
];
