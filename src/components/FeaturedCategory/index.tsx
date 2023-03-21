import { useRouter } from 'next/router'
import { Text, Image, Box, Button, Container } from '@chakra-ui/react'
import { FaAngleRight } from 'react-icons/fa'

export default function FeaturedCategory() {
  const { push } = useRouter()
  return (
    <Container
      position="relative"
      mt="80px"
      mb="80px"
      padding={{
        base: '0px',
        md: 'inherit',
      }}
    >
      <Image
        src="/img/featured_category.png"
        alt="Featured Category"
        height={{
          base: '400px',
          md: 'auto',
        }}
        objectFit="cover"
      />
      <Box
        padding="30px 50px 30px 30px"
        borderRadius="5px"
        position="absolute"
        bottom={{
          base: '5',
          md: '10',
        }}
        left={{
          base: '5',
          md: '10',
        }}
        right={{
          base: '5',
          md: 'auto',
        }}
        bg="white"
      >
        <Text color="brand.500" fontSize="3xl" fontWeight="normal" mb="10px">
          Maquinaría nueva
        </Text>
        <Button
          size="sm"
          colorScheme="brand"
          borderRadius="40px"
          _hover={{
            bg: 'white',
            color: 'brand.100',
          }}
          rightIcon={<FaAngleRight />}
          onClick={() => push('/catalogo')}
        >
          Ver catálogo
        </Button>
      </Box>
    </Container>
  )
}
