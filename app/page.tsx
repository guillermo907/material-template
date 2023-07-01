"use client";
import Container from "@mui/material/Container";
import { Typography, Stack } from "@mui/material";
import CardExamples from "./components/CardExamples";
import Banner from "./components/Banner";
import ImageLister from "./components/ImageLister";
import "./globals.css";

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
        <Banner title="titulo" subtitle="frase de subtitulo" />
        <ImageLister />
        <Banner
          title="Second Banner"
          subtitle="Subtitulo"
          color="primary.dark"
        />
        <CardExamples />
      </Stack>
    </Container>
  );
}
