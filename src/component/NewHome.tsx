import { useAppDispatch } from "@/store/hooks";
import { createHomeText, updateHomeText } from "@/store/slice/homeSlice";
import {
  Box,
  Button,
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
  const dispatch = useAppDispatch();

  const handleCreateHomeText = () => {
    dispatch(
      createHomeText({
        description: text,
        onSuccess: () => {
          setOpen(false), setText("");
        },
      })
    );
  };
  const handleUpdateHomeText = () => {
    dispatch(
      updateHomeText({
        id,
        description: text,
        onSuccess: () => {
          setOpen(false), setText("");
        },
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
              disabled={text ? false : true}
              onClick={handleUpdateHomeText}
            >
              Update
            </Button>
          ) : (
            <Button
              variant="contained"
              disabled={text ? false : true}
              onClick={handleCreateHomeText}
            >
              Save
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default NewHome;
