import { extendTheme }  from "@chakra-ui/react";

const styles = {
    global:{
        'html, body':{
            color:'#83c481',
            bg: '#F3FBF3'
        }
    }
}
const colors = {
    brand:{
        primary: '#2A4A29', 
        secondary: '#457244',
        third: '#639B61',
        room: '#83C481',
        fifth:'#A6EDA3',
        six: '#F3FBF3'

    }
}

const fonts = {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif' 

}


const Button ={
    variants : {
        outline:{
            bg:'brand.primary',
            color:'brand.six',
            _hover:{
                bg:'brand.secondary',
                color:'brand.six',
                fontWeight:'bold'
            }
        }
    }
}

export const theme = extendTheme({styles, colors, fonts, components: {
    Button
}})