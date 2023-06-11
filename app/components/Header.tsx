"use client";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/material";
import { BorderColor, Brightness4, Brightness7 } from "@mui/icons-material";

function Header(props: any) {
  return (
    <Box>
      <AppBar
        position="static"
        color="transparent"
        enableColorOnDark
        sx={{
          boxShadow: "none",
          /* borderBottom: "1px solid",
          borderColor: "primary.main", */
        }}
      >
        <Toolbar
          className="toolbar-container"
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Stack className="left" alignContent={"center"} direction={"row"}>
            <IconButton onClick={() => props.toggleDarkMode()}>
              {props.darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Stack>
          <Stack className="right" direction={"row"}>
            <Link href="/">
              <Button color={props.darkMode ? "secondary" : "primary"}>
                Home
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="text"
                color={props.darkMode ? "secondary" : "primary"}
              >
                About
              </Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
