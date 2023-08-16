import { extendTheme }  from "@chakra-ui/react";

const styles = {
    global:{
        'html, body':{
            color:'#fefee2',
            bg: '#83c481'
        }
    }
}
const colors = {
    brand:{
        primary: '#83c481', 
        secondary: '#add8ac',
        third: '#c8e5c8',
        room: '#fdfdc4',
        fifth:'#fefee2'
    }
}

const fonts = {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif' 

}


const Button ={
    variants : {
        outline:{
            bg:'#fefee2',
            color:'brand.primary',
            _hover:{
                bg:'brand.secondary',
                color:'#fefee2',
                fontWeight:'bold'
            }
        }
    }
}

export const theme = extendTheme({styles, colors, fonts, components: {
    Button
}})