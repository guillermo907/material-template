"use client";

import {
  Box,
  Card,
  Typography,
  Button,
  Stack,
  IconButton,
  Fab,
} from "@mui/material";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

//Move to a types or models folder
interface Post {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

function Testground() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);

  const clockInterval = useRef<any>(null);

  useEffect(() => {
    startInterval();
    getPosts();

    return () => stopInterval();
  }, []);

  const stopInterval = () => {
    clearInterval(clockInterval.current);
  };

  const startInterval = () => {
    clockInterval.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1 * 1000);
  };

  const getPosts = async () => {
    await fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((res) => setPosts(res));
  };

  const renderPosts = () => {
    return posts.map((post) => {
      return (
        <div key={post.id}>
          <h3>{post.title}</h3>
          {/* <Image src={post.url} width={200} height={200} alt={post.title} /> */}
        </div>
      );
    });
  };

  return (
    <Box>
      <Typography variant="h2">Testground</Typography>
      <Stack alignItems={"center"} spacing={4} justifyContent={"center"}>
        <p>Testground homie</p>
        <h3>{count}</h3>
        <Button onClick={() => setCount(0)}>Reset</Button>
        <Fab color="primary" onClick={stopInterval}>
          Stop
        </Fab>
        <Fab color="secondary" variant="extended" onClick={startInterval}>
          Start
        </Fab>
      </Stack>
      <Stack>
        Posts
        {renderPosts()}
      </Stack>
    </Box>
  );
}

export default Testground;
