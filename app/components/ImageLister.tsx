import { Stack, ImageList, ImageListItem } from "@mui/material";

const ImageLister = () => {
  return (
    <Stack spacing={3}>
      <ImageList variant="masonry" cols={2}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            {" "}
            <img src={item.img} loading="lazy"></img>
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
};

export default ImageLister;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1541971126-d98efa910469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2483&q=80",
    title: "Bird",
  },
  {
    img: "https://images.unsplash.com/photo-1559627707-b2d6c5810df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80",
    title: "Bird",
  },
  {
    img: "https://images.unsplash.com/photo-1686659569920-28159b5fe4f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    title: "Bird",
  },
  {
    img: "https://images.unsplash.com/photo-1560497122-b1392e1f12f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80",
    title: "Fish",
  },
  {
    img: "https://images.unsplash.com/photo-1429703517715-33e131d8102f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    title: "Bird",
  },
  {
    img: "https://images.unsplash.com/photo-1483639033054-d6b9cf0eb19c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2360&q=80",
    title: "earth view",
  },
  {
    img: "https://images.unsplash.com/photo-1574169208538-4f45163ade8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2360&q=80",
    title: "Bird",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1685316143415-7a17667e3829?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    title: "Fish",
  },
  {
    img: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFycm90fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    title: "Fish",
  },
];
