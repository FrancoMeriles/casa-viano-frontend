import { useRouter } from 'next/router'
import { Text, Image, Box, Button } from '@chakra-ui/react'
import { FaAngleRight } from 'react-icons/fa'

export default function FeaturedCategory() {
  const { push } = useRouter()
  return (
    <Box position="relative" mt="80px" mb="80px">
      <Image src="/img/featured_category.png" alt="Featured Category" />
      <Box
        padding="30px 50px 30px 30px"
        borderRadius="5px"
        position={{
          base: 'relative',
          md: 'absolute',
        }}
        bottom={{
          base: '0',
          md: '10',
        }}
        left={{
          base: '0',
          md: '20',
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
    </Box>
  )
}
