import NavbarLink from "@/components/atoms/NavbarLink";
import TitleBar from "@/components/molecules/TitleBar";
import Navbar from "@/components/organisms/Navbar";
import { Box, Button, Flex, FormControl, FormLabel, Image, Img, Input, Spinner, Text } from "@chakra-ui/react";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";


const apiImg = (
  setSearchData: Dispatch<SetStateAction<string>>,
  url:string,
  dataName:string,
  body?:string
) => {
  const data = fetch(url,{
    method:'POST',
    body: body ?? null,
    headers: {"Authorization":"Basic ZDFlNzdmZWEtZmZiYS00ZjFjLWI3ZWEtZjY4NDkzNGNkZDMxOjNhZDBhNmRlMjdlYjViNjNlZDQ2YjU2OTlkNTVmN2E0ZjQ0NjczMDBlOTQ1MTc5ZmY3ZThlZTQwZjVkNjg5ZjRhZmVjOTNlNTA3ZmM3ZDRiZjExN2RlNGViYTUzZWUyN2RlYWQwOTA5ZGU2NjhlYTM0ZTNlODg5MjM3YThjMmUwOWQ2YTEzMzk2ODg3YzA1MGMwZGZmZTA3MmFjNWQ2MTA0Yzg3MDU0MzkwMjcxYWQyZjI4ODFmNGE2NjBkMGQ5NTU0Y2ExOTIwMmM3ODc3NjEwMjc3YzBiZTNkMzEwMTRh"}
  }).then(res =>  res.json())
  .then((data) => {setSearchData(data.data[dataName])});
}
const Ayuda = () => {
  const [moon, setMoon] = useState('')
  const [ generateMoon, setGenerateMoon] = useState(false);
  const [moonLoading,setMoonLoading] = useState(false);

  const [date, setDate] = useState("2023-06-12"); 
  const [latitud, setLatitud] = useState('36.9195');
  const [longitud, setLongitud] = useState("-6.0781");

  useEffect(() => {
    const body = `{\"style\":{\"moonStyle\":\"default\",\"backgroundStyle\":\"stars\",\"backgroundColor\":\"#2f2e5c\",\"headingColor\":\"#ffffff\",\"textColor\":\"#ffffff\"},\"observer\":{\"latitude\":${latitud},\"longitude\":${longitud},\"date\":\"${date}\"},\"view\":{\"type\":\"landscape-simple\",\"parameters\":{}}}`;
    if(generateMoon){
      setMoon('');
      apiImg(setMoon,'https://api.astronomyapi.com/api/v2/studio/moon-phase',"imageUrl",body);
      setGenerateMoon(false)
    }
    
  },[generateMoon])

  useEffect(()=>{
    if(moon!==''){setMoonLoading(false)}
  },[moon])

  return (
    <Box w={{ base: "100%", lg: "90%", xl: "80%" }} margin="auto">
      <Navbar />
      <TitleBar> Seccion de informacion </TitleBar>
      <Flex flexDir="column" gap="5">
        <Flex flexDir={{ base: "column", xl: "row" }} gap="5" >
          <Box
            bg="primary.gray"
            //border="0.2rem solid white"
            rounded="3xl"
            py="4"
            px="8"
            maxWidth={{base:'auto',xl:'40%'}}
          >
            <Text fontSize="3xl" fontWeight="700" mb="3">
              CONTAMINACION LUMINICA
            </Text>
            <Text fontSize='xl' fontWeight='500'>
              Uno de los principales factores aparte de la luz ambiental es la propia
              luz residual que refleja la luna, creando un halo de luz que hace que generen sombras. 
              La cantidad de luz que proyecta hacia la tierra 
              varia dependiendo de en que fase este la luna, con lo que tambien interfiere con la observación
              de estrellas
            </Text>
          </Box>
          <Flex minWidth={{base:'full',xl:'60%'}} gap='4' h='fit-content'>
            <Flex bg='primary.green' borderRadius='2xl' padding='2' px='4' flexDir={'column'} gap='4'>
              <Flex flexDir={{base:'column'}} gap='4'>
                <FormControl>
                  <FormLabel>Fecha:</FormLabel>
                  <Input
                    borderWidth='2px'
                    fontWeight='600'
                    value={date}
                    borderRadius="xl"
                    type="date"
                    onChange={(event) => setDate(event.target.value as any)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Latidud</FormLabel>
                  <Input
                    borderWidth='2px'
                    fontWeight='600'
                    readOnly
                    value={latitud}
                    borderRadius="xl"
                    type="number"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Longitud</FormLabel>
                  <Input
                    borderWidth='2px'
                    fontWeight='600'
                    readOnly
                    value={longitud}
                    borderRadius="xl"
                    type="number"
                  />
                </FormControl>
              </Flex>
              <Button bg='primary.clearBlack' borderRadius='xl' _hover={{bg:'primary.clearWhite',color:'primary.clearBlack'}}  onClick={() => {setGenerateMoon(true);setMoonLoading(true)}}> Generar </Button>
            </Flex>
            <Box w='full' h='full'>
              {moon!=='' && <Img  borderRadius='xl' w='full' alt='moon' src={moon}/>}
              {moon==='' && !moonLoading  && <Text>Haz click en generar para ver una foto de la luna el dia seleccionado.
                <br/><br/> Tambien indicara a que hora sale y a que hora se pone la luna</Text>}
              {moonLoading && <Spinner 
              thickness='5px'
              ml='48%'
              speed='2s'
              emptyColor='gray.200'
              color='primary.green'
              size='xl'/>}
            </Box>
          </Flex>
          <Box
          hidden
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
              width="max-content"
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
        <Flex flexDir="column" gap='5'>
        <Box
            bg="primary.gray"
            //border="0.2rem solid white"
            rounded="xl"
            py="4"
            px="8"
            w='full'
          >
           
            <Text>
              La contaminación lumínica se define como el flujo luminoso
              proveniente de fuentes artificiales de luz que provoca el aumento
              del brillo del cielo nocturno, disminuyendo la visibilidad de los
              cuerpos celestes.
              
              <br/>
              <br/>
              Los mapas de contaminación lumínica, o mapas de polución lumínica
              permiten identificar la medida en la que luz incide sobre el
              territorio. En términos ambientales, la contaminación lumínica
              incide en el territorio aumentando el brillo del cielo debido a la
              reflexión de la luz.
            </Text>
          </Box>
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
    </Box>
  );
};

export default Ayuda;
