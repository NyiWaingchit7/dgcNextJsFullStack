import { useAppDispatch } from "@/store/hooks";
import { fetchAppData } from "@/store/slice/appSlice";
import { createEvent } from "@/store/slice/eventSlice";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Switch,
  TextField,
} from "@mui/material";
import { useState } from "react";
interface Props {
  open: boolean;
  setOpen: (data: boolean) => void;
  id?: number;
}
interface DefaultEvent {
  title: string;
  description: string;
  ended?: boolean;
}
const defaultEvent: DefaultEvent = {
  title: "",
  description: "",
  ended: false,
};
const NewEvent = ({ open, setOpen, id }: Props) => {
  const [data, setData] = useState(defaultEvent);
  const dispatch = useAppDispatch();
  const onSuccess = () => {
    setOpen(false);
    dispatch(fetchAppData());
  };
  const handleCreateEvent = () => {
    dispatch(createEvent({ ...data, onSuccess }));
  };
  return (
    <Box>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{id ? "Updating" : "Creating"}</DialogTitle>
        <DialogContent
          sx={{
            mt: 2,
          }}
        >
          <TextField
            sx={{ mt: 2 }}
            required
            type="text"
            autoFocus
            placeholder="Title"
            label="Title"
            fullWidth
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
          <TextField
            sx={{ mt: 2 }}
            rows={5}
            multiline
            required
            type="text"
            placeholder="Description"
            label="Description"
            fullWidth
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
          <FormControlLabel
            control={
              <Switch
                onChange={(evt, value) => setData({ ...data, ended: value })}
              />
            }
            label="Ended"
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
              setData(defaultEvent);
            }}
            variant="contained"
            color="success"
            sx={{ m: 1 }}
          >
            Cancle
          </Button>
          {id ? (
            <Button
              //   onClick={handleUpdateAchievement}
              variant="contained"
              color="primary"
              sx={{ m: 1 }}
              //   disabled={!achievementData.year}
            >
              Update
            </Button>
          ) : (
            <Button
              onClick={handleCreateEvent}
              variant="contained"
              color="primary"
              sx={{ m: 1 }}
              disabled={!data.description || !data.description}
            >
              Comfirm
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default NewEvent;
