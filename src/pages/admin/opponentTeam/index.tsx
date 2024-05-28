import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import NewOpponentTeam from "@/component/NewOpponentTeam";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteOpponentTeam } from "@/store/slice/opponentTeamSlice";
import { fetchAppData } from "@/store/slice/appSlice";

const OpponentTeam = () => {
  const data = useAppSelector((store) => store.opponentTeam.items);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<number>();
  const dispatch = useAppDispatch();
  const handleDeleteOpponentTeam = (id: number) => {
    dispatch(
      deleteOpponentTeam({
        id,
        onSuccess: () => {
          dispatch(fetchAppData());
        },
      })
    );
  };

  return (
    <Box sx={{ minHeight: "70vh" }}>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          mt: 3,
          fontWeight: "bold",
          textDecoration: "underline",
          textUnderlineOffset: 3,
          mb: 3,
          cursor: "pointer",
        }}
      >
        Opponent Teams{" "}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", mx: 2 }}>
        <Button
          variant="contained"
          sx={{ m: 2, px: 2, borderRadius: 3 }}
          onClick={() => {
            history.back();
          }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          sx={{ m: 2 }}
          onClick={() => {
            setOpen(true);
            setId(0);
          }}
        >
          <AddIcon sx={{ fontSize: "1.5rem" }} />
        </Button>
      </Box>
      {data.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "1300px",
            mx: "auto",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              mx: 2,
            }}
          >
            {data.map((d, index) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: { xs: "100%", sm: "80%", md: "40%" },
                    m: 1,
                    p: 1,
                    bgcolor: "info.main",
                    borderRadius: 5,
                  }}
                  key={d.id}
                >
                  <Box
                    sx={{
                      width: "80%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        width: "fit-content",
                        fontSize: { xs: "0.8rem", sm: "1rem" },
                      }}
                    >
                      {d.name.toUpperCase()}
                    </Typography>
                    <Box sx={{ width: 50, height: 50 }}>
                      <Box
                        component="img"
                        src={d.assetUrl || ""}
                        sx={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                        }}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "100px",
                      display: "flex",
                    }}
                  >
                    <Button
                      onClick={() => {
                        setId(d.id);
                        setOpen(true);
                      }}
                      sx={{ width: "20px" }}
                      size="small"
                    >
                      <EditIcon
                        sx={{
                          fontSize: { xs: "1rem", sm: "1.3rem" },
                          color: "primary.main",
                        }}
                      />
                    </Button>
                    <Button
                      onClick={() => {
                        handleDeleteOpponentTeam(d.id);
                      }}
                      sx={{ width: "20px" }}
                      size="small"
                    >
                      <DeleteForeverIcon
                        sx={{
                          fontSize: { xs: "1rem", sm: "1.3rem" },
                          color: "success.main",
                        }}
                      />
                    </Button>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            minHeight: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "1.5rem", color: "success.main" }}>
            There is no team...!
          </Typography>
        </Box>
      )}
      <NewOpponentTeam open={open} setOpen={setOpen} id={id as number} />
    </Box>
  );
};
export default OpponentTeam;
