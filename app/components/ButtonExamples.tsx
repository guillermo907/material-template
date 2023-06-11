import { Button, ButtonGroup, Stack, Typography } from "@mui/material";
import { Container } from "@mui/material";

function ButtonExamples() {
  return (
    <Container className="main" maxWidth={"xl"}>
      <Stack spacing={2}>
        <Stack
          spacing={2}
          direction={"row"}
          border={"1px solid"}
          borderRadius={2}
          padding={2}
        >
          <Typography variant="h3">Buttons</Typography>
          <Button variant="text" color="secondary">
            Text
          </Button>
          <Button variant="contained" color="secondary">
            Contained
          </Button>
          <Button variant="outlined" color="secondary">
            Outlined
          </Button>
        </Stack>
        <Stack
          spacing={2}
          direction={"row"}
          alignItems={"center"}
          border={"1px solid"}
          borderRadius={2}
          padding={2}
        >
          <Typography variant="h3">Button group</Typography>
          <ButtonGroup
            color="primary"
            variant="contained"
            orientation="vertical"
            size="large"
          >
            <Button>Left contained</Button>
            <Button>Centered outlined</Button>
            <Button>third outlined</Button>
          </ButtonGroup>
        </Stack>
      </Stack>
    </Container>
  );
}
export default ButtonExamples;
