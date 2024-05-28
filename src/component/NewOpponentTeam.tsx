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
  CircularProgress,
  FormControl,
  Chip,
} from "@mui/material";
import { OpponentTeam, PlayerMatches } from "@prisma/client";
import { useEffect, useState } from "react";
import FileDropZone from "./FileDropZone";
import { fileUpload } from "@/utils/fileUpload";

interface Props {
  open: boolean;
  setOpen: (data: boolean) => void;
  id: number;
}
const NewOpponentTeam = ({ open, setOpen, id }: Props) => {
  const [name, setName] = useState("");
  const [buttonLoad, setButtonLoad] = useState(false);
  const [image, setImage] = useState<File>();
  const onFileSelected = (files: File[]) => {
    setImage(files[0]);
  };

  const dispatch = useAppDispatch();
  const data = useAppSelector((store) => store.opponentTeam.items);
  const onSuccess = () => {
    dispatch(fetchAppData());
    setButtonLoad(false);
    setOpen(false);
    setImage(undefined);
  };
  const handleCreateOpponentTeam = async () => {
    setButtonLoad(true);
    let assetUrl;
    if (image) {
      assetUrl = await fileUpload(image);
    }
    dispatch(
      createOpponentTeam({
        name,
        assetUrl,
        onSuccess,
      })
    );
  };
  const handleUpdateOpponentTeam = async () => {
    setButtonLoad(true);
    let assetUrl;
    if (image) {
      assetUrl = await fileUpload(image);
    }
    dispatch(
      updateOpponentTeam({
        id,
        name,
        assetUrl,
        onSuccess,
      })
    );
  };
  useEffect(() => {
    if (id) {
      const teamName = data.find((d) => d.id === id)?.name as string;

      setName(teamName);
    } else {
      setName("");
    }
  }, [id, open]);

  return (
    <Box>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DialogTitle>
          {id ? "Update Opponent Team" : "Add New Opponent Team"}
        </DialogTitle>
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
            autoFocus
            required
            label="New Opponent Team"
            value={name ? name : ""}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <FormControl>
            <Box sx={{ mt: 2 }}>
              <FileDropZone onFileSelected={onFileSelected} />
              {image && (
                <Chip
                  sx={{ mt: 2 }}
                  label={image.name}
                  onDelete={() => setImage(undefined)}
                />
              )}
            </Box>
          </FormControl>
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
          {id ? (
            <Button
              variant="contained"
              sx={{ m: 1 }}
              disabled={!name || buttonLoad}
              onClick={handleUpdateOpponentTeam}
            >
              Update {buttonLoad && <CircularProgress size={15} />}
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{ m: 1 }}
              disabled={!name || buttonLoad}
              onClick={handleCreateOpponentTeam}
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
