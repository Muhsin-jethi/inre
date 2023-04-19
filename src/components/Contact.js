import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import ContactImage from '../assets/images/contact.png'

const Contact = () => {
  return (
    <Box>
          <Heading margin='35px auto 30px' width='fit-content' borderBottom='5px solid black'>Contact Us</Heading>

          <Image src={ContactImage} />
    </Box>
  )
}

export default Contact