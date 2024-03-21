import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchAppData } from "@/store/slice/appSlice";
import { createEvent, updateEvent } from "@/store/slice/eventSlice";
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

  const onSuccess = () => {
    setOpen(false);
    dispatch(fetchAppData());
  };
  const handleCreateEvent = () => {
    dispatch(createEvent({ ...data, onSuccess }));
  };
  const handleUpdateEvent = () => {
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
                defaultChecked={data.ended || false}
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
              disabled={!data.description || !data.description}
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
