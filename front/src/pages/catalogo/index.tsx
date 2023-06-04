import TitleBar from "@/components/molecules/TitleBar";
import Navbar from "@/components/organisms/Navbar";
import { Box, Text } from "@chakra-ui/react";

const Blog = () => {
  return (
    <Box w={{ base: "100%", lg: "90%", xl: "80%" }} margin="auto">
      <Navbar />
      <TitleBar> ¡Bienvenido al catalogo!</TitleBar>
    </Box>
  );
};

export default Blog;
