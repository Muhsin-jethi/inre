import { Box, Heading, FormControl, FormLabel, Flex, Image, Input, Select,  Button } from '@chakra-ui/react'
import React from 'react'
import ContactImage from '../assets/images/contact.png'

const Contact = () => {
  return (
    <Box>
          <Heading margin='35px auto 30px' width='fit-content' borderBottom='5px solid black'>Contact Us</Heading>

          <Flex justifyContent='space-between' flexWrap={{base: 'wrap', md: 'nowrap', lg: 'nowrap'}}>
              <Box className=''>
                <Heading as='h4' fontSize='lg'>Please provide below details</Heading>
                <form style={{flex: '1', margin: '40px 0', gap: '20px', display: 'flex', flexWrap: 'wrap'}}>
                <FormControl width={['fit-content', '250px', '302px']}>
                  <FormLabel>Fullname</FormLabel>
                  <Input type='text' />
                </FormControl>

                <FormControl width={['full', '300px', '320px']} isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input type='email' />
                </FormControl>

                <FormControl width={['full', '300px', '320px']}>
                <FormLabel>Country</FormLabel>
                <Select placeholder='Select country'>
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
                </FormControl>

                <FormControl width={['full', '300px', '320px']}>
                <FormLabel>Stages</FormLabel>
                <Select placeholder='Select country'>
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
                </FormControl>

                <Button
                  mt={4}
                  colorScheme='teal'
                  bg='primary'
                  type='submit'
                  w={['full', '200px', '320px']}
                >
                   Submit
                </Button>
                </form>
              </Box>
              <Image flex='1' src={ContactImage} />
          </Flex>

          

    </Box>
  )
}

export default Contact