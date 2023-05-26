import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors:{
        primary:{
            black: '#323236',
            white: '#E9E9E9',
            clearGray: '#E0E0E0'
        }
    },
    styles:{
        global:{
            body:{
                bg:'primary.black',
                color:'white'
            }
        }
    }
})