import NavbarLink from "@/components/atoms/NavbarLink";
import TitleBar from "@/components/molecules/TitleBar";
import Navbar from "@/components/organisms/Navbar";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import Link from "next/link";

const Ayuda = () => {
  return (
    <>
      <Navbar />
      <TitleBar> Seccion de informacion </TitleBar>
      <Flex flexDir="column" gap="5">
        <Flex flexDir={{ base: "column", md: "row" }} gap="5">
          <Box
            bg='primary.clearBlack'
            //border="0.2rem solid white"
            rounded="3xl"
            py='4'
            px='8'
            width="auto"
          >
            <Text fontSize="3xl" fontWeight="700" mb="3">
              CONTAMINACION LUMINICA
            </Text>
            <Text>
              La contaminación lumínica se define como el flujo luminoso
              proveniente de fuentes artificiales de luz que provoca el aumento
              del brillo del cielo nocturno, disminuyendo la visibilidad de los
              cuerpos celestes.
              <br />
              <br />
              Los mapas de contaminación lumínica, o mapas de polución lumínica
              permiten identificar la medida en la que luz incide sobre el
              territorio. En términos ambientales, la contaminación lumínica
              incide en el territorio aumentando el brillo del cielo debido a la
              reflexión de la luz.
            </Text>
          </Box>
          <Box
            //border="0.2rem solid white"
            rounded="3xl"
            px="6"
            py="2"
            width="auto"
          >
            <Text margin="2" fontWeight="700" fontSize="2xl">
              Accede al configurador para elegir las piezas de tu equipo a
              medida
            </Text>
            <Box
              width="fit-content"
              height="auto"
              padding="5"
              border="3px solid white"
              rounded="2xl"
              mx="auto"
              my="5"
            >
              <NavbarLink
                Linkclass="navLink mt-auto mb-auto"
                location="/ayudas/configurador"
              >
                CONFIGURADOR
              </NavbarLink>
            </Box>
          </Box>
        </Flex>
        <Flex flexDir="column">
          <Flex
            border="0.2rem solid white"
            rounded="3xl"
            padding="4"
            width="auto"
            flexDir={{ base: "column" }}
          >
            <Flex flexDir={{ base: "column", md: "row" }}>
              <Text padding="1" mb="4">
                Foto del mapa de contaminación lumínica de España - Puedes ver
                el mapa interactivo en <KeyboardArrowRight />
              </Text>
              <Box
                mt="-1"
                border="2px solid white"
                height="fit-content"
                padding="2"
                borderRadius="0.625rem"
              >
                <Link href="https://www.lightpollutionmap.info/#zoom=5.54&lat=39.9735&lon=-4.3945&state=eyJiYXNlbWFwIjoiTGF5ZXJCaW5nUm9hZCIsIm92ZXJsYXkiOiJ3YV8yMDE1Iiwib3ZlcmxheWNvbG9yIjpmYWxzZSwib3ZlcmxheW9wYWNpdHkiOjYwLCJmZWF0dXJlc29wYWNpdHkiOjg1fQ==">
                  <Text margin="auto" width="fit-content">
                    MAPA INTERACTIVO
                  </Text>
                </Link>
              </Box>
            </Flex>
            <Image
              mt="2"
              width="auto"
              rounded="xl"
              alt="mapa-contaminacion"
              src="/img/contamination-map.png"
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Ayuda;
