import { AirplanemodeInactiveOutlined } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
  Icon,
} from "@mui/material";

function CardExamples() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      minHeight={"600px"}
      sx={{
        backgroundColor: "primary.main",
        padding: "30px",
        borderRadius: "7px",
        " &:hover": {},
      }}
    >
      <Stack direction={{ sm: "column", md: "row" }} spacing={2}>
        <Box component="div" width={550}>
          <Card
            sx={{ backgroundColor: "secondary.main", color: "black" }}
            variant="elevation"
          >
            <CardMedia
              component="img"
              height="230"
              image="https://picsum.photos/400/300"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Title
              </Typography>
              <Typography paddingBottom={3}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati unde minima tempore minus alias ratione quis nulla
                laborum et est.
              </Typography>
              <Icon fontSize="large">
                <AirplanemodeInactiveOutlined fontSize="large"></AirplanemodeInactiveOutlined>
              </Icon>
              <Typography paddingTop={3}>
                Lorem ipsum doma tempore minus alias ratione quis nulla laborum
                et est.
              </Typography>
            </CardContent>
            <CardActions>
              <Button>cancel</Button>
              <Button variant="contained">Go</Button>
            </CardActions>
          </Card>
        </Box>
        <Box component="div" width={450}>
          <Card sx={{ backgroundColor: "error.main", color: "white" }}>
            <CardMedia
              component="img"
              height="230"
              image="https://picsum.photos/500/340"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Title
              </Typography>
              <Typography>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati unde minima tempore minus alias ratione quis nulla
                laborum et est.
              </Typography>
            </CardContent>
            <CardActions>
              <Button sx={{ color: "white" }}>cancel</Button>
              <Button variant="contained">Go</Button>
            </CardActions>
          </Card>
        </Box>
        <Box component="div" width={450}>
          <Card sx={{ backgroundColor: "info.main", color: "white" }}>
            <CardMedia
              component="img"
              height="230"
              image="https://picsum.photos/300/300"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Title
              </Typography>
              <Typography>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati unde minima tempore minus alias ratione quis nulla
                laborum et est.
              </Typography>
            </CardContent>
            <CardActions>
              <Button sx={{ color: "white" }}>cancel</Button>
              <Button variant="contained">Go</Button>
            </CardActions>
          </Card>
        </Box>
      </Stack>
    </Box>
  );
}

export default CardExamples;
