import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`
  },

    colors: {
      primary: '#002550',
      primaryTextColor: '#1A1A1A',
    }
})

export default theme;