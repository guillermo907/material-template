"use client";
import Container from "@mui/material/Container";
import { Typography, Stack } from "@mui/material";
import CardExamples from "./components/CardExamples";
import Banner from "./components/Banner";
import ImageLister from "./components/ImageLister";
import "./globals.css";
import FullscreenBanner from "./components/FullscreenBanner";

export default function Home() {
  return (
    <Container maxWidth={false}>
      <Stack spacing={3}>
        <FullscreenBanner
          title="Web GDL"
          color="rgba(74, 36, 164, 0.8)"
          color2="#34eb95"
          imgPath="/bannerBG1.jpg"
        />
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
          color="#6b34eba7"
          color2="#34eb95"
        />
        <CardExamples />
      </Stack>
    </Container>
  );
}
