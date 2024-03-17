import { useAppDispatch } from "@/store/hooks";
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
import React, { useState } from "react";
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
  const onSuccess = () => {
    dispatch(fetchAppData());
    setOpen(false);
    setAchievementData(defaultAchievement);
  };
  const handleCreateAchievement = () => {
    dispatch(createAchievement({ ...achievementData, onSuccess }));
  };
  return (
    <Box>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Achievement</DialogTitle>
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
            onChange={(e) =>
              setAchievementData({
                ...achievementData,
                year: Number(e.target.value),
              })
            }
          />
          <TextField
            sx={{ mt: 2 }}
            autoFocus
            required
            label="Description"
            placeholder="Description"
            type="text"
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
