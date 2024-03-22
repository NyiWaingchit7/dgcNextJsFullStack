import { useAppDispatch } from "@/store/hooks";
import { fetchAppData } from "@/store/slice/appSlice";
import { createHomeText, updateHomeText } from "@/store/slice/homeSlice";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { useState } from "react";
interface Props {
  open: boolean;
  setOpen: (data: boolean) => void;
  updateText?: string;
  id: number;
}
const NewHome = ({ open, setOpen, updateText, id }: Props) => {
  const [text, setText] = useState("");
  const [buttonLoad, setButtonLoad] = useState(false);

  const dispatch = useAppDispatch();
  const onSuccess = () => {
    setOpen(false), setText("");
    dispatch(fetchAppData());
    setButtonLoad(false);
  };

  const handleCreateHomeText = () => {
    setButtonLoad(true);
    dispatch(
      createHomeText({
        description: text,
        onSuccess,
      })
    );
  };
  const handleUpdateHomeText = () => {
    setButtonLoad(true);
    dispatch(
      updateHomeText({
        id,
        description: text,
        onSuccess,
      })
    );
  };
  return (
    <Box>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle sx={{ mb: 3 }}>Write New texts</DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              width: { xs: "250px", sm: "350px" },
              mb: 3,
            }}
          >
            <TextareaAutosize
              defaultValue={updateText ? updateText : text}
              minRows={5}
              style={{
                width: "100%",
                fontFamily: "IBM Plex Sans",
                fontSize: "1rem",
                lineHeight: 1.3,
              }}
              onChange={(evt) => {
                setText(evt.target.value);
              }}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              setOpen(false);
              setText("");
            }}
          >
            Cancle
          </Button>
          {updateText ? (
            <Button
              variant="contained"
              disabled={text ? false : true || buttonLoad}
              onClick={handleUpdateHomeText}
            >
              Update {buttonLoad && <CircularProgress size={15} />}
            </Button>
          ) : (
            <Button
              variant="contained"
              disabled={text ? false : true || buttonLoad}
              onClick={handleCreateHomeText}
            >
              Save {buttonLoad && <CircularProgress size={15} />}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default NewHome;
