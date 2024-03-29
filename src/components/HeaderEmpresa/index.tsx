import { Box, Container, Heading, Text } from '@chakra-ui/react'

const index = () => {
  return (
    <Box backgroundImage="url('/img/bg-empresa.png')" pt="70px" pb="70px">
      <Container>
        <Text color="white" fontSize="20px" mb="20px">
          NUESTRA HISTORIA
        </Text>
        <Heading
          fontSize="5xl"
          fontWeight="bold"
          color="white"
          lineHeight="50px"
          maxW="550px"
          letterSpacing="0"
        >
          Una familia, con 112 años en el sector
        </Heading>
      </Container>
    </Box>
  )
}

export default index
