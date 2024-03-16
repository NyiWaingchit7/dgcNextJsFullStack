import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import NewHome from "@/component/NewHome";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteHomeText } from "@/store/slice/homeSlice";
import { fetchAppData } from "@/store/slice/appSlice";
import Loading from "@/component/Loading";
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
                  sx={{
                    p: 1,
                    "&:hover": { transform: "scale(1.2)" },
                    transition: "all ease-in 0.2s",
                  }}
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <EditIcon sx={{ fontSize: "1.7rem" }} />
                </Box>
                <Box
                  sx={{ p: 1, "&:hover": { transform: "scale(1.2)" } }}
                  onClick={() =>
                    dispatch(
                      deleteHomeText({
                        id: data[0].id,
                        onSuccess: () => {
                          dispatch(fetchAppData());
                        },
                      })
                    )
                  }
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
                  fontSize: { xs: "0.85rem", sm: "1.3rem" },
                  lineHeight: 1.7,
                }}
              >
                {data[0].description ? (
                  data[0].description
                ) : (
                  <CircularProgress />
                )}
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
