import { FC } from 'react'
import { Box, SimpleGrid, Heading } from '@chakra-ui/react'
import * as React from 'react'
import { Testimonial } from './Testimonial'
import { TestimonialInterface } from '@customTypes/testimonials'

interface Props {
  testimonials: TestimonialInterface[]
}

const Testimonials: FC<Props> = ({ testimonials }) => {
  return (
    <Box as="section">
      <Box
        maxW={{ base: 'xl', md: '7xl' }}
        mx="auto"
        px={{ base: '6', md: '8' }}
      >
        <Heading
          fontSize="5xl"
          fontWeight="bold"
          color="brand.500"
          lineHeight="50px"
          mb="10px"
        >
          Testimonios
        </Heading>
        <SimpleGrid
          py="16"
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: '16', lg: '32' }}
        >
          {testimonials.length > 0
            ? testimonials.map((testimonial) => (
                <Testimonial
                  key={testimonial._id}
                  name={testimonial.name}
                  role={testimonial.occupation}
                  image={testimonial?.image?.path}
                >
                  {testimonial.comment}
                </Testimonial>
              ))
            : null}
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default Testimonials
