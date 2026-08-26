import { Typography } from "@mui/material";

export const SectionTitle = ({ children, icon, variant = "h6" }) => (
  <Typography
    variant={variant}
    component="h2"
    sx={{ mt: 3, mb: 2, fontWeight: 700 }}
  >
    {icon ? `${icon} ` : ""}
    {children}
  </Typography>
);
