import { Box, Flex, Image, List, ListItem, ListIcon, Heading, Text, Link  } from '@chakra-ui/react'
import React from 'react'
import { ArrowForwardIcon,EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import LogoWhite from '../assets/images/logowhite.png'
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <div style={{marginTop: '70px', backgroundColor: '#002550', color: '#fff', paddingTop: '30px'}}>
        <Flex flexWrap='wrap' justifyContent='space-between'>
            <Box>
              <Image  boxSize='70px' src={LogoWhite} size='sm'/>
            </Box> 

            <Box>
                <Heading size='md' marginBottom='20px'>Company</Heading>

                <List color='#ccc'  spacing={6}>
                  <ListItem>
                    <ListIcon as={ArrowForwardIcon} color='#ccc' />
                      Home
                  </ListItem>
                  <ListItem>
                    <ListIcon as={ArrowForwardIcon} color='#ccc' />
                      Our offerings
                  </ListItem>
                  <ListItem>
                    <ListIcon as={ArrowForwardIcon} color='#ccc' />
                      Our Team
                  </ListItem>
                  {/* You can also use custom icons from react-icons */}
                  <ListItem>
                    <ListIcon as={ArrowForwardIcon} color='#fff' />
                        Contact Us
                  </ListItem>
                </List>
            </Box>

            <Box>
                <Heading size='md' marginBottom='20px'>Useful Links</Heading>

                <List spacing={6}>
                  <ListItem color='#ccc' >
                    <ListIcon as={ArrowForwardIcon} color='#ccc' />
                      Blogs
                  </ListItem>
                  <ListItem color='#ccc' >
                    <ListIcon as={ArrowForwardIcon} color='#ccc' />
                      FAQs
                  </ListItem>
                </List>
            </Box>

            <Box>
                <List spacing={6}>
                  <ListItem>
                    <Flex alignItems='center' gap='10px'>
                    <ListIcon as={EmailIcon} color='#ccc' boxSize={7}/>
                        <Box>
                            <Heading as='h3' size='md'>Email:</Heading>
                            <Text color='#ccc' >support@inreglobal.com</Text>
                        </Box>
                    </Flex>
                  </ListItem>

                  <ListItem>
                    <Flex alignItems='center' gap='10px'>
                    <ListIcon as={PhoneIcon} color='#ccc' boxSize={7}/>
                        <Box>
                            <Heading as='h3' size='md'>Phone:</Heading>
                            <Text color='#ccc' >+91 | 7019305889</Text>
                        </Box>
                    </Flex>
                  </ListItem>
                 
                </List>
            </Box>
        </Flex>

        <Flex justifyContent='space-between' padding='40px 0 20px'>
          <Text>Copyright 2023. Designed by INRE Global</Text>
          <Flex gap='30px'>
          <Link href='https://chakra-ui.com' isExternal display='flex'  gap='20px'>
              <AiOutlineLinkedin mx='10px' /> LinkedIn
          </Link>

          <Link href='https://chakra-ui.com' display='flex'  gap='20px'>
              <AiOutlineFacebook mx='10px' /> Facebook
          </Link>

          <Link href='https://chakra-ui.com' isExternal display='flex'  gap='20px'>
              <AiOutlineInstagram /> Instagram
          </Link>
          </Flex>
        </Flex>
    </div>
  )
}

export default Footer