import React from 'react'
import Cards from './Cards'
import { Box, Flex, Heading } from '@chakra-ui/react'
import Team01 from '../assets/images/team-1.png'
import Team02 from '../assets/images/team-2.png'
import Team03 from '../assets/images/team-3.png'


const Team = () => {
     const teams = [
          {
               headText: 'Brajesh Pathak',
               image: `${Team01}`,
               pos: 'Co-Founder',
               text: "Brajesh Pathak, a professional with dual qualifications as a Chartered Accountant and Company Secretary, possesses more than ten years of expertise in overseeing venture capital funds that focus on the real estate industry."
          },
          {
               headText: 'Deepak Shukla',
               image: `${Team02}`,
               pos: 'Co-Founder',
               text: "Deepak Shukla, an alumnus of the Indian Institute of Technology (IIT) Kharagpur and a graduate of the prestigious Indian Institute of Management (IIM) Ahmedabad, has amassed an impressive 11 years of professional experience."
          },
          {
               headText:'ASingh',
               image: `${Team03}`,
               pos: 'Advisor',
               text: "Alok kumar Singh, An Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital."
          }
     ]
  return (
    <Box bgColor='#F2F4F6' padding='35px 0'>
          <Heading margin='0 auto 0' borderBottom='5px solid black' width='fit-content'>Our Team</Heading>
          <Flex justifyContent='center' flexWrap='wrap' gap='30px' borderBottom='20pcnn' marginTop='70px'>
                    {
                         teams.map((card) => (
                              <Cards card = {card} />
                         ))
                    }
               </Flex>
    </Box>
  )
}

export default Team