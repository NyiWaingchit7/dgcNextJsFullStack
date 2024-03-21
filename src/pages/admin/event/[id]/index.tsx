import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React, { useState } from "react";
import NewEvent from "@/component/NewEvent";
import { deleteEvent } from "@/store/slice/eventSlice";
import { fetchAppData } from "@/store/slice/appSlice";

const EventDetail = () => {
  const router = useRouter();
  const id = Number(router.query.id);
  const allEvents = useAppSelector((store) => store.event.items);
  const data = allEvents.find((d) => d.id === id);
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
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
            onClick={() => setOpen(true)}
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
            onClick={() =>
              dispatch(
                deleteEvent({
                  id: data.id,
                  onSuccess: () => {
                    dispatch(fetchAppData());
                    router.push("/admin/event");
                  },
                })
              )
            }
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
            sx={{ fontSize: "1.3rem", fontWeight: "bold", textAlign: "center" }}
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
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Typography
                sx={{
                  mx: 1,
                  color: "info.main",
                  fontWeight: "bold",
                  px: 1,
                  bgcolor: "success.main",
                  width: "fit-content",
                  borderRadius: 1,
                }}
              >
                Click here see more {">>>>"}
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>
      <NewEvent open={open} setOpen={setOpen} id={data.id} />
    </Box>
  );
};

export default EventDetail;
