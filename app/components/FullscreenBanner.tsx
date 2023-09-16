import { Typography, Box, Button, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { relative } from "path";
import { ReactNode } from "react";

type FullscreenBannerProps = {
  color: string;
  color2?: string;
  title?: string;
  subtitle?: string;
  btnLink?: string;
  height?: string;
  imgPath: string;
  children?: ReactNode;
};

const FullscreenBanner = (props: FullscreenBannerProps) => {
  return (
    <Box
      sx={{
        backgroundColor: props.color || "primary.main",
        background: `linear-gradient(155deg, ${props.color}, ${props.color2})`,
        backgroundSize: "200%",
        color: "white",
        height: props.height || "90dvh",
        position: "relative",
        padding: "0",
      }}
      maxWidth={"false"}
      padding={10}
      justifyContent={"center"}
    >
      <Stack className="content" justifyContent={"center"} height={"100%"}>
        <Typography variant="h1" align="center" marginX={0}>
          {props.title}
        </Typography>
        <Typography variant="h4" align="center" marginX={0} gutterBottom>
          {props.subtitle}
        </Typography>
        {props.btnLink && (
          <Button
            variant="outlined"
            color="secondary"
            sx={{ alignSelf: "center" }}
          >
            <Link href={props.btnLink}>Go</Link>
          </Button>
        )}
        {props.children}
        <Image
          id="bgImage"
          src={props.imgPath}
          width={600}
          height={600}
          alt="backgroundPic"
          style={{
            position: "absolute",
            top: "0",
            zIndex: -1,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Stack>
    </Box>
  );
};

export default FullscreenBanner;
