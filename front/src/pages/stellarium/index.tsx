import TitleBar from "@/components/molecules/TitleBar";
import Navbar from "@/components/organisms/Navbar";
import { Box, Flex } from "@chakra-ui/react";

const Stellarium = () => {
  const url = process.env.NEXT_PUBLIC_VIRTUAL_SKY_URL;
  const accessEngine =
    "?&" +
    "projection=lambert" +
    "&constellations=false" +
    "&constellationlabels=false" +
    "&constellationboundaries=false" +
    "&meteorshowers=true" +
    "&showstarlabels=true" +
    "&showorbits=true" +
    "&gridlines_az=false" +
    "&gridlines_eq=true" +
    "&gridlines_gal=false" +
    "&color=white" +
    "&live=true" +
    "&scalestars=2" +
    "&magnitude=20" +
    "&az=181.96518876326036";

  console.log(accessEngine);
  return (
    <Box w={{ base: "100%", lg: "90%", xl: "80%" }} margin="auto">
      <Navbar />
      <TitleBar> ¡Bienvenido al Simulador!</TitleBar>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        width="full"
        height={{ base: "60vh", lg: "70vh" }}
      >
        <Flex flexDir="column" width="50%">
          Form <br />
          Proyección <br />
          Fecha <br />
          Tamaño de las estrellas <br />
          Magnitud minima <br />
          Tiempo real <br />
        </Flex>
        <Box
          width={{ base: "100%", lg: "50%" }}
          height={{ base: "60vh", lg: "70vh" }}
        >
          <iframe
            style={{ borderRadius: "1rem" }}
            width="100%"
            height="100%"
            src={`${url}${accessEngine}`}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Stellarium;
