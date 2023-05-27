import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors:{
        primary:{
            black: '#000',
            clearBlack: '#202028',
            veryDark:'#0F0E15',
            gray:'#343434',
            green:'#26C29A',
            clearWhite: '#E9E9E9',
            white: '#FEFEFE',
            clearGray: '#E0E0E0'
        }
    },
    styles:{
        global:{
            body:{
                bg:'primary.gray',
                color:'white'
            }
        }
    }
})