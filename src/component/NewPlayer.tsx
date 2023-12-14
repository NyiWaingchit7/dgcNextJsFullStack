import { useAppDispatch } from "@/store/hooks";
import { fetchAppData } from "@/store/slice/appSlice";
import { createPlayer } from "@/store/slice/playersSlice";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Head, Role } from "@prisma/client";
import { useState } from "react";

import { text } from "stream/consumers";
interface Props {
  open: boolean;
  setOpen: (data: boolean) => void;
}
interface DefaultPlayer {
  name: string;
  age: number;
  city: string;
  joinDate: number;
}
const defaultPlayer = {
  name: "",
  age: 0,
  city: "",
  joinDate: 0,
};

const NewPlayers = ({ open, setOpen }: Props) => {
  const [role, setRole] = useState<Role>(Role.PLAYER);
  const [head, setHead] = useState<Head | string>("");
  const [player, setPlayer] = useState<DefaultPlayer>(defaultPlayer);
  const dispatch = useAppDispatch();
  const handleCreatePlayer = () => {
    dispatch(
      createPlayer({
        ...player,
        role,
        head,
        onSuccess: () => {
          dispatch(fetchAppData());
          setOpen(false);
          setPlayer(defaultPlayer);
        },
      })
    );
  };

  return (
    <Box>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
          setPlayer(defaultPlayer);
        }}
      >
        <DialogTitle sx={{ mb: 3 }}>Add New Player</DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
          >
            <TextField
              sx={{ width: { xs: "90%", sm: "40%" }, m: 2 }}
              placeholder="Name"
              onChange={(e) => setPlayer({ ...player, name: e.target.value })}
            />
            <TextField
              type="number"
              sx={{ width: { xs: "90%", sm: "40%" }, m: 2 }}
              placeholder="Age"
              onChange={(e) =>
                setPlayer({ ...player, age: Number(e.target.value) })
              }
            />
            <TextField
              sx={{ width: { xs: "90%", sm: "40%" }, m: 2 }}
              placeholder="City"
              onChange={(e) => setPlayer({ ...player, city: e.target.value })}
            />
            <TextField
              type="number"
              sx={{ width: { xs: "90%", sm: "40%" }, m: 2 }}
              placeholder="Join Date"
              onChange={(e) =>
                setPlayer({ ...player, joinDate: Number(e.target.value) })
              }
            />
            <Box sx={{ width: { xs: "90%", sm: "40%" }, m: 2 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={role}
                  label="Role"
                  onChange={(e) => setRole(e.target.value as Role)}
                >
                  <MenuItem value={Role.PLAYER}>Player</MenuItem>
                  <MenuItem value={Role.CAPTAIN}>Captain</MenuItem>
                  <MenuItem value={Role.V_CAPTAIN}>V_Captain</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ width: { xs: "90%", sm: "40%" }, m: 2 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Head</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={head}
                  label="Role"
                  onChange={(e) => setHead(e.target.value as Head)}
                >
                  <MenuItem value={""}>None of them</MenuItem>
                  <MenuItem value={Head.MANAGER}>Manager</MenuItem>
                  <MenuItem value={Head.FOUNDER}>Founder</MenuItem>
                  <MenuItem value={Head.CO_FOUNDER}>Co-Founder</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button
            variant="contained"
            onClick={() => {
              setOpen(false);
              setPlayer(defaultPlayer);
            }}
          >
            Cancle
          </Button>

          <Button
            variant="contained"
            disabled={
              !player.name || !player.age || !player.city || !player.joinDate
                ? true
                : false
            }
            onClick={handleCreatePlayer}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default NewPlayers;
