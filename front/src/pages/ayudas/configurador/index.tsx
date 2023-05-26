import TitleBar from "@/components/molecules/TitleBar";
import Navbar from "@/components/organisms/Navbar";
import { Flex, Grid, Text } from "@chakra-ui/react";

const Configurador = () => {
  return (
    <>
      <Navbar />

      <TitleBar>Configurador de equipo astronomico a medida</TitleBar>

      <Flex borderRadius="3xl" bg="primary.black" flexDir="row" gap="2">
        <Flex
          borderRadius="3xl"
          border="0.125rem solid white"
          flexDir="column"
          width="25%"
          height='fit-content'
        >
          <Text width="fit-content" margin="auto" fontWeight="700">
            CATEGORIAS:
          </Text>
          <Text width="fit-content" margin="auto" fontWeight="700">
            FABRICANTE:
          </Text>
          <Text width="fit-content" margin="auto" fontWeight="700">
            RECOMENDADO:
          </Text>
          <Text width="fit-content" margin="auto" fontWeight="700">
            APLICACION:
          </Text>
        </Flex>
        <Grid
          borderRadius="3xl"
          border="0.125rem solid white"
          width="full"
        ></Grid>
        <Flex
          borderRadius="3xl"
          border="0.125rem solid white"
          flexDir="column"
          width="35%"
          alignContent="center"
          height='fit-content'
        >
          <Text width="fit-content" margin="auto" fontWeight="700">
            CONFIGURACION:
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Configurador;
