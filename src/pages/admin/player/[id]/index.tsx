import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

const PlayerDetail = () => {
  const router = useRouter();
  const id = Number(router.query.id);
  return (
    <Box>
      <Typography>This player {id}</Typography>
    </Box>
  );
};
export default PlayerDetail;
