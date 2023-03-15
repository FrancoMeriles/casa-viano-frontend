import { Box, Container, Heading, Text } from '@chakra-ui/react'

const index = () => {
  return (
    <Box backgroundImage="url('/img/bg-faq.jpg')" pt="70px" pb="70px">
      <Container>
        <Text color="white" fontSize="20px" mb="20px">
          PREGUNTAS FRECUENTES
        </Text>
        <Heading
          fontSize="5xl"
          fontWeight="bold"
          color="white"
          lineHeight="50px"
          maxW="550px"
          letterSpacing="0"
        >
          Respondemos tus consultas
        </Heading>
      </Container>
    </Box>
  )
}

export default index
