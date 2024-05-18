import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

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
          justifyContent: "space-evenly",
          alignItems: "center",
          color: "info.light",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: { xs: 2, sm: 0 },
          }}
        >
          <LocalPhoneIcon sx={{ fontSize: "2rem" }} />
          <Box>
            <Typography sx={{ cursor: "pointer" }}>0983834738</Typography>
            <Typography sx={{ cursor: "pointer" }}>0983834738</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            m: { xs: 0, sm: 2 },
            display: "flex",
            gap: 2,
          }}
        >
          {footer.map((v) => {
            return (
              <Box
                sx={{
                  ":hover": {
                    transform: "scale(1.1)",
                  },
                }}
                key={v.id}
              >
                {v.icon}
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box sx={{ width: "100%", my: 1 }}>
        <Typography sx={{ color: "info.dark", textAlign: "center" }}>
          Dragon Calcio Efootball Club@
        </Typography>
      </Box>
    </Box>
  );
};
export default Footer;

export const footer = [
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
  {
    id: 4,
    name: "Facebook",
    icon: <FacebookIcon sx={{ fontSize: "2rem" }} />,
    link: "",
  },
  {
    id: 5,
    name: "Instagram",
    icon: <InstagramIcon sx={{ fontSize: "2rem" }} />,
    link: "",
  },
  {
    id: 6,
    name: "Twitter",
    icon: <TwitterIcon sx={{ fontSize: "2rem" }} />,
    link: "",
  },
];
