import { Box, Typography } from "@mui/material";

export const TextBlock = ({ children, icon }) => (
  <Box sx={{ mb: 3 }}>
    <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
      {icon && (
        <Box component="span" sx={{ mr: 1 }}>
          {icon}
        </Box>
      )}
      {children}
    </Typography>
  </Box>
);
