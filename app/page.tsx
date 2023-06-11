"use client";
import Container from "@mui/material/Container";
import { Typography, Stack } from "@mui/material";
import CardExamples from "./components/CardExamples";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Stack spacing={3}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h1" component="h1" gutterBottom>
            Material UI test
          </Typography>
        </Stack>
        <CardExamples />
      </Stack>
    </Container>
  );
}
