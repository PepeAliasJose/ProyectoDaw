import BlogPost from "@/components/molecules/BlogPost";
import TitleBar from "@/components/molecules/TitleBar";
import Navbar from "@/components/organisms/Navbar";
import { Box, Text } from "@chakra-ui/react";

const Blog = () => {
  return (
    <Box w={{ base: "100%", lg: "90%", xl: "80%" }} margin="auto">
      <Navbar />
      <TitleBar> ¡Bienvenido al blog!</TitleBar>
      <BlogPost
        user={{
          name: "Pepe",
          equipo: { tubo: "tubo 1", montura: "montura 1", ocular: "ocular 1" },
        }}
        post={{
          title: "Titulo del blog",
          body: (
            <Text fontSize="sm">
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem
            </Text>
          ),
          date: "00-00-2023",
        }}
      />
    </Box>
  );
};

export default Blog;
