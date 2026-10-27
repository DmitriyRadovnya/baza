import { CircularProgress, Box } from "@mui/material";

export const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "20vh",
        gap: 2,
      }}
    >
      <CircularProgress size={60} thickness={4} />
    </Box>
  );
};
