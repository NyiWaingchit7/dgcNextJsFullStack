import { useAppDispatch } from "@/store/hooks";
import { fetchAppData } from "@/store/slice/appSlice";
import { createPlayer, updatePlayer } from "@/store/slice/playersSlice";
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
import { Head, Player, Role } from "@prisma/client";
import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  setOpen: (data: boolean) => void;
  playerData?: Player;
}
interface DefaultPlayer {
  name: string;
  age: number;
  city: string;
  joinDate: number;
  role?: Role;
  head?: Head | string;
}
const defaultPlayer = {
  name: "",
  age: 0,
  city: "",
  joinDate: 0,
};

const NewPlayers = ({ open, setOpen, playerData }: Props) => {
  const [role, setRole] = useState<Role>(Role.PLAYER);
  const [player, setPlayer] = useState<DefaultPlayer>(defaultPlayer);
  const [head, setHead] = useState<Head | string>("");
  const dispatch = useAppDispatch();

  const handleCreatePlayer = () => {
    console.log(player);

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
  const handleUpdatePlayer = () => {
    dispatch(
      updatePlayer({
        ...player,
        role: role,
        head: head,
        id: playerData?.id as number,
        onSuccess: () => {
          dispatch(fetchAppData());
          setOpen(false);
          setPlayer(defaultPlayer);
        },
      })
    );
  };
  useEffect(() => {
    if (playerData) {
      setPlayer(playerData as DefaultPlayer);
      setHead(playerData.head as Head);
      setRole(playerData.role as Role);
    } else {
      setPlayer(defaultPlayer as DefaultPlayer);
    }
  }, [open]);

  return (
    <Box>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
          setPlayer(defaultPlayer);
        }}
      >
        <DialogTitle sx={{ mb: 3 }}>
          {playerData ? "Update Player" : "Add New Player"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
          >
            <TextField
              defaultValue={player.name}
              sx={{ width: { xs: "90%", sm: "40%" }, m: 2 }}
              placeholder="Name"
              onChange={(e) => setPlayer({ ...player, name: e.target.value })}
            />
            <TextField
              defaultValue={player.age ? player.age : ""}
              type="number"
              sx={{ width: { xs: "90%", sm: "40%" }, m: 2 }}
              placeholder="Age"
              onChange={(e) =>
                setPlayer({ ...player, age: Number(e.target.value) })
              }
            />
            <TextField
              defaultValue={player.city}
              sx={{ width: { xs: "90%", sm: "40%" }, m: 2 }}
              placeholder="City"
              onChange={(e) => setPlayer({ ...player, city: e.target.value })}
            />
            <TextField
              defaultValue={player.joinDate ? player.joinDate : ""}
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
                  value={head || null || ""}
                  label="Role"
                  onChange={(e) => setHead(e.target.value as Head)}
                >
                  <MenuItem value="">None of them</MenuItem>
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
            color="success"
          >
            Cancle
          </Button>

          {playerData ? (
            <Button
              variant="contained"
              disabled={
                !player.name || !player.age || !player.city || !player.joinDate
                  ? true
                  : false
              }
              onClick={handleUpdatePlayer}
            >
              Update
            </Button>
          ) : (
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
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default NewPlayers;
