import React from 'react'
import { Box, Container, Text, Button, Image, Heading } from '@chakra-ui/react'
import Slider from 'react-slick'

import { useRouter } from 'next/router'

import { MessagesInterface } from '@customTypes/messages'

interface Props {
  messages: MessagesInterface
}

const Hero = ({ messages }: Props) => {
  const router = useRouter()

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots header',
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
                fontSize={{
                  base: '5xl',
                  md: '6xl',
                }}
                fontWeight="bold"
                color={{
                  base: 'white',
                  md: 'black',
                }}
                lineHeight={{
                  base: '65px',
                  md: '70px',
                }}
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
                mr="10px"
                mb="10px"
                borderRadius="50px"
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
                variant="outline"
                borderRadius="50px"
                onClick={() =>
                  window.open(
                    `https://wa.me/${messages.phone}?text=${messages.content}`,
                    '_blank'
                  )
                }
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
