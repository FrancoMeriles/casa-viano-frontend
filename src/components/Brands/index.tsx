import React from 'react'
import Slider from 'react-slick'

import { Container, Heading, Box, Image } from '@chakra-ui/react'

const Brands = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    dotsClass: 'slick-dots brand',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }
  return (
    <Box>
      <Container textAlign="center">
        <Heading
          fontSize="2xl"
          fontWeight="bold"
          color="brand.500"
          lineHeight="30px"
        >
          Marcas que trabajan con nosotros
        </Heading>
      </Container>
      <Box mt="20px">
        <Slider {...settings}>
          <Image src="/img/brands/baima.png" alt="Baima" />
          <Image src="/img/brands/gimetal.png" alt="Gimetal" />
          <Image src="/img/brands/mancini.png" alt="mancini" />
          <Image src="/img/brands/montecor.png" alt="montecor" />
          <Image src="/img/brands/monumental.png" alt="monumental" />
          <Image src="/img/brands/ombu.png" alt="ombu" />
          <Image src="/img/brands/richiger.png" alt="richiger" />
        </Slider>
      </Box>
    </Box>
  )
}

export default Brands
