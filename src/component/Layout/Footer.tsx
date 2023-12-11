import { Box, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      sx={{
        maxWidth: "100vw",
        bgcolor: "primary.main",
        p: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "info.dark",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            m: { xs: 0, sm: 2 },
            width: { xs: "75%", sm: "40%", md: "30%", lg: "20%" },
          }}
        >
          {footerOne.map((v) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mx: 3,
                  p: 1,
                }}
                key={v.id}
              >
                <Typography>{v.name}</Typography>
                {v.icon}
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{
            m: { xs: 0, sm: 2 },
            width: { xs: "75%", sm: "40%", md: "30%", lg: "20%" },
          }}
        >
          {footerTwo.map((v) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mx: 3,
                  p: 1,
                  flexDirection: { xs: "row-reverse", sm: "row" },
                }}
                key={v.id}
              >
                {v.icon}
                <Typography>{v.name}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box sx={{ width: "100%", my: 1 }}>
        <Typography sx={{ color: "info.dark", textAlign: "center" }}>
          Red Dragon Efootball Club@
        </Typography>
      </Box>
    </Box>
  );
};
export default Footer;

export const footerOne = [
  {
    id: 1,
    name: "Email",
    icon: <EmailIcon sx={{ fontSize: "2rem" }} />,
    link: "",
  },
  {
    id: 2,
    name: "Whatsapp",
    icon: <WhatsAppIcon sx={{ fontSize: "2rem" }} />,
    link: "",
  },
  {
    id: 3,
    name: "YouTube",
    icon: <YouTubeIcon sx={{ fontSize: "2rem" }} />,
    link: "",
  },
];
export const footerTwo = [
  {
    id: 1,
    name: "Facebook",
    icon: <FacebookIcon sx={{ fontSize: "2rem" }} />,
    link: "",
  },
  {
    id: 2,
    name: "Instagram",
    icon: <InstagramIcon sx={{ fontSize: "2rem" }} />,
    link: "",
  },
  {
    id: 3,
    name: "Twitter",
    icon: <TwitterIcon sx={{ fontSize: "2rem" }} />,
    link: "",
  },
];
