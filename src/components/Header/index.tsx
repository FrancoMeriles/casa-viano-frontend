import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'
import React from 'react'
import { BiChevronDown } from 'react-icons/bi'
import {
  Box,
  Container,
  Link,
  IconButton,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa'
import { useRouter } from 'next/router'

const Header = () => {
  const { asPath, push } = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const isCatalogo = asPath.includes('catalogo')
  const isEmpresa = asPath.includes('empresa')
  const isContacto = asPath.includes('contacto')
  const isFaq = asPath.includes('preguntas')

  return (
    <Box
      as="nav"
      role="navigation"
      p="20px 0"
      position="sticky"
      top="0"
      bg="white"
      zIndex="9"
      boxShadow="sm"
    >
      <Container
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        display="flex"
      >
        <Image
          src="/casa-viano-color.svg"
          alt="Casa Viano"
          cursor="pointer"
          onClick={() => push('/')}
        />
        <Box
          display={{
            base: 'none',
            lg: 'block',
          }}
        >
          <Link
            m="0 30px"
            color="brand.100"
            position="relative"
            onClick={() => {
              push('/empresa')
            }}
          >
            {isEmpresa && (
              <Box
                w="100%"
                height="8px"
                bg="brand.500"
                as="span"
                position="absolute"
                display="inline-block"
                top="-31"
              />
            )}
            Empresa
          </Link>

          <Menu>
            {isCatalogo && (
              <Box
                w="70px"
                height="8px"
                bg="brand.500"
                as="span"
                position="absolute"
                display="inline-block"
                top="0px"
              />
            )}
            <MenuButton
              variant="link"
              _hover={{
                textDecoration: 'underline',
              }}
              color="brand.100"
              as={Button}
              rightIcon={<BiChevronDown />}
            >
              Catálogo
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => push('/catalogo/used')}>
                Maquinarias usadas
              </MenuItem>
              <MenuItem onClick={() => push('/catalogo/new')}>
                Maquinarias nuevas
              </MenuItem>
            </MenuList>
          </Menu>
          {/* <Link
            m="0 30px"
            color="brand.100"
            position="relative"
            onClick={() => {
              push('/catalogo')
            }}
          >
            {isCatalogo && (
              <Box
                w="100%"
                height="8px"
                bg="brand.500"
                as="span"
                position="absolute"
                display="inline-block"
                top="-31"
              />
            )}
            Catálogo
          </Link> */}
          <Link
            m="0 30px"
            color="brand.100"
            position="relative"
            onClick={() => {
              push('/contacto')
            }}
          >
            {isContacto && (
              <Box
                w="100%"
                height="8px"
                bg="brand.500"
                as="span"
                position="absolute"
                display="inline-block"
                top="-31"
              />
            )}
            Contacto
          </Link>
          <Link
            m="0 30px"
            color="brand.100"
            position="relative"
            onClick={() => {
              push('/preguntas-frecuentes')
            }}
          >
            {isFaq && (
              <Box
                w="100%"
                height="8px"
                bg="brand.500"
                as="span"
                position="absolute"
                display="inline-block"
                top="-31"
              />
            )}
            Preguntas Frecuentes
          </Link>
        </Box>
        <Box
          display={{
            base: 'block',
            lg: 'none',
          }}
        >
          <IconButton
            onClick={onOpen}
            as="a"
            colorScheme="brand"
            _hover={{
              bg: 'brand.100',
            }}
            size="lg"
            borderRadius="25px"
            cursor="pointer"
            aria-label="Menu"
            icon={<FaBars color="white" fontSize="1.5rem" />}
          />
        </Box>
      </Container>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            color="white"
            border="solid 1px white"
            borderRadius="20px"
            fontSize="9px"
          />
          <DrawerBody
            display="flex"
            flexDirection="column"
            bg="brand.500"
            pl="15px"
          >
            <Image
              mt="9px"
              onClick={() => push('/')}
              src="/casa-viano.svg"
              alt="Casa Viano"
              width="120px"
            />
            <Link
              mt="40px"
              color="white"
              fontWeight="bold"
              fontSize="2xl"
              position="relative"
              onClick={() => {
                push('/')
              }}
            >
              Home
            </Link>
            <Divider borderColor="white" opacity=".3" mt="15px" />
            <Link
              mt="15px"
              color="white"
              fontWeight="bold"
              fontSize="2xl"
              position="relative"
              onClick={() => {
                push('/empresa')
              }}
            >
              {isEmpresa && (
                <Box
                  w="8px"
                  height="34px"
                  bg="white"
                  left="-16px"
                  as="span"
                  position="absolute"
                  display="inline-block"
                />
              )}
              Empresa
            </Link>
            <Divider borderColor="white" opacity=".3" mt="15px" />
            <Link
              mt="15px"
              color="white"
              fontWeight="bold"
              fontSize="2xl"
              position="relative"
              onClick={() => {
                push('/catalogo')
              }}
            >
              {isCatalogo && (
                <Box
                  w="8px"
                  height="34px"
                  bg="white"
                  left="-16px"
                  as="span"
                  position="absolute"
                  display="inline-block"
                />
              )}
              Catálogo
            </Link>
            <Link
              mt="15px"
              color="white"
              fontSize="1xl"
              position="relative"
              onClick={() => {
                push('/catalogo')
              }}
            >
              Maquinária usada
            </Link>
            <Link
              mt="10px"
              color="white"
              fontSize="1xl"
              position="relative"
              onClick={() => {
                push('/catalogo')
              }}
            >
              Maquinária nueva
            </Link>
            <Divider borderColor="white" opacity=".3" mt="15px" />
            <Link
              mt="15px"
              color="white"
              fontWeight="bold"
              fontSize="2xl"
              position="relative"
              onClick={() => {
                push('/preguntas-frecuentes')
              }}
            >
              {isFaq && (
                <Box
                  w="8px"
                  height="34px"
                  bg="white"
                  left="-16px"
                  as="span"
                  position="absolute"
                  display="inline-block"
                />
              )}
              Preguntas Frecuentes
            </Link>
            <Divider borderColor="white" opacity=".3" mt="15px" />
            <Link
              mt="15px"
              color="white"
              fontWeight="bold"
              fontSize="2xl"
              position="relative"
              onClick={() => {
                push('/contacto')
              }}
            >
              {isContacto && (
                <Box
                  w="8px"
                  height="34px"
                  bg="white"
                  left="-16px"
                  as="span"
                  position="absolute"
                  display="inline-block"
                />
              )}
              Contacto
            </Link>
          </DrawerBody>
          <DrawerFooter bg="brand.500" justifyContent="center">
            <IconButton
              as="a"
              href="#"
              bg="transparent"
              color="white"
              border="none"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              bg="transparent"
              color="white"
              border="none"
              as="a"
              href="#"
              aria-label="Instagram"
              icon={<FaInstagram fontSize="1.25rem" />}
            />
            <IconButton
              bg="transparent"
              color="white"
              border="none"
              as="a"
              href="#"
              aria-label="Facebook"
              icon={<FaFacebook fontSize="1.25rem" />}
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Header
