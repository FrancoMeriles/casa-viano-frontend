import React from 'react'
import { Container, Text, Flex, Box, Heading } from '@chakra-ui/react'
import CountUp from 'react-countup'

const Counters = () => {
  return (
    <Box
      style={{
        backgroundImage: `url('/img/background.png')`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      m="50px 0"
    >
      <Container p="80px 0">
        <Flex wrap="wrap" justifyContent="center">
          <Flex
            wrap="wrap"
            justifyContent="center"
            alignItems="center"
            m="0 20px"
          >
            <Text fontSize="7xl" fontWeight="bold" color="brand.500">
              <CountUp end={4} separator="." enableScrollSpy />
            </Text>
            <Heading ml="4" fontSize="2xl" fontWeight="bold" color="white">
              Generaciones
            </Heading>
          </Flex>
          <Flex
            wrap="wrap"
            justifyContent="center"
            alignItems="center"
            m="0 20px"
          >
            <Text fontSize="7xl" fontWeight="bold" color="brand.500">
              <CountUp end={112} separator="." enableScrollSpy />
            </Text>
            <Heading ml="4" fontSize="2xl" fontWeight="bold" color="white">
              Años de trayectoria
            </Heading>
          </Flex>
          <Flex
            wrap="wrap"
            justifyContent="center"
            alignItems="center"
            m="0 20px"
          >
            <Text fontSize="7xl" fontWeight="bold" color="brand.500">
              <CountUp prefix="+" end={10000} separator="." enableScrollSpy />
            </Text>
            <Heading ml="4" fontSize="2xl" fontWeight="bold" color="white">
              Maquinarias vendidas
            </Heading>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Counters
