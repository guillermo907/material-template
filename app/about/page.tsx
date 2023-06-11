"use client";
import { Box, Card, Typography, Button, Stack } from "@mui/material";

function About() {
  return (
    <Box padding={3}>
      <Typography variant="h1" gutterBottom>
        About page homie
      </Typography>
      <Stack direction={"row"} spacing={3} padding={3}>
        <Box
          sx={{
            padding: "15px",
            borderRadius: "7px",
            backgroundColor: "primary.main",
            color: "white",
            " &:hover": { backgroundColor: "primary.light", color: "white" },
          }}
        >
          <Typography variant="h2" gutterBottom>
            Left sec
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit aut
            corporis sequi, repellendus maiores recusandae hic. Nihil labore
            omnis et!
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "15px",
            backgroundColor: "secondary.main",
            color: "black",
            borderRadius: "7px",
            " &:hover": { backgroundColor: "secondary.light", color: "black" },
          }}
        >
          <Typography variant="h2" gutterBottom>
            right sec
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit aut
            corporis sequi, repellendus maiores recusandae hic. Nihil labore
            omnis et!
          </Typography>
        </Box>
      </Stack>
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Box
          sx={{
            margin: "15px 0px",
            borderRadius: "10px",
            width: "100%",
            padding: "15px",
            backgroundColor: "primary.main",
            " &:hover": {
              background: "linear-gradient(45deg, #6b34eb, #34eb95)",
              backgroundSize: "120%",
            },
            color: "white",
          }}
        >
          <Typography variant="h2" gutterBottom>
            Center
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum velit
            ipsum sed nesciunt animi.
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "15px 0px",
            borderRadius: "10px",
            width: "100%",
            padding: "15px",
            backgroundColor: "secondary.main",
            " &:hover": {
              background: "linear-gradient(45deg, #34eb95,  #34eb95, #6b34eb)",
              backgroundSize: "120%",
            },
            color: "black",
          }}
        >
          <Typography variant="h2" gutterBottom>
            Center
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum velit
            ipsum sed nesciunt animi.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default About;
