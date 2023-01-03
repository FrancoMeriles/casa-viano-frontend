import React from 'react'
import { Container, Heading, Box, Flex, Image } from '@chakra-ui/react'

const Brands = () => {
  return (
    <Box>
      <Container textAlign="center">
        <Heading fontSize="2xl" fontWeight="bold" color="brand.500">
          Marcas que trabajan con nosotros
        </Heading>
      </Container>

      <Flex justifyContent="space-between" wrap="wrap" mt="20px">
        <Image src="/img/brands/baima.png" alt="Baima" />
        <Image src="/img/brands/gimetal.png" alt="Gimetal" />
        <Image src="/img/brands/mancini.png" alt="mancini" />
        <Image src="/img/brands/montecor.png" alt="montecor" />
        <Image src="/img/brands/monumental.png" alt="monumental" />
        <Image src="/img/brands/ombu.png" alt="ombu" />
        <Image src="/img/brands/richiger.png" alt="richiger" />
      </Flex>
    </Box>
  )
}

export default Brands
