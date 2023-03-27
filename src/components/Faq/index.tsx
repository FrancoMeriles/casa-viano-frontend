import { Box, Container, Heading } from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from '@chakra-ui/react'

const index = () => {
  return (
    <Container
      maxW="600px"
      p={{
        base: '20px',
        md: '40px',
      }}
    >
      <Heading fontSize="2xl" color="brand.500">
        Preguntas frecuentes
      </Heading>
      <Accordion>
        <AccordionItem pt="10px" pb="10px">
          <h2>
            <AccordionButton
              _hover={{
                backgroundColor: 'none',
              }}
            >
              <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem pt="10px" pb="10px">
          <h2>
            <AccordionButton
              _hover={{
                backgroundColor: 'none',
              }}
            >
              <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Box>
        <Text p="20px">
          Si tienes alguna otra pregunta o necesitas recibir asesoramiento, no
          dudes en{' '}
          <Box
            as="a"
            color="blue.900"
            textDecoration="underline"
            href="/contacto"
          >
            ponerte en contacto con nosotros.
          </Box>
        </Text>
      </Box>
    </Container>
  )
}

export default index
