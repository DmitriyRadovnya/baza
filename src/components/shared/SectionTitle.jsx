import { Typography } from "@mui/material";

export const SectionTitle = ({ children, icon }) => (
  <Typography
    variant="h6"
    component="h2"
    sx={{ mt: 4, mb: 2, fontWeight: 700 }}
  >
    {icon ? `${icon} ` : ""}
    {children}
  </Typography>
);
