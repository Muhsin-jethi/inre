import { Flex, Heading, Box } from '@chakra-ui/react'
import React from 'react'
import Cards from './Cards'
import Image04 from '../assets/images/image-4.png'
import Image05 from '../assets/images/image-5.png'
import Image06 from '../assets/images/image-6.png'

const Blog = () => {

     const blogs = [
          {
          headText: 'Application of Blockchain in real estate industry',
          image: `${Image04}`,
          text: 'Blockchain technology has been considered as one of the most revolutionary technological advances in recent years. Astonishing results are also visible in real estate sector through application of blockchain.',
          date: '02 April 2022',
          author: 'By Deepak'
     },
     {
          headText: 'Real estate purchase Challenges in Bengaluru',
          image: `${Image05}`,
          text: "There are several problems faced by buyers in real estate market of Bengaluru.  Delayed possession, lack of transparency, high prices and legal issues are some of these.",
          date: '02 April 2022',
          author: 'By Brajesh'
     },
     {
     headText: 'Artificial Intelligence in Real estate sector',
     image: `${Image06}`,
     text: "Artificial Intelligence (AI). AI has already made its presence felt in numerous industries, from finance to healthcare, and real estate is no exception.",
     date: '02 April 2022', 
     author: 'By Deepak'
     },
]

  return (
     <Box bgColor='#F2F4F6' padding='35px 0'>
          <Heading margin='0 auto 30px' width='fit-content' borderBottom='5px solid black'>Blogs</Heading>

          <Flex justifyContent='center' flexWrap='wrap' gap='30px'>
               {
                    blogs.map((blog) => (
                         <Cards  card={blog}/>
                    ))
               }
          </Flex>
    </Box>
  )
}

export default Blog