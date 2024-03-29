import React from 'react'
import {
  Box,
  Container,
  Text,
  Button,
  Image,
  Heading,
  LinkOverlay,
} from '@chakra-ui/react'
import Slider from 'react-slick'
import { BiChevronRight } from 'react-icons/bi'

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
    <Box
      position="relative"
      pb={{
        base: '0px',
        md: '80px',
      }}
    >
      <Box
        bg={{
          base: 'transparent',
          md: 'brand.500',
        }}
        position="absolute"
        bottom="0"
        height={{
          base: '800px',
          md: '400px',
        }}
        width="100%"
      />
      <Container
        padding={{
          base: '0px',
          md: 'auto',
        }}
      >
        <Slider {...settings}>
          <Box position="relative">
            <Image
              src="/img/slider-10.jpeg"
              alt="imagen 1"
              height={{
                base: '452px',
                md: 'auto',
              }}
              objectFit={{
                base: 'cover',
                md: 'inherit',
              }}
              objectPosition={{
                base: 'right',
                md: 'right',
              }}
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
                base: 'absolute',
              }}
              top={{
                base: '0',
                md: '50%',
              }}
              p={{
                base: '10px',
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
                color="white"
                lineHeight={{
                  base: '50px',
                  md: '70px',
                }}
                mb="10px"
                display={{
                  base: 'none',
                  sm: 'block',
                }}
              >
                Comprá la mejor maquinaría usada del mercado
              </Heading>
              <Heading
                fontSize={{
                  base: '5xl',
                  md: '6xl',
                }}
                fontWeight="bold"
                color="white"
                lineHeight={{
                  base: '50px',
                  md: '70px',
                }}
                mb="10px"
                display={{
                  base: 'block',
                  sm: 'none',
                }}
              >
                Comprá la mejor maquinaría del mercado
              </Heading>
              <Text
                fontSize="2xl"
                color="white"
                display={{
                  base: 'none',
                  md: 'block',
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
                mt={{
                  base: '40px',
                  sm: '20px',
                }}
                borderRadius="50px"
                _hover={{
                  bg: 'brand.500',
                  color: 'white',
                }}
                width={{
                  base: '100%',
                  sm: 'auto',
                }}
                onClick={() => router.push(`/catalogo`)}
              >
                Ver catálogo
              </Button>
              <Button
                size="lg"
                width={{
                  base: '100%',
                  sm: 'auto',
                }}
                mt={{
                  base: '10px',
                  sm: '10px',
                }}
                _hover={{
                  background: 'none',
                }}
                rightIcon={<BiChevronRight />}
                variant="ghost"
                color="white"
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
          <Box position="relative">
            <LinkOverlay href="/catalogo/used">
              <Image src="/img/slider-2.jpg" alt="usados" />
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
                  base: 'absolute',
                }}
                top={{
                  base: '0',
                  md: '50%',
                }}
                p={{
                  base: '10px',
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
                  color="white"
                  lineHeight={{
                    base: '50px',
                    md: '70px',
                  }}
                  mb="10px"
                  display={{
                    base: 'none',
                    sm: 'block',
                  }}
                >
                  Maquinarias usadas
                </Heading>
              </Box>
            </LinkOverlay>
          </Box>
          <Box position="relative">
            <LinkOverlay href="/catalogo/new">
              <Image src="/img/slider-3.jpg" alt="nuevos" />
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
                  base: 'absolute',
                }}
                top={{
                  base: '0',
                  md: '50%',
                }}
                p={{
                  base: '10px',
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
                  color="white"
                  lineHeight={{
                    base: '50px',
                    md: '70px',
                  }}
                  mb="10px"
                  display={{
                    base: 'none',
                    sm: 'block',
                  }}
                >
                  Maquinarias nuevas
                </Heading>
              </Box>
            </LinkOverlay>
          </Box>
        </Slider>
      </Container>
    </Box>
  )
}

export default Hero
