import { Box, Container, Heading, Text } from '@chakra-ui/react'

const index = () => {
  return (
    <Box
      backgroundImage="url('/img/bg-catalogo.jpg')"
      pt="70px"
      pb="70px"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Container>
        <Text color="white" fontSize="20px" mb="20px">
          CATÁLOGO
        </Text>
        <Heading
          fontSize="5xl"
          fontWeight="bold"
          color="white"
          lineHeight="50px"
          maxW="550px"
          letterSpacing="0"
        >
          Encontrá la maquinaria que búscas
        </Heading>
      </Container>
    </Box>
  )
}

export default index
