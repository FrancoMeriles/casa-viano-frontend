import React from 'react'
import { Box, Container, Text, Button, Image, Heading } from '@chakra-ui/react'
import { FaAngleRight } from 'react-icons/fa'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRouter } from 'next/router'

const Hero = () => {
  const router = useRouter()

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots fran',
  }

  return (
    <Box position="relative" pb="80px">
      <Box
        bg="brand.500"
        position="absolute"
        bottom="0"
        height={{
          base: '800px',
          md: '400px',
        }}
        width="100%"
      />
      <Container>
        <Slider {...settings}>
          <Box position="relative">
            <Image
              src="https://dummyimage.com/1200x600/e0e0e0/7d7d7d"
              alt="imagen 1"
            />
            <Box
              mt={{
                base: '40px',
                md: '0',
              }}
              mb={{
                base: '40px',
                md: '0',
              }}
              position={{
                base: 'relative',
                md: 'absolute',
              }}
              top={{
                base: '0',
                md: '50%',
              }}
              pl={{
                base: '0',
                md: '40px',
              }}
              transform={{
                base: 'inherit',
                md: 'translateY(-50%)',
              }}
              maxW="600px"
            >
              <Heading
                fontSize="6xl"
                fontWeight="bold"
                color={{
                  base: 'white',
                  md: 'black',
                }}
                lineHeight="70px"
                mb="10px"
              >
                Comprá la mejor maquinaría usada del mercado
              </Heading>
              <Text
                fontSize="2xl"
                color={{
                  base: 'white',
                  md: 'black',
                }}
                mb="20px"
              >
                Mirá nuestro amplio catálogo y recibí asesoramiento
                personalizado ahora.
              </Text>
              <Button
                size="lg"
                bg="white"
                borderRadius="20px"
                _hover={{
                  bg: 'brand.500',
                  color: 'white',
                }}
                onClick={() => router.push(`/catalogo`)}
              >
                Ver productos
              </Button>
              <Button
                size="lg"
                ml="10px"
                bg={{
                  base: 'brand.500',
                  md: 'transparent',
                }}
                color={{
                  base: 'white',
                  md: 'inherit',
                }}
                _hover={{
                  bg: 'brand.500',
                  color: 'white',
                }}
                borderRadius="20px"
                rightIcon={<FaAngleRight />}
                onClick={() => console.log('se clickeo btn 2')}
              >
                Contactar Vendedor
              </Button>
            </Box>
          </Box>
          <div>
            <Image
              src="https://dummyimage.com/1200x600/e0e0e0/7d7d7d"
              alt="imagen 1"
            />
          </div>
          <div>
            <Image
              src="https://dummyimage.com/1200x600/e0e0e0/7d7d7d"
              alt="imagen 1"
            />
          </div>
          <div>
            <Image
              src="https://dummyimage.com/1200x600/e0e0e0/7d7d7d"
              alt="imagen 1"
            />
          </div>
          <div>
            <Image
              src="https://dummyimage.com/1200x600/e0e0e0/7d7d7d"
              alt="imagen 1"
            />
          </div>
          <div>
            <Image
              src="https://dummyimage.com/1200x600/e0e0e0/7d7d7d"
              alt="imagen 1"
            />
          </div>
        </Slider>
      </Container>
    </Box>
  )
}

export default Hero
