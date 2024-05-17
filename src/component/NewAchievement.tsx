import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  createAchievement,
  updateAchievement,
} from "@/store/slice/achievementSlice";
import { fetchAppData } from "@/store/slice/appSlice";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FileDropZone from "./FileDropZone";
import { fileUpload } from "@/utils/fileUpload";
interface Props {
  open: boolean;
  setOpen: (data: boolean) => void;
  id?: number;
}
interface DefaultAchievement {
  year: number;
  //asseurl
}
const defaultAchievement: DefaultAchievement = {
  year: 0,
};
const NewAchievement = ({ open, setOpen, id }: Props) => {
  const [achievementData, setAchievementData] =
    useState<DefaultAchievement>(defaultAchievement);
  const [buttonLoad, setButtonLoad] = useState(false);
  const dispatch = useAppDispatch();
  const allAchievement = useAppSelector((store) => store.achievement.items);
  const [image, setImage] = useState<File>();
  const onFileSelected = (files: File[]) => {
    setImage(files[0]);
  };
  const onSuccess = () => {
    dispatch(fetchAppData());
    setOpen(false);
    setAchievementData(defaultAchievement);
    setImage(undefined);
    setButtonLoad(false);
  };
  const handleCreateAchievement = async () => {
    setButtonLoad(true);
    let assetUrl;
    if (image) {
      assetUrl = await fileUpload(image);
    }
    dispatch(createAchievement({ ...achievementData, assetUrl, onSuccess }));
  };
  const handleUpdateAchievement = async () => {
    setButtonLoad(true);
    let assetUrl;
    if (image) {
      assetUrl = await fileUpload(image);
    }
    dispatch(
      updateAchievement({
        id: id as number,
        ...achievementData,
        assetUrl,
        onSuccess,
      })
    );
  };
  useEffect(() => {
    if (id) {
      const intialData = allAchievement.find(
        (d) => d.id === id
      ) as DefaultAchievement;
      setAchievementData(intialData);
    } else {
      setAchievementData(defaultAchievement);
    }
  }, [open, allAchievement]);
  return (
    <Box>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{id ? "Updating" : "Creating"}</DialogTitle>
        <DialogContent
          sx={{
            mt: 2,
            display: "flext",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ mt: 2 }}
            fullWidth
            autoFocus
            required
            label="Year"
            placeholder="Year"
            type="number"
            defaultValue={achievementData.year ? achievementData.year : ""}
            onChange={(e) =>
              setAchievementData({
                ...achievementData,
                year: Number(e.target.value),
              })
            }
          />

          <FormControl fullWidth>
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
              setAchievementData(defaultAchievement);
              setImage(undefined);
            }}
            variant="contained"
            color="success"
            sx={{ m: 1 }}
          >
            Cancle
          </Button>
          {id ? (
            <Button
              onClick={handleUpdateAchievement}
              variant="contained"
              color="primary"
              sx={{ m: 1 }}
              disabled={!achievementData.year || buttonLoad}
            >
              Update {buttonLoad && <CircularProgress size={15} />}
            </Button>
          ) : (
            <Button
              onClick={handleCreateAchievement}
              variant="contained"
              color="primary"
              sx={{ m: 1 }}
              disabled={!achievementData.year || buttonLoad}
            >
              Comfirm {buttonLoad && <CircularProgress size={15} />}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default NewAchievement;
