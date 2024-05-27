import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import WarningIcon from "@mui/icons-material/Warning";

const App = () => {
  const router = useRouter();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 2,
          bgcolor: "secondary.main",
          maxWidth: "1100px",
          borderRadius: 3,
          mx: { xs: 1, md: "auto" },
          p: 1,
        }}
      >
        <WarningIcon
          sx={{ color: "success.main", fontSize: { xs: "1rem", md: "2rem" } }}
        />
        <Typography
          sx={{
            color: "success.main",
            textAlign: "center",
            fontSize: { xs: "0.7rem", md: "1rem" },
          }}
        >
          The data base that I am using is out of date. So any data will not
          appear.Reach me out with email or phone, I could help to see the whole
          web with local host.
        </Typography>
      </Box>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 3,
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
              borderRadius: 3,
            }}
          >
            It is our team(Dragon Calcio Efootball Club) mini website develope
            with NextJs(ReactJs) , Next auth for authentication and Material UI
            for UI/UX . It includes Admin side and User side.You can control web
            in admin side and User side has user oriented Page.Clicking the
            following button to where you want to go.
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
              sx={{
                width: { xs: "30%", sm: "25%", md: "30%" },
                m: 2,
              }}
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
                  bgcolor: "primary.main",
                  backgroundImage: "url(../Red_Dragon.png)",
                  backgroundPosition: "center",
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Box
                  component="img"
                  src={`../unknown.png`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    opacity: "0.9",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    bgcolor: "info.main",
                    p: 1,
                    boxShadow: 3,
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
              sx={{
                width: { xs: "30%", sm: "25%", md: "30%" },
                m: 2,
              }}
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
                  backgroundImage: "url(../Red_Dragon.png)",
                  backgroundPosition: "center",
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                  bgcolor: "primary.main",
                }}
              >
                <Box
                  component="img"
                  src={`../unknown.png`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    opacity: "0.9",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    bgcolor: "info.main",
                    p: 1,
                    boxShadow: 3,
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
