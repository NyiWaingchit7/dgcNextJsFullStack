import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  createAchievement,
  updateAchievement,
} from "@/store/slice/achievementSlice";
import { fetchAppData } from "@/store/slice/appSlice";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
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
  const dispatch = useAppDispatch();
  const allAchievement = useAppSelector((store) => store.achievement.items);
  const onSuccess = () => {
    dispatch(fetchAppData());
    setOpen(false);
    setAchievementData(defaultAchievement);
  };
  const handleCreateAchievement = () => {
    dispatch(createAchievement({ ...achievementData, onSuccess }));
  };
  const handleUpdateAchievement = () => {
    dispatch(
      updateAchievement({ id: id as number, ...achievementData, onSuccess })
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
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
              setAchievementData(defaultAchievement);
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
              disabled={!achievementData.year}
            >
              Update
            </Button>
          ) : (
            <Button
              onClick={handleCreateAchievement}
              variant="contained"
              color="primary"
              sx={{ m: 1 }}
              disabled={!achievementData.year}
            >
              Comfirm
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default NewAchievement;
