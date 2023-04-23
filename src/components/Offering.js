import { Box, Card, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import Cards from './Cards'

import Image_2 from '../assets/images/image-2.png'
import Image_3 from '../assets/images/image-3.png'
import '../styles/style.css'


const Offering = (item) => {
     const [activeMenu, setActiveMenu] = useState('Pre-Booking')
     const [contentOffering, setContentOffering] = useState([])

     useEffect(() => {
          setContentOffering(offeringsCard.filter((card) => card.category === 'Pre-Booking'))
     }, [])

     const handleClick = function(item){
          setActiveMenu(item)
          console.log(contentOffering)
          setContentOffering(offeringsCard.filter(item => item.category.includes(activeMenu)))
     }
     


     const offeringsCard = [
          {
               headText: 'Background Verification',
               image: `${Image_2}`,
               text: 'We provide personalized verification reports on project and developer credibility to empower clients in making informed decisions.',
               category: 'Pre-Booking',
     },
     {
          headText: 'Background Verification',
          image: `${Image_2}`,
          text: 'We provide personalized verification reports on project and developer credibility to empower clients in making informed decisions.',
          category: 'Pre-Booking',
},
     {
          headText: 'Virtual Site Visit',
          image: `${Image_3}`,
          text: "Our AI-powered unmanned aerial vehicle (UAV) system provides meticulous examination of your property. Simply provide date and time, and we'll provide live streaming and recordings.",
          category: 'Post-Registration',
     },
]

  return (
    <Box marginBottom='35px'>
          <Box>
               <Heading margin='70px auto 0' paddingBottom='10px' width='fit-content' borderBottom='4px solid gray'>our offerings</Heading>
               <Text marginTop= '20px' textAlign='center'>This Real Estate purchase journey can be divided into three stages. For more details, Click Here</Text>
          </Box>

          <Flex flexWrap='wrap' alignItems='center' justifyContent='center' gap='20px' marginTop='35px'>
               {
                    ['Pre-Booking', 'Post-Booking & Pre-Registration', 'Post-Registration'].map((item, index) => (
                         <Flex className={`${activeMenu === item? 'active': ''}`} justifyContent='center' cursor='pointer' alignItems='center' bgColor='#F2F4F6' height='100px' width={['100px', '270px', '370px']} onClick={()=>handleClick(item)}>
                         <Text borderRadius='50%' padding='15px 20px' marginRight='20px' bgColor='#fff'>{index + 1}</Text>
                         <Text>{item}</Text>
                         </Flex>
                    ))
               }

          </Flex>
               <Flex justifyContent='center' color='blue.100' flexWrap='wrap' gap='30px' marginTop='70px'>
                    {
                         contentOffering.map((item) => (
                              <Cards card={item}/>
                         ))
                    }
               </Flex>
    </Box>
  )
}

export default Offering