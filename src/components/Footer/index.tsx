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
import { useRouter } from 'next/router'

import {
  FaInstagram,
  FaFacebook,
  FaMapMarkerAlt,
  FaAt,
  FaWhatsapp,
} from 'react-icons/fa'

const Footer = () => {
  const { push } = useRouter()
  return (
    <Box bg="brand.100" w="100">
      <Container as="footer" role="contentinfo">
        <Stack
          spacing="8"
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          py={{ base: '12', md: '16' }}
        >
          <Stack spacing={{ base: '6', md: '8' }} align="start">
            <Image
              src="/casa-viano.svg"
              alt="Casa Viano"
              width={{
                base: '170px',
                md: '331px',
              }}
            />
          </Stack>
          <Stack
            direction={{ base: 'column-reverse', md: 'column', lg: 'row' }}
            spacing={{ base: '12', md: '8' }}
          >
            <Stack
              direction={{
                sm: 'row',
                base: 'column',
              }}
              wrap="wrap"
            >
              <Stack
                mb={{
                  sm: '0',
                  base: '20px',
                }}
                color="red"
                minW="36"
              >
                <Text fontSize="md" fontWeight="extrabold" color="muted">
                  NOSOTROS
                </Text>
                <Stack spacing="3" shouldWrapChildren>
                  <Button
                    color="white"
                    variant="link"
                    _hover={{ color: 'gray' }}
                    onClick={() => {
                      push('/empresa')
                    }}
                  >
                    Empresa
                  </Button>
                </Stack>
              </Stack>
              <Stack
                mb={{
                  sm: '0',
                  base: '20px !important',
                }}
                minW="36"
              >
                <Text fontSize="md" fontWeight="extrabold" color="muted">
                  MAQUINARIAS
                </Text>
                <Stack spacing="3" shouldWrapChildren>
                  <Button
                    color="white"
                    variant="link"
                    _hover={{ color: 'gray' }}
                    onClick={() => {
                      push('/catalogo')
                    }}
                  >
                    Catálogo
                  </Button>
                  <Button
                    color="white"
                    variant="link"
                    _hover={{ color: 'gray' }}
                    onClick={() => {
                      push('/catalogo/used')
                    }}
                  >
                    Maquinas usadas
                  </Button>
                  <Button
                    color="white"
                    variant="link"
                    _hover={{ color: 'gray' }}
                    onClick={() => {
                      push('/catalogo/new')
                    }}
                  >
                    Maquinas nuevas
                  </Button>
                </Stack>
              </Stack>
              <Stack minW="36">
                <Text fontSize="md" fontWeight="extrabold" color="muted">
                  CONSULTAS
                </Text>
                <Stack spacing="3" shouldWrapChildren>
                  <Button
                    color="white"
                    variant="link"
                    _hover={{ color: 'gray' }}
                    onClick={() => {
                      push('/preguntas-frecuentes')
                    }}
                  >
                    Preguntas frecuentes
                  </Button>
                  <Button
                    color="white"
                    variant="link"
                    _hover={{ color: 'gray' }}
                    onClick={() => {
                      push('/contacto')
                    }}
                  >
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
            {/* <IconButton
  as="a"
  href="#"
  aria-label="LinkedIn"
  icon={<FaLinkedin fontSize="1.25rem" />}
  /> */}
            <IconButton
              target="_blank"
              as="a"
              href="https://www.instagram.com/casaviano/"
              aria-label="Instagram"
              icon={<FaInstagram fontSize="1.25rem" />}
            />

            <IconButton
              target="_blank"
              as="a"
              href="https://www.facebook.com/casavianoferreteria"
              aria-label="Facebook"
              icon={<FaFacebook fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
      </Container>
    </Box>
  )
}
export default Footer
