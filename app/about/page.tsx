"use client";
import {
  Box,
  Card,
  Typography,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import FullscreenBanner from "../components/FullscreenBanner";
import OurTeam from "../components/OurTeam";
import Image from "next/image";

function About() {
  return (
    <Box>
      {/*  <Typography variant="h1" gutterBottom>
        Acerca de nosotros
      </Typography> */}
      <FullscreenBanner
        title="Web GDL"
        color="var(--primary)"
        color2="rgba(52, 235, 150, 0.8)"
        imgPath="/working1.jpg"
        /* btnLink="/" */
      />
      <Box padding={3}>
        <OurTeam />
      </Box>

      <Stack direction={"row"} spacing={3} padding={3}>
        <Box
          sx={{
            padding: "15px",
            borderRadius: "var(--box-br)",
            backgroundColor: "primary.main",
            color: "white",
            " &:hover": { backgroundColor: "primary.light", color: "white" },
          }}
        >
          <Typography variant="h2" gutterBottom>
            Webdeb GDL Studios
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit aut
            corporis sequi, repellendus maiores recusandae hic. Nihil labore
            omnis et!
          </Typography>
        </Box>
        {/* //Get in conteact box */}
        <Box
          sx={{
            padding: "15px",
            backgroundColor: "secondary.main",
            color: "black",
            borderRadius: "var(--box-br)",
            " &:hover": { backgroundColor: "secondary.light", color: "black" },
          }}
        >
          <Typography variant="h2" gutterBottom>
            Ponte en contacto
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit aut
            corporis sequi, repellendus maiores recusandae hic. Nihil labore
            omnis et!
          </Typography>
          <Stack direction="row" spacing={2} marginTop={2}>
            <IconButton
              color="primary"
              aria-label="Facebook"
              component="a"
              href="https://www.facebook.com/your-facebook-page"
              target="_blank"
              size="large"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="Twitter"
              component="a"
              href="https://twitter.com/your-twitter-account"
              target="_blank"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="Instagram"
              component="a"
              href="https://www.instagram.com/your-instagram-account"
              target="_blank"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="Email"
              href="mailto:youremail@example.com"
            >
              <EmailIcon />
            </IconButton>
          </Stack>
        </Box>
      </Stack>

      <Stack alignItems={"center"} justifyContent={"center"} padding={3}>
        <Stack
          direction={"row"}
          spacing={3}
          sx={{
            margin: "15px 0px",
            borderRadius: "var(--box-round-br)",
            width: "100%",
            backgroundColor: "primary.main",
            color: "white",
          }}
        >
          <Image
            alt="company location map"
            src="/map1.png"
            width={350}
            height={0}
            style={{
              /* width: "270px" */
              height: "auto",
              borderRadius: "8px 0 0 8px",
            }}
          ></Image>

          <Stack padding={3} justifyContent={"center"}>
            <Typography variant="h2" gutterBottom>
              Ven a visitarnos
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              velit ipsum sed nesciunt animi.
            </Typography>
            <Typography>Av. Camino real, #4322 en Zapopan Jalisco.</Typography>
          </Stack>
        </Stack>
      </Stack>
      <FullscreenBanner
        title=""
        height="60vh"
        color="var(--secondary)"
        color2="rgba(52, 235, 150, 0.1)"
        imgPath="/working1.jpg"
      >
        <Box
          sx={{
            alignSelf: "center",
            borderRadius: "var(--box-round-br)",
            width: "80%",
            padding: "15px",
            backgroundColor: "primary.main",
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
      </FullscreenBanner>
    </Box>
  );
}

export default About;
