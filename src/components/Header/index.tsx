import React from 'react'
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
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa'
import { useRouter } from 'next/router'

const Header = () => {
  const { asPath, push } = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const isCatalogo = asPath.includes('catalogo')
  const isEmpresa = asPath.includes('empresa')
  const isContacto = asPath.includes('contacto')

  return (
    <Box
      as="nav"
      role="navigation"
      p="20px 0"
      position="sticky"
      top="0"
      bg="white"
      zIndex="9"
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
          <Link
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
          </Link>
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
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>Hola content</DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Header
