import { Typography, Box, Button, Stack } from "@mui/material";

const Banner = (props: any) => {
  return (
    <Box
      sx={{
        backgroundColor: props.color || "primary.main",
        borderRadius: "var(--box-round-br)",
        color: "white",
      }}
      padding={10}
    >
      <Stack className="content" justifyContent={"center"}>
        <Typography variant="h2" align="center">
          {props.title}
        </Typography>
        <Typography variant="h4" align="center" gutterBottom>
          {props.subtitle}
        </Typography>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ alignSelf: "center" }}
        >
          Go
        </Button>
      </Stack>
    </Box>
  );
};

export default Banner;
