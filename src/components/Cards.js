import React from 'react'
import { Card, Stack, CardBody, CardFooter, Image, Divider, Text, Heading, Box, Button, Icon, Flex } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const Cards = ({card: {image, text, headText, date, pos, author}}) => {
  console.log(image)
  return (
     <Card maxW='sm'>
     <CardBody>
       <Image
         src={image}
         alt='index'
         borderRadius='lg'
         fallbackSrc='https://via.placeholder.com/150'
       />
       <Stack mt='6' spacing='3'>
        {
            date && <Flex justifyContent='space-between'>
              <Text>{date}</Text>
              <Text color='#bbb'>{author}</Text>
            </Flex>
        }
        <Flex />
         <Box display='flex' justifyContent='space-between'> 
         
              <Heading size='md'>{headText} </Heading>
              {
                pos && 
                <Text color='#bbb'>{pos}</Text>
              }
         </Box>
         <Text color='#1a1a1a' opacity='0.6' fontSize='16px' padding='10px 0'>
               {text}
         </Text>
       </Stack>
     </CardBody>
     <CardFooter>
         <Button variant='outline' colorScheme='blue'>
           View More &nbsp;  <Icon as={ArrowForwardIcon} />
         </Button>
     </CardFooter>
   </Card>
  )
}

export default Cards