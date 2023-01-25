import { FC } from 'react'
import { Box, Heading, Container } from '@chakra-ui/react'
import * as React from 'react'
import { Testimonial } from './Testimonial'
import { TestimonialInterface } from '@customTypes/testimonials'
import Slider from 'react-slick'

interface Props {
  testimonials: TestimonialInterface[]
}

const Testimonials: FC<Props> = ({ testimonials }) => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    dotsClass: 'slick-dots testimonials',
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Container>
      <Heading
        fontSize="5xl"
        fontWeight="bold"
        color="brand.500"
        lineHeight="50px"
        mb="10px"
      >
        Testimonios
      </Heading>
      {/* <SimpleGrid
          py="16"
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: '16', lg: '32' }}
        > */}
      <Box mt="50px" mb="50px">
        <Slider {...settings}>
          {testimonials.length > 0
            ? testimonials.map((testimonial) => (
                <Box key={testimonial._id}>
                  <Testimonial
                    name={testimonial.name}
                    role={testimonial.occupation}
                    image={testimonial?.image?.path}
                  >
                    {testimonial.comment}
                  </Testimonial>
                </Box>
              ))
            : null}
        </Slider>
      </Box>
      {/* </SimpleGrid> */}
    </Container>
  )
}

export default Testimonials
