import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import NewHome from "@/component/NewHome";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteHomeText } from "@/store/slice/homeSlice";
const Home = () => {
  const data = useAppSelector((store) => store.home.items);
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

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
          {data[0]?.description ? (
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{ p: 1 }}
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <EditIcon sx={{ fontSize: "1.7rem" }} />
                </Box>
                <Box
                  sx={{ p: 1 }}
                  onClick={() => dispatch(deleteHomeText({ id: data[0].id }))}
                >
                  <DeleteForeverIcon
                    sx={{ fontSize: "1.7rem", color: "success.main" }}
                  />
                </Box>
              </Box>
              <Typography
                sx={{
                  color: "primary.light",
                  fontWeight: "light",
                  fontSize: { xs: "0.85rem", sm: "1.2rem" },
                  lineHeight: 1.5,
                }}
              >
                {data[0].description}
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{
                height: "20vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{ px: 4 }}
                onClick={() => {
                  setOpen(true);
                }}
              >
                Add <AddIcon sx={{ fontSize: "1.5rem" }} />
              </Button>
            </Box>
          )}
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
      <NewHome
        open={open}
        setOpen={setOpen}
        updateText={data[0]?.description}
        id={data[0]?.id}
      />
    </Box>
  );
};
export default Home;
