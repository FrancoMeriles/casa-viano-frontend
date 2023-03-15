import { Box, Container, Heading, Text } from '@chakra-ui/react'

const index = () => {
  return (
    <Box backgroundImage="url('/img/bg-contacto.jpg')" pt="70px" pb="70px">
      <Container>
        <Text color="white" fontSize="20px" mb="20px">
          CONTACTO
        </Text>
        <Heading
          fontSize="5xl"
          fontWeight="bold"
          color="white"
          lineHeight="50px"
          maxW="550px"
          letterSpacing="0"
        >
          Estamos para asesorarte
        </Heading>
      </Container>
    </Box>
  )
}

export default index
