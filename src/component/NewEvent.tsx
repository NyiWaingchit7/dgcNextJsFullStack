import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
interface Props {
  open: boolean;
  setOpen: (data: boolean) => void;
  id?: number;
}
const NewEvent = ({ open, setOpen, id }: Props) => {
  return (
    <Box>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{id ? "Updating" : "Creating"}</DialogTitle>
        <DialogContent
          sx={{
            mt: 2,
          }}
        ></DialogContent>
        <DialogActions>
          <Button
            // onClick={() => {
            //   setOpen(false);
            //   setAchievementData(defaultAchievement);
            // }}
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
              //   onClick={handleCreateAchievement}
              variant="contained"
              color="primary"
              sx={{ m: 1 }}
              //   disabled={!achievementData.year}
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
