import { Box, Container, Heading, Text } from '@chakra-ui/react'

const index = () => {
  return (
    <Box backgroundImage="url('/img/bg-empresa.png')" pt="70px" pb="70px">
      <Container>
        <Heading
          fontSize="5xl"
          fontWeight="bold"
          color="white"
          lineHeight="50px"
          maxW="450px"
          letterSpacing="0"
        >
          Una empresa familiar con más de 112 años en el sector
        </Heading>
        <Text color="white" fontSize="2xl" mt="20px">
          Conozca la historia de Casa Viano.
        </Text>
      </Container>
    </Box>
  )
}

export default index
