import React from 'react'
import Logo from '../assets/images/logo.png'
import {Box, Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Link, Container, IconButton} from '@chakra-ui/react'
import { HamburgerIcon, AddIcon, RepeatIcon, ExternalLinkIcon, EditIcon } from '@chakra-ui/icons'

const Navbar = () => {
     const links = ['Home', 'Our Offerings', 'Our Team', 'Contact Us', 'Blog']
  return (
       
       
    <Flex  borderBottom='1px' borderColor='lightgray'  boxShadow='base'>
       <Container display='flex' padding={['10px', '0px', '0']} justifyContent='space-between' alignItems='center' maxW={['full', null, '1300px']}>

          <Menu>
               <MenuButton
                    display={{base: 'block', md: 'block', lg: 'none'}}
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
               />
               <MenuList display={{base: 'block', md: 'block', lg: 'none'}} h='100vh' pos='sticky' left='0' zIndex='10'>
               {
                    links.map((link) => (
                         <MenuItem>
                          <Link className='nav-links' textDecoration='none' transition='.2s all ease' _hover={{borderBottom: '2px solid #000'}} display='inline-block' padding="20px 10px" marginRight="30px">{link}</Link>
                    </MenuItem>
                        
                    ))
               }
               </MenuList>
          </Menu>
          <Box>
               <Image w={['40px', '50px', '55px']} src={Logo}/>
          </Box>

          <Flex display={{base: 'none', md: 'none', lg: 'block'}}>
               {
                    links.map((link) => (
                         <Link className='nav-links' textDecoration='none' transition='.2s all ease' _hover={{borderBottom: '2px solid #000'}} display='inline-block' padding="20px 10px" marginRight="30px">{link}</Link>
                    ))
               }
          </Flex>
               <Button color='white' transition='.3s all ease' _hover={{opacity: '0.8', transform: 'scale(1.02)'}} padding={['1px 10px', '20px', '30px']} fontSize={['12px', '20px', 'lg']} bg='primary'>Register Now</Button>
    </Container>
    </Flex>
  )
}

export default Navbar