import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { createAchievement } from "@/store/slice/achievementSlice";
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
  description: string;
}
const defaultAchievement: DefaultAchievement = {
  year: 0,
  description: "",
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
  useEffect(() => {
    if (id) {
      const intialData = allAchievement.find(
        (d) => d.id === id
      ) as DefaultAchievement;
      setAchievementData(intialData);
    } else {
      setAchievementData(defaultAchievement);
    }
  }, [id, open]);
  return (
    <Box>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{id ? "Updating" : "Creating"}</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
          }}
        >
          <TextField
            sx={{ mt: 2 }}
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
          <TextField
            rows={3}
            multiline
            sx={{ mt: 2 }}
            autoFocus
            required
            label="Description"
            placeholder="Description"
            type="text"
            defaultValue={achievementData.description}
            onChange={(e) =>
              setAchievementData({
                ...achievementData,
                description: e.target.value,
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
          <Button
            onClick={handleCreateAchievement}
            variant="contained"
            color="primary"
            sx={{ m: 1 }}
            disabled={!achievementData.year || !achievementData.description}
          >
            Comfirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default NewAchievement;
