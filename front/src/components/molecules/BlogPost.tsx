import { Box, Flex, Text } from "@chakra-ui/react";

type Props = {
  user?: {
    name: string;
    equipo: {
      tubo: string;
      montura: string;
      ocular: string;
    };
  };
  post?: {
    title: string;
    body: JSX.Element;
    date: string;
  };
};

const BlogPost = (props: Props) => {
  return (
    <Flex
      className="border-white border-2"
      borderRadius="2xl"
      flexDir="row"
      padding="4"
    >
      <Flex
        flexDir="column"
        borderRight="2px"
        borderColor="white"
        padding="4"
        width="25%"
      >
        <Box alignItems="start" height="30rem">
          <Text fontSize="2xl">{props.user?.name}</Text>
        </Box>
        <Box>
          <Text style={{}}>Equipo:</Text>
          <Text fontSize="sm">
            {props.user?.equipo.tubo} <br />
            {props.user?.equipo.montura} <br />
            {props.user?.equipo.ocular} <br />
          </Text>
        </Box>
      </Flex>
      <Flex flexDir="column" width="full">
        <Box
          px="8"
          py="4"
          width="full"
          height="full"
          display="flex"
          flexDir="column"
        >
          <Text mb="8" fontSize="3xl">
            {props.post?.title}
          </Text>
          <Box>{props.post?.body}</Box>
          <Text mt="auto" ml="auto" fontSize="sm">
            {props.post?.date}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default BlogPost;
