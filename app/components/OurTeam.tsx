import { Box, Typography, Stack, Avatar } from "@mui/material";
import Divider from "@mui/material/Divider";

// Simulated data for team members
const teamMembers = [
  {
    name: "John Doe",
    job: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/93.jpg",
  },
  {
    name: "Jane Smith",
    job: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Alice Brown",
    job: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
  },
  {
    name: "Peter Mackecnzie",
    job: "Backend Developer",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Juan Molinas",
    job: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
];

const OurTeam = () => {
  return (
    <Stack
      spacing={5}
      padding={3}
      sx={{
        background: "var(--section-background)",
        borderRadius: "var(--box-br)",
      }}
    >
      <Typography variant="h1">Conoce a nuestro equipo</Typography>
      {/* ... Your other content */}
      {/* Our Team Section */}
      <Stack
        direction={"row"}
        spacing={3}
        padding={3}
        gap={"2rem"}
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap={"wrap"}
      >
        {teamMembers.map((member, index) => (
          <Box
            key={index}
            textAlign="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar
              alt={member.name}
              src={member.image}
              sx={{ width: 150, height: 150 }}
            />
            <Typography variant="h4">{member.name}</Typography>
            <Typography variant="subtitle1" gutterBottom>
              {member.job}
            </Typography>
          </Box>
        ))}
      </Stack>
      <Divider variant="middle" />
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Typography variant="h3" gutterBottom>
          Stuff we're good at
        </Typography>
        <Typography maxWidth={"500px"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          similique quia neque at! Temporibus similique ipsam quas iure libero.
          Atque alias perspiciatis exercitationem quos mollitia dolorem quidem
          error laboriosam ducimus.
        </Typography>
      </Stack>
      <Divider variant="middle" />
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Typography variant="h3" gutterBottom>
          Come take a look
        </Typography>
        <Typography maxWidth={"500px"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          similique quia neque at! Temporibus similique..
        </Typography>
      </Stack>
    </Stack>
  );
};

export default OurTeam;
