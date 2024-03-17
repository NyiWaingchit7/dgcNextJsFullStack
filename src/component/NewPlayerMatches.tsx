import { useAppDispatch } from "@/store/hooks";
import { fetchAppData } from "@/store/slice/appSlice";
import { updatePlayerMatches } from "@/store/slice/playerMatchesSlice";
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
import { PlayerMatches } from "@prisma/client";
import { useEffect, useState } from "react";

interface Props {
  data: PlayerMatches;
  open: boolean;
  setOpen: (data: boolean) => void;
}
const PlayerMatches = ({ open, setOpen, data }: Props) => {
  const [result, setResult] = useState<PlayerMatches>(data);
  const dispatch = useAppDispatch();
  const handleUpdatePlayerMatches = () => {
    dispatch(
      updatePlayerMatches({
        ...result,
        onSuccess: () => {
          dispatch(fetchAppData());
          setOpen(false);
        },
      })
    );
  };
  return (
    <Box>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>Add Matches Result</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            autoFocus
            required
            label="Win"
            type="number"
            sx={{ m: 1 }}
            placeholder="Win"
            defaultValue={data.win ? data.win : ""}
            onChange={(e) => {
              setResult({ ...result, win: Number(e.target.value) });
            }}
          />
          <TextField
            required
            label="Draw"
            type="number"
            sx={{ m: 1 }}
            placeholder="Draw"
            defaultValue={data.draw ? data.draw : ""}
            onChange={(e) => {
              setResult({ ...result, draw: Number(e.target.value) });
            }}
          />
          <TextField
            required
            label="Lose"
            type="number"
            sx={{ m: 1 }}
            placeholder="Lose"
            defaultValue={data.lose ? data.lose : ""}
            onChange={(e) => {
              setResult({ ...result, lose: Number(e.target.value) });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            variant="contained"
            color="success"
            sx={{ m: 1 }}
          >
            Cancle
          </Button>
          <Button
            variant="contained"
            sx={{ m: 1 }}
            onClick={handleUpdatePlayerMatches}
          >
            Comfirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default PlayerMatches;
