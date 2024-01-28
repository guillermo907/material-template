import { Box, Divider, Stack } from "@mui/material";
import Image from "next/image";

const Statistics = () => {
  return (
    <Stack
      className="gradient-border"
      width={"95%"}
      maxWidth={"1600px"}
      justifySelf={"center"}
      alignSelf={"center"}
      alignItems={"center"}
      justifyContent={"center"}
      gap="1rem"
      minHeight={"500px"}
      direction={{ sm: "column-reverse", md: "row" }}
      overflow={"overlay"}
      sx={{
        bgcolor: "var(--section-background)",
        borderRadius: "var(--box-br)",
      }}
    >
      <Stack
        className="content"
        maxWidth="false"
        justifyContent={"center"}
        width={"100%"}
        padding={"1rem"}
      >
        <h1>Statitcis</h1>
        <Box
          display="grid"
          padding="15px"
          gridTemplateColumns="repeat(auto-fill, minmax(180px, 1fr))"
          gap={3}
        >
          <Stack direction="row" spacing={1} className="stats-item">
            <div>
              <h3>Clientes satisfechos</h3>
              <p>Lorem ipsum, dolor sit amet.</p>
            </div>
            <Divider
              orientation="vertical"
              sx={{ height: "auto", bgcolor: "var(--secondary)" }}
            />
          </Stack>
          <Stack direction="row" spacing={1} className="stats-item">
            <div>
              <h3>Proyectos</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquam
              </p>
            </div>
            <Divider
              orientation="vertical"
              sx={{ height: "auto", bgcolor: "var(--secondary)" }}
            />
          </Stack>
          <Stack direction="row" spacing={1} className="stats-item">
            <div>
              <h3>Trayectoria</h3>
              <p>Lorem ipsum, dolor sit ame</p>
            </div>
            <Divider
              orientation="vertical"
              sx={{ height: "auto", bgcolor: "var(--secondary)" }}
            />
          </Stack>
          <Stack direction="row" spacing={1} className="stats-item">
            <div>
              <h3>Confianza</h3>
              <p>Lorem ipsum, dolor sit amet consecte.</p>
            </div>
            <Divider
              orientation="vertical"
              sx={{ height: "auto", bgcolor: "var(--secondary)" }}
            />
          </Stack>
        </Box>
      </Stack>
      <Box padding={3} sx={{}}>
        <Image
          id="bgImage"
          src={"/reactSvg.svg"}
          width={100}
          height={500}
          alt="backgroundPic"
          style={{ height: "fit-content", minWidth: "450px" }}
        />
      </Box>
    </Stack>
  );
};

export default Statistics;
