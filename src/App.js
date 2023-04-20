import { Box, Text, Flex, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import HeroImage from './assets/images/hero.png'
import About from "./components/About";
import Footer from "./components/Footer";
import Offering from "./components/Offering";
import Team from "./components/Team";
import Blog from './components/Blog'
import Contact from "./components/Contact";

function App() {
  return (
    <>
    
        <Navbar />

          
          <Container  maxW={['fit-content', null, '1300px']}>
              <Flex alignItems='center' paddingLeft={['1rem', '2rem', '3rem']}  marginTop={['20px', '45px', '70px']} rounded='10px 10px' backgroundImage={HeroImage} backgroundSize='cover' height={[160, null, 480]} backgroundPosition='center' style={{position: 'relative'}}>
                <Box bgGradient= 'linear(90deg, #000a 27.51%, rgba(0, 0, 0, 0) 100%)' style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}></Box>
                <Text fontSize={['lg', '2xl', '4xl']} color='#fff' position='relative' zIndex='2' width={450} textTransform='capitalize'>
                    Making your <b style={{fontSize: '5xl'}}>real<br/> estate</b> purchase<br/>journey faster, reliable and transpaent
                </Text>
              </Flex>

              <About />
          

              <Offering/>

              <Team />

              <Blog />

              <Contact />
              <Footer />
        </Container>
    </>
  );
}

export default App;
