import TitleBar from "@/components/molecules/TitleBar";
import Navbar from "@/components/organisms/Navbar";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Switch,
  Text,
} from "@chakra-ui/react";
import {
  Add,
  Brightness4,
  Remove,
  StarBorderRounded,
  StarRounded,
  StarsRounded,
} from "@material-ui/icons";
import { FormEvent, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("../../components/organisms/Map"), {
  ssr: false,
});

const Stellarium = () => {
  const url = process.env.NEXT_PUBLIC_VIRTUAL_SKY_URL;

  const [date, setDate] = useState("");

  const [projectionTime, setProjectionTime] = useState("");
  const [projection, setProjection] = useState("stereo");
  const [scaleStars, setScaleStars] = useState("1");
  const [magnitude, setMagnitude] = useState("3");
  const [orbits, showOrbits] = useState(false);
  const [eqLines, showEqLines] = useState(true);
  const [live, isLive] = useState(false);
  const [showMessier, setShowMessier] = useState(false);

  const createProjectionTime = ({ date }: { date?: string }) => {
    const d = new Date();
    const hoy = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    const t = date ? date : hoy;
    setProjectionTime(`&clock=${t}`);
    isLive(false);
  };

  const accessEngineURL =
    "?&" +
    "latitude=36.9195" +
    "&longitude=-6.0781" +
    `&projection=${projection}` +
    `&showorbits=${orbits}` +
    `&gridlines_eq=${eqLines}` +
    "&color=white" +
    `${projectionTime}` +
    "&lang=es" +
    `&showMessier=${showMessier}` +
    `&live=${live}` +
    `&scalestars=${scaleStars}` +
    `&magnitude=${magnitude}` +
    "&az=180";

  const [accessEngine, setAccessEngine] = useState(accessEngineURL);

  const changeMapProjection = (event: FormEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLInputElement;
    if (target.value) {
      setProjection(target.value);
    }
  };

  const r = useEffect(() => {
    setAccessEngine(accessEngineURL);
  }, [accessEngineURL]);

  const position = [51.505, -0.09];

  return (
    <Box w={{ base: "100%", lg: "90%", xl: "80%" }} margin="auto">
      <Navbar />
      <TitleBar> ¡Bienvenido al Simulador!</TitleBar>
      <Flex flexDir={{ base: "column", lg: "row" }} width="full" gap="4">
        <Flex flexDir="column" width={{ base: "100%", lg: "35%" }} gap="8">
          <Flex flexDir={{ base: "column", sm: "row" }} gap="4">
            <FormControl width={{ base: "full" }}>
              <FormLabel>Proyección</FormLabel>
              <Select
                onInput={(event) => changeMapProjection(event)}
                borderRadius="xl"
                defaultValue={projection}
              >
                <option className="opcion" value="polar">
                  Polar
                </option>
                <option className="opcion" value="ortho">
                  Orthografica
                </option>
                <option className="opcion" value="stereo">
                  Stereografica
                </option>
                <option className="opcion" value="equirectangular">
                  Equirectangular
                </option>
                <option className="opcion" value="gnomic">
                  Esfera
                </option>
                <option className="opcion" value="mollweide">
                  Mollweide
                </option>
              </Select>
            </FormControl>
            <Text width="full" height="0px"></Text>
          </Flex>
          <Flex flexDir={{ base: "column", sm: "row" }} gap="4">
            <FormControl>
              <FormLabel>Fecha</FormLabel>
              <Input
                borderRadius="xl"
                type="datetime-local"
                onInput={(
                  event: EventTarget & { target: { value: string } }
                ) => {
                  setDate(event.target.value as any);
                  createProjectionTime({ date: event.target.value });
                }}
              />
            </FormControl>
          </Flex>
          {/*=========================== Slider ===============================*/}
          <Flex flexDir="column" gap="2">
            <Flex flexDir="row" gap="4">
              <FormControl>
                <FormLabel>Tamaño de las estrellas</FormLabel>
              </FormControl>
              <FormControl>
                <FormLabel>Magnitud minima</FormLabel>
              </FormControl>
            </Flex>
            <Flex gap="4">
              <FormControl>
                <Flex flexDir="row" gap="4">
                  <Remove />
                  <Slider
                    aria-label="slider-ex-4"
                    min={1}
                    max={6}
                    step={1}
                    defaultValue={1}
                    onChange={(val) => setScaleStars(val.toString())}
                  >
                    <SliderTrack bg="gray.600" height=".5rem" borderRadius="xl">
                      <SliderFilledTrack bg="purple.400" />
                    </SliderTrack>
                    <SliderThumb boxSize={6}>
                      <Box color="yellow.500" alignItems="center" mt="-0.5">
                        <StarBorderRounded />
                      </Box>
                    </SliderThumb>
                  </Slider>
                  <Add />
                </Flex>
              </FormControl>
              <FormControl>
                <Flex flexDir="row" gap="2">
                  <StarRounded />
                  <Slider
                    aria-label="slider-ex-4"
                    min={-1}
                    max={15}
                    step={1}
                    defaultValue={3}
                    onChange={(val) => setMagnitude(val.toString())}
                  >
                    <SliderTrack bg="blue.400" height=".5rem" borderRadius="xl">
                      <SliderFilledTrack bg="yellow.400" />
                    </SliderTrack>
                    <SliderThumb boxSize={6}>
                      <Box
                        mt="-0.5"
                        color="black"
                        alignItems="center"
                        height="min-content"
                      >
                        <Brightness4 />
                      </Box>
                    </SliderThumb>
                  </Slider>
                  <StarsRounded />
                </Flex>
              </FormControl>
            </Flex>
            <Flex flexDir={{ base: "column", sm: "row" }} gap="4" mt="4">
              <FormControl>
                <FormLabel>Latidud</FormLabel>
                <Input
                  borderRadius="xl"
                  type="number"
                  disabled
                  value="36.9195"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Longitud</FormLabel>
                <Input
                  borderRadius="xl"
                  type="number"
                  disabled
                  value="-6.0781"
                />
              </FormControl>
            </Flex>
          </Flex>
          {/*=========================== Switch ===============================*/}
          <Flex
            flexDir="column"
            width={{ base: "full", sm: "19rem" }}
            border="solid .2rem white"
            borderRadius="xl"
            padding="6"
            gap="1"
          >
            <FormControl display="flex" alignItems="center" width="full">
              <FormLabel htmlFor="email-alerts" mb="0">
                En vivo:
              </FormLabel>
              <Switch
                id="email-alerts"
                size={{ base: "lg", sm: "md" }}
                ml="auto"
                isChecked={live}
                onChange={() => {
                  isLive(!live);
                  setProjectionTime("");
                }}
              />
            </FormControl>
            <FormControl display="flex" alignItems="center" width="full">
              <FormLabel htmlFor="email-alerts" mb="0">
                Orbitas:
              </FormLabel>
              <Switch
                id="email-alerts"
                size={{ base: "lg", sm: "md" }}
                ml="auto"
                isChecked={orbits}
                onChange={() => showOrbits(!orbits)}
              />
            </FormControl>
            <FormControl display="flex" alignItems="center" width="full">
              <FormLabel htmlFor="email-alerts" mb="0">
                Cuadricula ecuatorial:
              </FormLabel>
              <Switch
                id="email-alerts"
                size={{ base: "lg", sm: "md" }}
                ml="auto"
                isChecked={eqLines}
                onChange={() => showEqLines(!eqLines)}
              />
            </FormControl>
            <FormControl display="flex" alignItems="center" width="full">
              <FormLabel htmlFor="email-alerts" mb="0">
                Mostrar catalogo messier:
              </FormLabel>
              <Switch
                id="email-alerts"
                size={{ base: "lg", sm: "md" }}
                ml="auto"
                isChecked={showMessier}
                onChange={() => setShowMessier(!showMessier)}
              />
            </FormControl>
          </Flex>
        </Flex>

        <Box
          width={{ base: "100%", lg: "65%" }}
          height={{ base: "60vh", lg: "71vh" }}
        >
          <iframe
            style={{ borderRadius: "1rem" }}
            width="100%"
            height="100%"
            src={`${url}${accessEngine}`}
          />
        </Box>
      </Flex>
      <Box
        mt="4"
        width="full"
        height="500px"
        border="solid 2px white"
        borderRadius="xl"
        padding="3px"
      >
        {typeof window !== "undefined" && <MapWithNoSSR />}
      </Box>
    </Box>
  );
};

export default Stellarium;
