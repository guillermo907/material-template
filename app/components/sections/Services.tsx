import { Typography, Box, Button, Stack } from "@mui/material";
import { Grid, Paper, Avatar } from "@mui/material";
import WebIcon from "@mui/icons-material/Web";
import BuildIcon from "@mui/icons-material/Build";
import CodeIcon from "@mui/icons-material/Code";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import BalanceRoundedIcon from "@mui/icons-material/BalanceRounded";
import HighlightIcon from "@mui/icons-material/Highlight";
import { wrap } from "module";

const iconSize = "4rem";
const services = [
  {
    title: "Website Design",
    description: "Beautiful and user-friendly website design.",
    icon: <WebIcon style={{ fontSize: iconSize }} color="primary" />,
  },
  {
    title: "Custom Functionality",
    description: "Tailored functionality to meet your unique needs.",
    icon: <BuildIcon style={{ fontSize: iconSize }} color="secondary" />,
  },
  {
    title: "Software Development",
    description: "End-to-end software development solutions.",
    icon: <CodeIcon style={{ fontSize: iconSize }} color="primary" />,
  },
  {
    title: "Details where you need them",
    description: "Keep a detailed record of your appointments.",
    icon: (
      <AutoStoriesRoundedIcon
        style={{ fontSize: iconSize }}
        color="secondary"
      />
    ),
  },
  {
    title: "Balance out",
    description: "Balance tech with the way you do things",
    icon: <BalanceRoundedIcon style={{ fontSize: iconSize }} color="primary" />,
  },
  {
    title: "Show them the way",
    description: "Show you customers the way to your buisness",
    icon: <HighlightIcon style={{ fontSize: iconSize }} color="secondary" />,
  },
  // Add more services as needed
];

const Services = () => {
  return (
    <Box
      display="grid"
      padding="15px"
      gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      gap={2}
    >
      {services.map((service, index) => (
        <Paper
          key={index}
          elevation={2}
          style={{
            padding: "20px",
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              marginBottom: "10px",
            }}
            alignItems={"center"}
          >
            {service.icon}
          </Stack>
          <Typography variant="h6">{service.title}</Typography>
          <Typography variant="body2">{service.description}</Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default Services;
