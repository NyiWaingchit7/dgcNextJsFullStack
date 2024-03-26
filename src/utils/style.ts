import { Box, createTheme, styled } from "@mui/material";

export const UnderLineAnimation = styled(Box)(({ theme }) => ({
  position: "relative",
  ":after": {
    content: "''",
    position: "absolute",
    width: "100%",
    transform: "scaleX(0)",
    height: "3px",
    bottom: 0,
    left: 0,
    bgcolor: "success.main",
    transformOrigin: "center",
    transition: "transform 0.5s ease-out",
  },
  ":hover:after": {
    transform: "scaleX(1)",
  },
}));
