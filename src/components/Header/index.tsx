import React from 'react'
import { Box, Container, Link, IconButton, Image } from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa'

const Header = () => {
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
        <Image src="/casa-viano-color.svg" alt="Casa Viano" />
        <Box flexDirection="row">
          <Link m="0 10px" color="brand.100">
            Empresa
          </Link>
          <Link m="0 10px" color="brand.100">
            Catálogo
          </Link>
          <Link m="0 10px" color="brand.100">
            Contacto
          </Link>
          <IconButton
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
    </Box>
  )
}

export default Header
