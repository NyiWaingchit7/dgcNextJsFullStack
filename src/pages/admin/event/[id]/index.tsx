import { useAppSelector } from "@/store/hooks";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React from "react";

const EventDetail = () => {
  const router = useRouter();
  const id = Number(router.query.id);
  const allEvents = useAppSelector((store) => store.event.items);
  const data = allEvents.find((d) => d.id === id);
  if (!data) return null;
  return (
    <Box>
      <Box
        sx={{
          width: "90vw",
          mx: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,

          mt: 5,
        }}
      >
        <Button variant="contained" onClick={() => history.back()}>
          Back
        </Button>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <EditIcon
            // onClick={() => setOpen(true)}
            sx={{
              mx: 1,
              ":hover": { transform: "scale(1.1)" },
              transition: "all ease-in 0.2s",
              fontSize: { xs: "1rem", sm: "1.7rem" },
              width: "30px",
              bgcolor: "success.main",
              color: "info.main",
              p: 1,
              borderRadius: 3,
            }}
          />

          <DeleteForeverIcon
            // onClick={() =>
            //   dispatch(
            //     deleteAchievement({
            //       id: data.id,
            //       onSuccess: () => {
            //         dispatch(fetchAppData());
            //         router.push("/admin/achievement");
            //       },
            //     })
            //   )
            // }
            sx={{
              mx: 1,
              ":hover": { transform: "scale(1.2)" },
              transition: "all ease-in 0.2s",
              fontSize: { xs: "1rem", sm: "1.7rem" },
              width: "30px",
              bgcolor: "primary.main",
              color: "info.main",
              p: 1,
              borderRadius: 3,
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          mt: 2,
          maxWidth: "1100px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          mx: "auto",
          minHeight: "60vh",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ width: 350 }}>
          <Box
            component="img"
            src={data.assetUrl || "../../tournament.jpg"}
            sx={{ width: "100%", borderRadius: 2, boxShadow: 2 }}
          />
        </Box>
        <Box sx={{ p: 2, maxWidth: "500px", cursor: "pointer" }}>
          <Typography
            sx={{ fontSize: "1.1rem", fontWeight: "bold", textAlign: "center" }}
          >
            {data.title.toUpperCase()}
          </Typography>
          <Typography sx={{ textIndent: 50, my: 1 }}>
            {data.description} Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Molestiae similique molestias omnis doloribus
            quisquam praesentium beatae reiciendis consequuntur? Vero pariatur
            deleniti ullam sequi accusantium molestias labore nihil quae et
            cupiditate. Voluptate iure, officia delectus eius doloribus
            molestias repudiandae dignissimos! Eum eaque illum, unde quis
            assumenda nam ipsam natus. Sequi, cumque tempora! Nostrum magnam
            soluta itaque illum odit adipisci, corporis accusamus. Odio, dolor.
            Reiciendis neque nihil, commodi voluptas quia totam sed, nam
            eligendi tempore consequuntur ipsam. Adipisci inventore, ad quas
            perspiciatis illum doloribus odit sint iusto. Aliquid, iste dolor!
            Commodi, minima!{" "}
          </Typography>
          <Link
            href={"https://www.facebook.com/profile.php?id=100072030145878"}
            target="_blink"
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                mx: 1,
                color: "success.main",
                fontWeight: "bold",
                textAlign: "end",
              }}
            >
              Click here see more {">>>>"}
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default EventDetail;
