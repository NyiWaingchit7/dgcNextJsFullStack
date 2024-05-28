import { Box, Typography } from "@mui/material";

import { useRouter } from "next/router";

import FixtureCard from "@/component/FixtureCard";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useEffect, useRef, useState } from "react";

const UserMatchesHome = () => {
  const router = useRouter();
  const path = router.pathname.includes("user");
  const data = useAppSelector((store) => store.fixture.items);
  const [screenWidth, setScreenWidth] = useState(0);
  const handleResize = () => setScreenWidth(window.innerWidth);
  const elementRef = useRef();

  const scrollRight = (element: any) => {
    console.log(screenWidth);

    element.scrollLeft += screenWidth - 100;
  };
  const scrollLeft = (element: any) => {
    element.scrollLeft -= screenWidth - 100;
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("DOMContentLoaded", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);
  if (!data) return null;
  return (
    <Box
      sx={{
        my: 3,
        maxWidth: "98vw",
        mx: "auto",
        bgcolor: "info.light",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          width: { xs: "80px", sm: "100px" },
          mt: 5,
          height: "5px",

          bgcolor: "success.main",
        }}
      />
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem" },
            fontWeight: "bold",
            mx: 1,
          }}
        >
          Matches
        </Typography>
        <Link href={"/user/fixture"} style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontSize: { xs: "0.6rem", sm: "0.8rem" },
              cursor: "pointer",
              color: "success.dark",
              ":hover": {
                textDecoration: "underline",
                textUnderlineOffset: 3,
              },
            }}
          >
            All Matches
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          mt: 2,
          position: "relatice",
        }}
      >
        <KeyboardArrowRightIcon
          onClick={() => {
            scrollRight(elementRef.current);
          }}
          sx={{
            fontSize: "3rem",
            color: "primaray.main",
            position: "absolute",
            right: 0,
            zIndex: 5,
            cursor: "pointer",
            display: { xs: "none", lg: "block" },
            mt: 6,
          }}
        />
        <KeyboardArrowLeftIcon
          onClick={() => {
            scrollLeft(elementRef.current);
          }}
          sx={{
            fontSize: "3rem",
            color: "primaray.main",
            position: "absolute",
            zIndex: 5,
            cursor: "pointer",
            display: { xs: "none", lg: "block" },
            mt: 6,
          }}
        />

        <Box
          sx={{
            maxWidth: "1200px",
            mx: "auto",
            display: "flex",
            overflow: "auto",
            width: "100%",
            alignItems: "center",
            mt: 2,
            gap: { xs: 2, sm: 4 },
            position: "relatice",
            scrollBehavior: "smooth",
          }}
          ref={elementRef}
        >
          {data.slice(0, 5).map((d) => (
            <FixtureCard key={d.id} data={d} path={path} />
          ))}
        </Box>
      </Box>{" "}
    </Box>
  );
};
export default UserMatchesHome;
