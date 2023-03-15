import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import FormContact from '@components/FormContact'
import { FaMapMarkerAlt, FaAt, FaWhatsapp } from 'react-icons/fa'

export default function ContactContent() {
  return (
    <Box>
      <Flex>
        <Box flex="1">1</Box>
        <Box flex="1">
          <FormContact />
        </Box>
      </Flex>
      <Flex>
        <Box
          p="30px"
          flex="1"
          bg="#D9D9D9"
          alignItems="center"
          justifyContent="center"
          display="flex"
        >
          <Stack spacing="3" direction="row" align="center">
            <FaMapMarkerAlt />
            <Text maxW="80">
              Ruta Nacional 35 y Calle Indios Pampa Realicó, La Pampa —
              Argentina · CP: 6200
            </Text>
          </Stack>
        </Box>
        <Box
          p="30px"
          flex="1"
          bg="brand.500"
          alignItems="center"
          justifyContent="center"
          display="flex"
        >
          <Stack spacing="3" direction="row" align="center" mr="30px">
            <FaAt color="white" />
            <Text maxW="80" color="white">
              maquinas@casaviano.com
            </Text>
          </Stack>
          <Stack spacing="3" direction="row" align="center">
            <FaWhatsapp color="white" />
            <Text maxW="80" color="white">
              2302608126
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Box>
  )
}
