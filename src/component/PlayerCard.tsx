import { Box, Typography } from "@mui/material";
import { Role } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/router";

interface prop {
  id: number;
  name: string;
  assetUrl?: string;
  role?: string;
  head?: string;
}

const PlayerCard = ({ id, name, role, assetUrl, head }: prop) => {
  const router = useRouter();
  const path = router.pathname.includes("user");
  const toPath = path ? `/user/player/${id}` : `/admin/player${id}`;
  return (
    <Link href={toPath} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          width: "100%",
          height: {
            xs: "125px",
            sm: "150px",
            md: "200px",
            lg: "250px",
          },

          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          bgcolor: "primary.dark",
        }}
      >
        <Box
          component="img"
          src={assetUrl || `../unknown.png`}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            backgroundImage: "url(../Red_Dragon.png)",
            backgroundPosition: "center",
            backgroundSize: "70%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "primary.main",
          width: "100%",
          bgcolor: "info.main",
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "0.7rem", sm: "1rem" },
            fontWeight: "bold",
            mb: 1,
            mt: role ? 1 : 0,
          }}
        >
          {name}
        </Typography>
        {role && (
          <Typography
            sx={{
              fontSize: { xs: "0.7rem", sm: "1rem" },
              fontWeight: "bold",
              mb: 1,
              p: 1,
              bgcolor: "success.main",
              color: "info.main",
              borderRadius: 2,
            }}
          >
            {role}
          </Typography>
        )}
      </Box>
    </Link>
  );
};
export default PlayerCard;
