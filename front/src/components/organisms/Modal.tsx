import { Box, Button, Modal as ChakraModal, Flex, FormControl, FormLabel, Input, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { LocaleRouteNormalizer } from "next/dist/server/future/normalizers/locale-route-normalizer";
import { useState } from "react";

type Props = {
    isOpen:boolean,
    onClose:() => void
    mode:string,
    abbleToClose?:boolean
}



const Modal = (props:Props) => {
    const [mode, setMode] = useState(props.mode);
    const [error, setError] = useState(false);

    const [usuario, setUsuario] = useState('');
    const [pass, setPass] = useState('');

    const [close, setClose] = useState(props.abbleToClose)

    const bd = process.env.NEXT_PUBLIC_BD;

    const  r = async() => {
        if(usuario.length > 0 && pass.length > 0){
            const comp = fetch(`${bd}users/${usuario}`,{method:'GET'}).then((res) => {
                if(res.ok){
                    window.alert('Ya existe un usuario con ese nombre')
                    return res.json()
                }else{
                    const data = fetch(`${bd}users`,{
                        method:'POST',
                        headers:{"Content-Type":"application/json"},
                        body: JSON.stringify({ "id":usuario,"password":pass,"p_latitud": "","p_longitud": ""}),
                        }).then((res) => {
                        if(res.ok){
                            setError(false);
                            window.alert('Cuenta creada')
                            setMode('login');
                            return res.json()
                        }
                    });
                }
            });
        }
        

    }
    const  l = async() => {
        
        const data = fetch(`${bd}users/${usuario}`,{method:'GET'}).then((res) => {
            if(res.ok){
                setError(false);
                return res.json()
            }else{
                setError(true);
            }
        }).then((data) =>{
            if(pass === data.password){
                localStorage.setItem('user',JSON.stringify(data));
                window.alert('Sesion iniciada')
                setClose(true);
                props.onClose()
            }else{
                setError(true);
            }
            
        });

        
    }
    return ( 
        <ChakraModal isOpen={props.isOpen} onClose={close ? props.onClose : ()=>{}} size='full'>
            <ModalOverlay />
                <ModalContent bg='primary.clearBlack'>
                    {props.abbleToClose && <ModalCloseButton bg='primary.clearBlack' border='2px solid' borderColor='primary.green' width='50px' height='50px'
                    _hover={{bg:'red.500', borderColor:'red.500'}}/>}
                    <ModalBody alignItems='center'>
                    <Box w={{base:'full',xl:'350px'}} h={{base:'full',xl:'430px'}} border='2px solid white' borderRadius='xl'p='4' m='auto' mt={{base:'100px',xl:'200px'}}>
                    <Flex flexDir='column'  gap='8'>
                        <FormControl>
                            <FormLabel>Nombre</FormLabel>
                            <Input
                            value={usuario}
                            required
                            onChange={(event) => setUsuario(event.target.value)}
                            borderWidth='2px'
                            fontWeight='600'
                            borderRadius="xl"
                            type="text"
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Contraseña</FormLabel>
                            <Input
                            value={pass}
                            required
                            onChange={(event) => setPass(event.target.value)}
                            borderWidth='2px'
                            fontWeight='600'
                            borderRadius="xl"
                            type="password"
                            />
                        </FormControl>
                        {error && <Text px='2' py='2' borderRadius='lg' color='white' bg='red.400' textAlign='center' fontWeight='500'> Usuario o contraseña incorrecto</Text>}
                        {mode === 'register' ? <Button bg='primary.green' onClick={() => r()}>Registrarse</Button> :
                        <Button bg='primary.green' onClick={() => l()}>Inicar sesion</Button>}
                        {mode === 'register' ? <Button bg='blue.500' onClick={() => setMode('login')}>Ya tienes cuenta?</Button> : 
                        <Button bg='blue.500' onClick={() => setMode('register')}>No tienes cuenta?</Button>}
                        
                    </Flex>
                    </Box>
                    </ModalBody>
                </ModalContent>
        </ChakraModal>
     );
}
 
export default Modal;