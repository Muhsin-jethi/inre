import React from 'react'
import Logo from '../assets/images/logo.png'
import {Box, Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Link, IconButton} from '@chakra-ui/react'
import { HamburgerIcon, AddIcon, RepeatIcon, ExternalLinkIcon, EditIcon } from '@chakra-ui/icons'

const Navbar = () => {
     const links = ['Home', 'Our Offerings', 'Our Team', 'Contact Us', 'Blog']
  return (
    <Flex justifyContent='space-between' alignItems='center' h='60px' borderBottom='1px' borderColor='lightgray'  boxShadow='base'>

          <Menu>
               <MenuButton
                    display={{base: 'block', md: 'block', lg: 'none'}}
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
               />
               <MenuList display={{base: 'block', md: 'block', lg: 'none'}} h='100vh' pos='sticky' left='0' zIndex='10'>
                    <MenuItem icon={<AddIcon />} command='⌘T'>
                         New Tab
                    </MenuItem>
                    <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                         New Window
                    </MenuItem>
                    <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
                         Open Closed Tab
                    </MenuItem>
                    <MenuItem icon={<EditIcon />} command='⌘O'>
                         Open File...
                    </MenuItem>
               </MenuList>
          </Menu>
          <Box>
               <Image w='60px' src={Logo}/>
          </Box>

          <Flex display={{base: 'none', md: 'none', lg: 'block'}}>
               {
                    links.map((link) => (
                         <Link padding="10px" marginRight="30px">{link}</Link>
                    ))
               }
               <Button colorScheme='blue'>Register Now</Button>
          </Flex>
    </Flex>
  )
}

export default Navbar