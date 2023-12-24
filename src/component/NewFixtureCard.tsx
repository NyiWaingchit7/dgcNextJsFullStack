import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchAppData } from "@/store/slice/appSlice";
import {
  createOpponentTeam,
  updateOpponentTeam,
} from "@/store/slice/opponentTeamSlice";

import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { OpponentTeam, PlayerMatches } from "@prisma/client";
import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  setOpen: (data: boolean) => void;
  id: number;
}
const NewOpponentTeam = ({ open, setOpen, id }: Props) => {
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();
  const data = useAppSelector((store) => store.opponentTeam.items);
  //   const handleCreateOpponentTeam = () => {
  //     dispatch(
  //       createOpponentTeam({
  //         name,
  //         onSuccess: () => {
  //           dispatch(fetchAppData());
  //           setOpen(false);
  //         },
  //       })
  //     );
  //   };
  //   const handleUpdateOpponentTeam = () => {
  //     dispatch(
  //       updateOpponentTeam({
  //         id,
  //         name,
  //         onSuccess: () => {
  //           dispatch(fetchAppData());
  //           setOpen(false);
  //         },
  //       })
  //     );
  //   };
  //   useEffect(() => {
  //     console.log(id);

  //     if (id) {
  //       const teamName = data.find((d) => d.id === id)?.name as string;
  //       console.log(teamName);

  //       setName(teamName);
  //     } else {
  //       setName("");
  //     }
  //   }, [id, open]);

  return (
    <Box>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DialogTitle>Add New Opponent Team</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ m: 1 }}
            placeholder="New Opponent Team"
            value={name ? name : ""}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            variant="contained"
            sx={{ m: 1 }}
          >
            Cancle
          </Button>

          <Button variant="contained" sx={{ m: 1 }} disabled={!name}>
            Update
          </Button>

          <Button variant="contained" sx={{ m: 1 }} disabled={!name}>
            Comfirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default NewOpponentTeam;
