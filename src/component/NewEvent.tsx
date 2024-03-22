import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchAppData } from "@/store/slice/appSlice";
import { createEvent, updateEvent } from "@/store/slice/eventSlice";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Switch,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
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
  const allEvents = useAppSelector((store) => store.event.items);
  const eventData = allEvents.find((d) => d.id === id) as DefaultEvent;
  const [buttonLoad, setButtonLoad] = useState(false);
  const onSuccess = () => {
    setOpen(false);
    dispatch(fetchAppData());
    setButtonLoad(false);
  };
  const handleCreateEvent = () => {
    setButtonLoad(true);
    dispatch(createEvent({ ...data, onSuccess }));
  };
  const handleUpdateEvent = () => {
    setButtonLoad(true);
    dispatch(
      updateEvent({
        id: id as number,
        ...data,
        onSuccess,
      })
    );
  };
  useEffect(() => {
    if (id) {
      setData(eventData);
    } else {
      setData(defaultEvent);
    }
  }, [open, allEvents]);
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
            defaultValue={data?.title}
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
            defaultValue={data?.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
          <FormControlLabel
            control={
              <Switch
                checked={data.ended}
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
              onClick={handleUpdateEvent}
              variant="contained"
              color="primary"
              sx={{ m: 1 }}
              disabled={!data.description || !data.description || buttonLoad}
            >
              Update
            </Button>
          ) : (
            <Button
              onClick={handleCreateEvent}
              variant="contained"
              color="primary"
              sx={{ m: 1 }}
              disabled={!data.description || !data.description || buttonLoad}
            >
              Comfirm {buttonLoad && <CircularProgress size={15} />}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default NewEvent;
