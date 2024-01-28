"use client";
import Container from "@mui/material/Container";
import { Typography, Stack, Box } from "@mui/material";
import CardExamples from "./components/CardExamples";
import Banner from "./components/Banner";
import Services from "./components/sections/Services";
import ImageLister from "./components/ImageLister";
import "./globals.scss";
import FullscreenBanner from "./components/FullscreenBanner";
import ImageSlider from "./components/ImageSlider";
import Statistics from "./components/sections/Statistics";

export default function Home() {
  return (
    <Container maxWidth={false}>
      <Stack spacing={3}>
        <ImageSlider />
        <Services />
        <Banner title="titulo" subtitle="frase de subtitulo" noRadius />
        <Statistics />
        {/* <ImageLister /> */}
        <FullscreenBanner
          title=""
          height="60vh"
          color="var(--primary)"
          color2="rgba(52, 235, 150, 0.1)"
          imgPath="/working1.jpg"
        >
          <Box
            className="box-shadow"
            sx={{
              alignSelf: "center",
              borderRadius: "var(--box-round-br)",
              width: "80%",
              padding: "15px",
              color: "white",
            }}
          >
            <Typography variant="h2" gutterBottom>
              Center
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              velit ipsum sed nesciunt animi.
            </Typography>
          </Box>
        </FullscreenBanner>
      </Stack>
    </Container>
  );
}
