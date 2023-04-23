import { Box, Flex, Image, List, ListItem, ListIcon, Heading, Text, Link, Container  } from '@chakra-ui/react'
import React from 'react'
import { ArrowForwardIcon,EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import LogoWhite from '../assets/images/logowhite.png'
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bg='primary' style={{marginTop: '70px', color: '#fff', padding: '30px 30px 0'}}>
      <Container maxW={['fit-content', null, '1300px']}>
        <Flex flexWrap='wrap' justifyContent='space-between'>
            <Link>
              <Image  boxSize='70px' src={LogoWhite} size='sm'/>
            </Link> 

            <Box>
                <Heading size='md' marginBottom='20px'>Company</Heading>

                <List color='#ccc'  spacing={6}>
                  <ListItem>
                    <Link>Home</Link>
                  </ListItem>
                  <ListItem>
                      <Link>Our offerings</Link>
                  </ListItem>
                  <ListItem>
                  <Link>Our Team</Link>
                  </ListItem>
                  {/* You can also use custom icons from react-icons */}
                  <ListItem>
                        <Link>Contact Us</Link>
                  </ListItem>
                </List>
            </Box>

            <Box>
                <Heading size='md' marginBottom='20px'>Useful Links</Heading>

                <List spacing={6}>
                  <ListItem color='#ccc' >
                  
                      Blogs
                  </ListItem>
                  <ListItem color='#ccc' >
                  
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

        <Flex flexWrap='wrap' justifyContent='space-between' padding='40px 0 20px'>
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
      </Container>
    </Box>
  )
}

export default Footer