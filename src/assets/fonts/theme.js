import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  colors: {
    body:{
      text: '#1A1A1A'
    },
    colors: {
      blue: {
        100: 'red'
      }
    }
  }
})

export default theme;