import TitleBar from "@/components/molecules/TitleBar";
import Modal from "@/components/organisms/Modal";
import Navbar from "@/components/organisms/Navbar";
import {Box, Button, Flex, FormControl, FormLabel, Input, Text, useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";



const Perfil = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [mode, setMode] = useState('login');
  const [user, setUser] = useState<any>({});
  const [latitud, setLatitud] = useState(user.p_latitud ? user.p_latitud : '36.9195');
  const [longitud, setLongitud] = useState(user.p_longitud ? user.p_longitud :"-6.0781");
  const[name,setname] = useState();

  const MapWithNoSSR = dynamic(() => import("../../components/organisms/Map"), {
    ssr: false,
  });

  if(typeof localStorage!== 'undefined' && !user?.id){
    const u = localStorage.getItem('user');
    const user = JSON.parse(u as string);
    if(user?.id){
      setUser(user)
      setname(user.id)
      setLatitud(user.p_latitud)
      setLongitud(user.p_longitud)
    }else{
      if(!isOpen){
        onOpen()
      }
    }
  }

  const bd = process.env.NEXT_PUBLIC_BD;
  const saveLocation = async () => {
    const newUser = {'id':user.id, 'password':user.password,"p_latitud": latitud,"p_longitud": longitud};
    console.log(newUser)
    const del = await fetch(`${bd}users/${newUser.id}`,{
      method:'DELETE',
      headers:{"Content-Type":"application/json"},
      });

    const data = fetch(`${bd}users`,{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(newUser),
      }).then((res) => {
      if(res.ok){
          window.alert('Datos modificados')
          return res.json()
      }
  });
  }
 
  return (
    <Box w={{ base: "100%", lg: "90%", xl: "80%" }} margin="auto">
      <Navbar />
      <TitleBar> PERFIL </TitleBar>
      <Modal isOpen={isOpen} onClose={onClose} mode={mode} />
      <Flex mb='4' w='full' gap='4'>
      <FormControl w={{base:'full',xl:'300px'}}>
        <FormLabel>Nombre:</FormLabel>
        <Input
          readOnly
          value={name}
          borderWidth='2px'
          fontWeight='600'
          borderRadius="xl"
          type="text"
        />
      </FormControl>
      <Link href='/' style={{alignSelf:'end',marginLeft:'auto'}}><Button w={{base:'full',xl:'146.19px'}} ml='auto' alignSelf='end' bg='red.600' onClick={() => localStorage.removeItem('user')}>Cerrar sesion</Button></Link>
      </Flex>
      <Text fontSize='2xl' fontWeight='600'>Cambiar contraseña</Text>
      <Flex gap='4' my='4' flexDir={{base:'column',xl:'row'}} >
      <FormControl>
        <FormLabel>Nueva contraseña</FormLabel>
        <Input
          borderWidth='2px'
          fontWeight='600'
          borderRadius="xl"
          type="text"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Repita contraseña</FormLabel>
        <Input
          borderWidth='2px'
          fontWeight='600'
          borderRadius="xl"
          type="text"
        />
      </FormControl>
      <Button w={{base:'full',xl:'300px'}} alignSelf='end' bg='primary.green'> Guardar</Button>
      </Flex>
      <Flex flexDir='column'>
        <Flex>
        <Text> Seleccione tu ubicación predeterminada:</Text>
        <Button w={{base:'full',xl:'300px'}} alignSelf='end' ml='auto' bg='purple.700' onClick={() => saveLocation()}> Guardar ubicacion</Button>
        </Flex>
        <Flex flexDir={{base:'column',xl:'row'}} gap='4'>
              <FormControl>
                <FormLabel>Latidud</FormLabel>
                <Input
                  onChange={(event) => setLatitud(event.target.value)}
                  value={latitud}
                  borderRadius="xl"
                  type="number"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Longitud</FormLabel>
                <Input
                  onChange={(event) => setLongitud(event.target.value)}
                  value={longitud}
                  borderRadius="xl"
                  type="number"
                />
              </FormControl>
            </Flex>
      </Flex>
    </Box>
  );
};

export default Perfil;
