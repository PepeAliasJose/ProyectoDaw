import BlogPost from "@/components/molecules/BlogPost";
import TitleBar from "@/components/molecules/TitleBar";
import Navbar from "@/components/organisms/Navbar";
import { Text } from "@chakra-ui/react";

const Blog = () => {
  return (
    <>
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
    </>
  );
};

export default Blog;
