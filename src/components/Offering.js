import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Cards from './Cards'

import Image_2 from '../assets/images/image-2.png'
import Image_3 from '../assets/images/image-3.png'

const Offering = () => {

     const offeringsCard = [
          {
          headText: 'Background Verification',
          image: `${Image_2}`,
          text: 'We provide personalized verification reports on project and developer credibility to empower clients in making informed decisions.',
     },
     {
          headText: 'Virtual Site Visit',
          image: `${Image_3}`,
          text: "Our AI-powered unmanned aerial vehicle (UAV) system provides meticulous examination of your property. Simply provide date and time, and we'll provide live streaming and recordings."
     },
]
  return (
    <Box marginBottom='35px'>
          <Box>
               <Heading margin='70px auto 0' paddingBottom='10px' width='fit-content' borderBottom='4px solid gray'>our offerings</Heading>
               <Text marginTop= '20px' textAlign='center'>This Real Estate purchase journey can be divided into three stages. For more details, Click Here</Text>
          </Box>

          <Flex flexWrap='wrap' alignItems='center' justifyContent='center' gap='20px' marginTop='35px'>
               <Flex justifyContent='center' alignItems='center' bgColor='#F2F4F6' height='100px' width={['100px', '200px', '330px']}>
                    <Text borderRadius='50%' padding='15px 20px' marginRight='20px' bgColor='#fff'>1</Text>
                    <Text>Pre-Booking</Text>
               </Flex>

               <Flex justifyContent='center' alignItems='center' bgColor='#F2F4F6' height='100px' width={['100px', '200px', '330px']}>
                    <Text borderRadius='50%' padding='15px 20px' marginRight='20px' bgColor='#fff'>2</Text>
                    <Text noOfLines='2'>Post-Booking & <br/>Pre-Registration</Text>
               </Flex>

               <Flex justifyContent='center' alignItems='center' bgColor='#F2F4F6' height='100px' width={['100px', '200px', '330px']}>
                    <Text borderRadius='50%' padding='15px 20px' marginRight='20px' bgColor='#fff'>3</Text>
                    <Text>Post-Registration </Text>
               </Flex>

          </Flex>
               <Flex justifyContent='center' color='blue.100' flexWrap='wrap' gap='30px' marginTop='70px'>
                    {
                         offeringsCard.map((card) => (
                              <Cards card = {card} />
                         ))
                    }
               </Flex>
    </Box>
  )
}

export default Offering