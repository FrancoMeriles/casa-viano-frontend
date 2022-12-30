import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react'
import * as React from 'react'
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaMapMarkerAlt,
  FaAt,
  FaWhatsapp,
} from 'react-icons/fa'

const Footer = () => (
  <Box bg="brand.100" w="100">
    <Container as="footer" role="contentinfo">
      <Stack
        spacing="8"
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        py={{ base: '12', md: '16' }}
      >
        <Stack spacing={{ base: '6', md: '8' }} align="start">
          <Image src="/casa-viano.svg" alt="Casa Viano" />
        </Stack>
        <Stack
          direction={{ base: 'column-reverse', md: 'column', lg: 'row' }}
          spacing={{ base: '12', md: '8' }}
        >
          <Stack direction="row" wrap="wrap">
            <Stack m="0" minW="36">
              <Text fontSize="md" fontWeight="extrabold" color="muted">
                NOSOTROS
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button color="white" variant="link" _hover={{ color: 'gray' }}>
                  Empresa
                </Button>
              </Stack>
            </Stack>
            <Stack m="0" minW="36">
              <Text fontSize="md" fontWeight="extrabold" color="muted">
                MAQUINARIAS
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button color="white" variant="link" _hover={{ color: 'gray' }}>
                  Catálogo
                </Button>
                <Button color="white" variant="link" _hover={{ color: 'gray' }}>
                  Maquinas usadas
                </Button>
                <Button color="white" variant="link" _hover={{ color: 'gray' }}>
                  Maquinas nuevas
                </Button>
              </Stack>
            </Stack>
            <Stack m="0" minW="36">
              <Text fontSize="md" fontWeight="extrabold" color="muted">
                CONSULTAS
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button color="white" variant="link" _hover={{ color: 'gray' }}>
                  Preguntas frecuentes
                </Button>
                <Button color="white" variant="link" _hover={{ color: 'gray' }}>
                  Contacto
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider opacity="0.2" />
      <Stack
        pt="12"
        pb="12"
        justify="center"
        direction={{ base: 'column-reverse', md: 'row' }}
        align="center"
      >
        <Stack
          spacing="12"
          justify="center"
          justifyContent="center"
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack spacing="3" direction="row" align="center">
            <FaMapMarkerAlt color="white" />
            <Text color="white" maxW="80">
              Ruta Nacional 35 y Calle Indios Pampa Realicó, La Pampa —
              Argentina · CP: 6200
            </Text>
          </Stack>
          <Stack spacing="3" direction="row" align="center">
            <FaAt color="white" />
            <Text color="white" maxW="80">
              maquinas@casaviano.com
            </Text>
          </Stack>
          <Stack spacing="3" direction="row" align="center">
            <FaWhatsapp color="white" />
            <Text color="white" maxW="80">
              2302608126
            </Text>
          </Stack>
        </Stack>
      </Stack>

      <Divider opacity="0.2" />
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{ base: 'column-reverse', md: 'row' }}
        align="center"
      >
        <Text fontSize="sm" color="subtle">
          Todos los derechos reservados &copy; {new Date().getFullYear()}.
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Instagram"
            icon={<FaInstagram fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Facebook"
            icon={<FaFacebook fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
    </Container>
  </Box>
)

export default Footer
