import { Button, Flex, Heading, Image, Box, Text } from '@chakra-ui/react'
import AboutImage from '../assets/images/about.png'
import React from 'react'

const About = () => {
  return (
    <Flex gap={['10px', '20px', '30px']} flexWrap='wrap' padding={['10px', '20px', '30px']} marginTop={['20px', '45px', '70px']} backgroundColor="#E6EAEE">
          <Image flex='1' src={AboutImage}/>

          <Box flex='1'>
               <Heading size={['16px', '18px', 'xl']}>Who Are We</Heading>
               <Text margin='20px 0' fontSize={['12px', '14px', '16px']} noOfLines={[5, 7, 9]}>
               Despite facing global challenges, the Indian real estate industry has shown remarkable resilience. According to a report by Niti Aayog in 2021, the sector is expected to grow to a market size of US$1 trillion by 2030, and the returns have been impressive. However, the process of purchasing real estate in India is quite arduous and can take more than two years on average. Additionally, since the investment required for real estate is significant, trust and security are crucial factors. These challenges become even more complicated when one is not present in the location of the property. If you are facing difficulties during your real estate...
               </Text>
               <Button colorScheme='primary' variant='outline'>Contact Us</Button>
          </Box>
    </Flex>
  )
}

export default About