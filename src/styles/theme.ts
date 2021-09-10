import {extendTheme} from '@chakra-ui/react'

export const theme = extendTheme({
  colors:{
    blue:{
      '400':'#0D6EF0',
      '600':'#0547A0'
    },
    gray:{
      '50':'#f1f1f1',
      '200':'#E5E5E5',
      '300':'#E8E8E8',
      '600':'#4B4B4B',
      '700':'#444444'
    }
  },
  fonts:{
    heading:'Bungee',
  },
  styles:{
    global:{
      body:{
        bg:'gray.200',
        color:'gray.700'
      }
    }
  }
})
