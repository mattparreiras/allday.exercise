import {extendTheme} from '@chakra-ui/react'

export const theme = extendTheme({
  colors:{
    gray:{
      '200':'#E5E5E5',
      '700':'#444444'
    }
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
