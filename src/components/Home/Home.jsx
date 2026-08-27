import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Container,
  useTheme,
} from "@mui/material";

import TerminalIcon from "@mui/icons-material/Terminal";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const projectInfo = `React notebook - это небольшое приложение, разработанное с использованием библиотеки React, предназначенное для создания интерактивного конспекта по основным темам и концепциям React. Проект включает в себя несколько основных разделов, каждый из которых раскрывает определённые аспекты работы с React, такие как компоненты, управление состоянием, роутинг и оптимизация производительности.`;

const tools = [
  {
    name: "React и react-dom",
    description:
      "Ключевые библиотеки, используемые для создания пользовательских интерфейсов.",
    color: "#61DAFB",
  },
  {
    name: "Vite",
    description:
      "Сборщик, обеспечивающий высокую скорость разработки и сборки проекта.",
    color: "#646CFF",
  },
  {
    name: "MUI",
    description:
      "Компонентная библиотека, предлагающая современный и эстетически привлекательный интерфейс.",
    color: "#007FFF",
  },

  {
    name: "CodeMirror",
    description:
      "Компонент для интеграции CodeMirror в приложение, обеспечивающий визуализацию примеров кода.",
    color: "#D97706",
  },
];

export const Home = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Box sx={{ display: "inline-flex", alignItems: "center", mb: 2 }}>
          <RocketLaunchIcon
            fontSize="large"
            sx={{ color: theme.palette.primary.main, mr: 1 }}
          />
          <Typography
            variant="h3"
            component="h1"
            fontWeight={700}
            sx={{
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            React Notebook
          </Typography>
        </Box>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 1000, mx: "auto", mb: 2 }}
        >
          {projectInfo}
        </Typography>

        <Chip
          label="📢 Интерактивный конспект по React"
          color="primary"
          variant="outlined"
          sx={{ mb: 1 }}
        />
      </Box>

      <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3 }}>
        📢 Основные инструменты проекта
      </Typography>

      <Grid container spacing={2} columns={1}>
        {tools.map((tool) => (
          <Grid size={5} xs={12} sm={6} md={4} key={tool.name}>
            <Card
              sx={{
                bgcolor: theme.palette.background.paper,
                border: "1px solid",
                borderColor: theme.palette.divider,
                transition: "transform 0.2s, boxShadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: theme.shadows[6],
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    mb: 1,
                    width: "25%",
                  }}
                >
                  <TerminalIcon sx={{ color: tool.color, fontSize: 28 }} />
                  <Typography variant="h6" component="h3" fontWeight={600}>
                    {tool.name}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {tool.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
