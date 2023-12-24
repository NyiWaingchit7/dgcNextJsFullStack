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
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
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
              justifyContent: "flex-start",
              flexWrap: "wrap",
              mx: 3,
            }}
          >
            {data.map((d, index) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: { xs: "80%", md: "25%" },
                    m: 2,
                    p: 2,
                    bgcolor: "info.main",
                    borderRadius: 5,
                  }}
                  key={d.id}
                >
                  <Typography>
                    {index + 1} - {d.name}
                  </Typography>
                  <Box>
                    <Button
                      onClick={() => {
                        setId(d.id);
                        setOpen(true);
                      }}
                    >
                      <EditIcon
                        sx={{ fontSize: "1.5rem", color: "primary.main" }}
                      />
                    </Button>
                    <Button
                      onClick={() => {
                        handleDeleteOpponentTeam(d.id);
                      }}
                    >
                      <DeleteForeverIcon
                        sx={{ fontSize: "1.5rem", color: "success.main" }}
                      />
                    </Button>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      ) : (
        <Box>
          <Typography>There is no team</Typography>
        </Box>
      )}
      <NewOpponentTeam open={open} setOpen={setOpen} id={id as number} />
    </Box>
  );
};
export default OpponentTeam;
