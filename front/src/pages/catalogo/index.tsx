import TitleBar from "@/components/molecules/TitleBar";
import Modal from "@/components/organisms/Modal";
import Navbar from "@/components/organisms/Navbar";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, FormControl, FormLabel, Img, Input, Select, Spinner, Text, useDisclosure } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const api = (
  setSearchData: Dispatch<SetStateAction<string[] | undefined>>,
  url:string,
  dataName:string,
  body?:any
  ) => {
  const data = fetch(url,{
    method:'GET',
    body: body ?? null,
    headers: {"Authorization":"Basic ZDFlNzdmZWEtZmZiYS00ZjFjLWI3ZWEtZjY4NDkzNGNkZDMxOjNhZDBhNmRlMjdlYjViNjNlZDQ2YjU2OTlkNTVmN2E0ZjQ0NjczMDBlOTQ1MTc5ZmY3ZThlZTQwZjVkNjg5ZjRhZmVjOTNlNTA3ZmM3ZDRiZjExN2RlNGViYTUzZWUyN2RlYWQwOTA5ZGU2NjhlYTM0ZTNlODg5MjM3YThjMmUwOWQ2YTEzMzk2ODg3YzA1MGMwZGZmZTA3MmFjNWQ2MTA0Yzg3MDU0MzkwMjcxYWQyZjI4ODFmNGE2NjBkMGQ5NTU0Y2ExOTIwMmM3ODc3NjEwMjc3YzBiZTNkMzEwMTRh"}
  }).then(res =>  res.json())
  .then((data) => {setSearchData(data.data[dataName].rows)});
}

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

const Blog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [mode, setMode] = useState('login');
  const [user, setUser] = useState<any>({});

  const [bodiesData, setBodiesData] = useState<string[]>();
  const [starChart, setStarChart] = useState('');
  const [date, setDate] = useState("2023-06-12");
  const [time, settime] = useState("10:30");
  const [latitud, setLatitud] = useState(user.p_latitud ? user.p_latitud : '36.9195');
  const [longitud, setLongitud] = useState(user.p_longitud ? user.p_longitud :"-6.0781");
  const [constelacion, setConstelacion] = useState("ori");

  const [ changeInfo, setChangeInfo] = useState(false);
  const [infoLoading,setInfoLoading] = useState(false);

  const [ generateChart, setGenerateChart] = useState(false);
  const [chartLoading,setChartLoading] = useState(false);

  if(typeof localStorage!== 'undefined' && !user?.id){
    const u = localStorage.getItem('user');
    const user = JSON.parse(u as string);
    if(user?.id){
      setUser(user)
      setLatitud(user.p_latitud)
      setLongitud(user.p_longitud)
    }else{
      if(!isOpen){
        onOpen()
      }
    }
  }

  useEffect(() => {
    if(changeInfo){
      api(setBodiesData,`https://api.astronomyapi.com/api/v2/bodies/positions?longitude=${longitud}&latitude=${latitud}&elevation=1&from_date=${date}&to_date=${date}&time=${time}:00`,'table')
      setChangeInfo(false);
      setInfoLoading(false);
    }

    const body=`{\"style\":\"default\",\"observer\":{\"latitude\":${latitud},\"longitude\":${longitud},\"date\":\"${date}\"},\"view\":{\"type\":\"constellation\",\"parameters\":{\"constellation\":\"${constelacion}\"}}}`;
    if(generateChart){
      setStarChart('')
      apiImg(setStarChart,"https://api.astronomyapi.com/api/v2/studio/star-chart","imageUrl",body);
      setGenerateChart(false);
    }
  },[changeInfo,generateChart])

  useEffect(() => {
    if(starChart!==''){setChartLoading(false)}
  },[starChart])

  return (
    <Box w={{ base: "100%", lg: "90%", xl: "80%" }} margin="auto">
      <Navbar />
      <TitleBar> ¡Bienvenido al catalogo!</TitleBar>
      <Flex flexDir={{base:'column',xl:'row'}} >
        <Modal isOpen={isOpen} onClose={onClose} mode={mode} />
        <Box w={{base:'full',xl:'50%'}}>
          <Text  fontSize='2xl' mb='6' ml={{base:'0',xl:'4'}}>Cuerpos del sistema solar</Text>
          <Flex flexDir='column'  mx={{base:'0',xl:'4'}} mb='4' gap='4'>
            <Flex flexDir={{base:'column',xl:'row'}} gap='4'>
              <FormControl>
                <FormLabel>Fecha:</FormLabel>
                <Input
                  value={date}
                  borderRadius="xl"
                  type="date"
                  onChange={(event) => setDate(event.target.value as any)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Hora:</FormLabel>
                <Input
                  value={time}
                  borderRadius="xl"
                  type="time"
                  onChange={(event) => settime(event.target.value as any)}
                />
              </FormControl>
            </Flex>
            <Flex flexDir={{base:'column',xl:'row'}} gap='4'>
              <FormControl>
                <FormLabel>Latidud</FormLabel>
                <Input
                readOnly
                  value={latitud}
                  borderRadius="xl"
                  type="number"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Longitud</FormLabel>
                <Input
                readOnly
                  value={longitud}
                  borderRadius="xl"
                  type="number"
                />
              </FormControl>
            </Flex>
            <Button bg='primary.green' borderRadius='xl' onClick={() => {setChangeInfo(true);setInfoLoading(true)}}> Obtener info del sistema solar </Button>
          </Flex>
        <Box border='solid 2px white' margin={{base:'0',xl:'4'}} mb='4' padding='4' ml='0' borderRadius='xl' height={{base:'370px',xl:'500px'}} overflowY='scroll' className="schide">
          <Accordion allowToggle>
          {infoLoading && 
          <Spinner thickness='6px'
              speed='1s'
              emptyColor='gray.300'
              color='primary.green'
              margin='auto'
              size='xl'/>}
          {bodiesData &&
            bodiesData.map((row:any) => 
            (
            <AccordionItem key={row.entry.id} border='0' borderBottom='2px solid white'>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton _expanded={{justifyContent:'center'}}>
                      {isExpanded ? (<Box as="span" flex='1' textAlign='center' fontWeight='700' fontSize='lg'>
                        {row.entry.name}
                      </Box>) : (<Box as="span" flex='1' textAlign='start'>
                        {row.entry.name}
                      </Box>)}
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} >
                    <Flex flexDir='column' gap='3'>
                    <Text>Distancia a la tierra: <br/> {row.cells[0].distance.fromEarth.km} KMs <br/> {row.cells[0].distance.fromEarth.au} unidades astronomicas</Text>
                    <Text >Magnitud: {row.cells[0].extraInfo.magnitude}</Text>
                    <Text >Se encuentra en la constelacion de {row.cells[0].position.constellation.name}</Text>
                    <Text fontWeight='600' w='fit-content' m='auto' fontSize='xl' mt='2'>Posicion equatorial:</Text>
                    <Text>Declinación: {row.cells[0].position.equatorial.declination.string}</Text>
                    <Text>Ascensión recta: {row.cells[0].position.equatorial.rightAscension.string}</Text>
                    </Flex>
                  </AccordionPanel>
                </>
              ) }
          </AccordionItem>))
          }
          </Accordion>
        </Box>
        </Box>
        <Box w={{base:'full',xl:'50%'}}>
          <Flex flexDir='column'>
            <Text  fontSize='2xl' mb='6' >Carta estelar</Text>
            <Flex flexDir='row' gap='4'>
              <FormControl>
                <FormLabel>Constelacion</FormLabel>
                <Select color='black' defaultValue={constelacion} onChange={(event) => setConstelacion(event.target.value as any)} bg='primary.clearGray' borderRadius='lg'><option value="and">Andromeda</option><option value="ant">Antlia</option><option value="aps">Apus</option><option value="aqr">Aquarius</option><option value="aql">Aquila</option><option value="ara">Ara</option><option value="ari">Aries</option><option value="aur">Auriga</option><option value="boo">Boötes</option><option value="cae">Caelum</option><option value="cam">Camelopardalis</option><option value="cnc">Cancer</option><option value="cvn">Canes Venatici</option><option value="cma">Canis Major</option><option value="cmi">Canis Minor</option><option value="cap">Capricornus</option><option value="car">Carina</option><option value="cas">Cassiopeia</option><option value="cen">Centaurus</option><option value="cep">Cepheus</option><option value="cet">Cetus</option><option value="cha">Chamaeleon</option><option value="cir">Circinus</option><option value="col">Columba</option><option value="com">Coma Berenices</option><option value="cra">Corona Austrina</option><option value="crb">Corona Borealis</option><option value="crv">Corvus</option><option value="crt">Crater</option><option value="cru">Crux</option><option value="cyg">Cygnus</option><option value="del">Delphinus</option><option value="dor">Dorado</option><option value="dra">Draco</option><option value="equ">Equuleus</option><option value="eri">Eridanus</option><option value="for">Fornax</option><option value="gem">Gemini</option><option value="gru">Grus</option><option value="her">Hercules</option><option value="hor">Horologium</option><option value="hya">Hydra</option><option value="hyi">Hydrus</option><option value="ind">Indus</option><option value="lac">Lacerta</option><option value="leo">Leo</option><option value="lmi">Leo Minor</option><option value="lep">Lepus</option><option value="lib">Libra</option><option value="lup">Lupus</option><option value="lyn">Lynx</option><option value="lyr">Lyra</option><option value="men">Mensa</option><option value="mic">Microscopium</option><option value="mon">Monoceros</option><option value="mus">Musca</option><option value="nor">Norma</option><option value="oct">Octans</option><option value="oph">Ophiuchus</option><option value="ori">Orion</option><option value="pav">Pavo</option><option value="peg">Pegasus</option><option value="per">Perseus</option><option value="phe">Phoenix</option><option value="pic">Pictor</option><option value="psc">Pisces</option><option value="psa">Piscis Austrinus</option><option value="pup">Puppis</option><option value="pyx">Pyxis</option><option value="ret">Reticulum</option><option value="sge">Sagitta</option><option value="sgr">Sagittarius</option><option value="sco">Scorpius</option><option value="scl">Sculptor</option><option value="sct">Scutum</option><option value="ser">Serpens Cauda</option><option value="sex">Sextans</option><option value="tau">Taurus</option><option value="tel">Telescopium</option><option value="tri">Triangulum</option><option value="tra">Triangulum Australe</option><option value="tuc">Tucana</option><option value="uma">Ursa Major</option><option value="umi">Ursa Minor</option><option value="vel">Vela</option><option value="vir">Virgo</option><option value="vol">Volans</option><option value="Vul">Vulpecula</option></Select>
              </FormControl>
              <Button bg='primary.green' alignSelf='end' onClick={() => {setGenerateChart(true);setChartLoading(true)}}> Generar </Button>
            </Flex>
            <Box w='full' mt='5'>
              {starChart!=='' && <Img  borderRadius='xl' alt='startChart' src={starChart}/>}
              {chartLoading && <Spinner 
              thickness='5px'
              ml='48%'
              speed='2s'
              emptyColor='gray.200'
              color='primary.green'
              size='xl'/>}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Blog;
