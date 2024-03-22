import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchAppData } from "@/store/slice/appSlice";
import { createFixture, updateFixture } from "@/store/slice/fixtureSlice";
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
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  CircularProgress,
} from "@mui/material";

import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  setOpen: (data: boolean) => void;
  id?: number;
}
const NewOpponentTeam = ({ open, setOpen, id }: Props) => {
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();
  const data = useAppSelector((store) => store.opponentTeam.items);
  const fixtureData = useAppSelector((store) => store.fixture.items);
  const defaultOpponenTeam = fixtureData.find(
    (d) => d.id === id
  )?.opponentTeamId;
  const [value, setValue] = useState<number>();
  const [result, setResult] = useState({
    myTeamResult: 0,
    opponentTeamResult: 0,
  });
  const [buttonLoad, setButtonLoad] = useState(false);
  const onSuccess = () => {
    dispatch(fetchAppData());
    setOpen(false);
    setValue(undefined);
    setButtonLoad(false);
  };
  const handleCreatFixture = () => {
    setButtonLoad(true);
    dispatch(
      createFixture({
        opponentTeamId: value as number,
        onSuccess,
      })
    );
  };
  const handleUpdateFixture = () => {
    setButtonLoad(true);
    dispatch(
      updateFixture({
        id: id as number,
        opponentTeamId: value as number,
        myTeamResult: result.myTeamResult,
        opponentTeamResult: result.opponentTeamResult,
        onSuccess,
      })
    );
  };
  useEffect(() => {
    if (id) {
      setValue(defaultOpponenTeam);
    }
  }, [open]);

  return (
    <Box>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
          setValue(undefined);
        }}
      >
        <DialogTitle>Add New Fixture</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
            <InputLabel id="demo-simple-select-label">Opponent Team</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value || ""}
              defaultValue={defaultOpponenTeam}
              label="Opponent Team"
              onChange={(e) => setValue(e.target.value as number)}
              disabled={id ? true : false}
            >
              {data.map((d) => (
                <MenuItem key={d.id} value={d.id}>
                  {d.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {id && (
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                autoFocus
                required
                label="My Team Rresult"
                type="number"
                placeholder="My Team Rresult"
                sx={{ mb: 2 }}
                onChange={(e) =>
                  setResult({ ...result, myTeamResult: Number(e.target.value) })
                }
              />
              <TextField
                type="number"
                required
                label="Opponent Team Rresult"
                placeholder="Opponent Team Rresult"
                sx={{ mb: 2 }}
                onChange={(e) =>
                  setResult({
                    ...result,
                    opponentTeamResult: Number(e.target.value),
                  })
                }
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
              setValue(undefined);
            }}
            variant="contained"
            color="success"
            sx={{ m: 1 }}
          >
            Cancle
          </Button>

          {id ? (
            <Button
              variant="contained"
              sx={{ m: 1 }}
              disabled={!value || buttonLoad}
              onClick={handleUpdateFixture}
            >
              Update {buttonLoad && <CircularProgress size={15} />}
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{ m: 1 }}
              disabled={!value || buttonLoad}
              onClick={handleCreatFixture}
            >
              Comfirm {buttonLoad && <CircularProgress size={15} />}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default NewOpponentTeam;
