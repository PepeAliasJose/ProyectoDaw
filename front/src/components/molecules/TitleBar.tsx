import { Flex, Text } from "@chakra-ui/react";

type Props = {
    children:string
}

const TitleBar = (props:Props) => {
    return ( 

        <Flex
          my={3}
          backgroundColor='primary.green'
          color='primary.white'
          borderRadius='2xl'
          shadow='md'
          padding={2}
          alignContent='center'
        >
            <Text
              textAlign='center'
              mx='auto'
              fontSize='3xl'
              fontWeight='bolder'
            >
              {props.children}
            </Text>
        </Flex>
    );
}
 
export default TitleBar;