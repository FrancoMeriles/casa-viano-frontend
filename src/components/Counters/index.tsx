import React from 'react'
import { Container, Text, Flex, Box, Heading } from '@chakra-ui/react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

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
        <Flex
          wrap="wrap"
          justifyContent="center"
          flexDirection={{
            base: 'column',
            sm: 'row',
          }}
        >
          <Flex
            wrap="wrap"
            justifyContent="center"
            alignItems="center"
            flexDirection={{
              base: 'column',
              md: 'row',
            }}
            m="0 20px"
          >
            <Text fontSize="7xl" fontWeight="bold" color="brand.500">
              <CountUp end={4} separator=".">
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start}>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </Text>
            <Heading
              ml={{
                base: '0px',
                md: '4',
              }}
              lineHeight="inherit"
              fontSize="2xl"
              fontWeight="bold"
              color="white"
            >
              Generaciones
            </Heading>
          </Flex>
          <Flex
            wrap="wrap"
            justifyContent="center"
            alignItems="center"
            m="0 20px"
            flexDirection={{
              base: 'column',
              md: 'row',
            }}
          >
            <Text fontSize="7xl" fontWeight="bold" color="brand.500">
              <CountUp end={112} separator=".">
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start}>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </Text>
            <Heading
              ml={{
                base: '0px',
                md: '4',
              }}
              fontSize="2xl"
              fontWeight="bold"
              color="white"
              maxW="140"
              lineHeight={{
                base: '30px',
              }}
              textAlign={{
                base: 'center',
                md: 'left',
              }}
            >
              Años de trayectoria
            </Heading>
          </Flex>
          <Flex
            wrap="wrap"
            justifyContent="center"
            alignItems="center"
            m="0 20px"
            flexDirection={{
              base: 'column',
              md: 'row',
            }}
          >
            <Text fontSize="7xl" fontWeight="bold" color="brand.500">
              <CountUp prefix="+" end={10000} separator=".">
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start}>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </Text>
            <Heading
              ml={{
                base: '0px',
                md: '4',
              }}
              fontSize="2xl"
              fontWeight="bold"
              color="white"
              maxW="150"
              lineHeight="30px"
              textAlign={{
                base: 'center',
                md: 'left',
              }}
            >
              Maquinarias vendidas
            </Heading>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Counters
