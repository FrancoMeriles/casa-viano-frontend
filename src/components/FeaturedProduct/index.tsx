import { FC } from 'react'
import {
  Box,
  Container,
  Button,
  Flex,
  Spacer,
  Heading,
  SimpleGrid,
  Show,
  Hide,
} from '@chakra-ui/react'
import { ProductsInterface } from '@customTypes/products'
import Card from '@components/Card'
import { useRouter } from 'next/router'

interface ProductsProps {
  products: ProductsInterface[]
}

const FeaturedProduct: FC<ProductsProps> = ({ products }) => {
  const router = useRouter()
  return (
    <Box p="70px 0">
      <Container>
        <Flex
          direction={{
            base: 'column',
            sm: 'row',
          }}
          minWidth="max-content"
          gap="2"
          mb="60px"
        >
          <Heading
            fontSize="5xl"
            fontWeight="bold"
            color="brand.500"
            lineHeight="50px"
            mb="10px"
            maxW="270"
          >
            Productos destacados
          </Heading>
          <Spacer />
          <Show above="md">
            <Button
              size="lg"
              colorScheme="brand"
              borderRadius="30px"
              _hover={{
                bg: 'white',
                color: 'brand.500',
              }}
              onClick={() => {
                router.push(`/catalogo`)
              }}
            >
              Ver todos
            </Button>
          </Show>
        </Flex>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        >
          {products.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </SimpleGrid>
        <Hide above="md">
          <Button
            mt="40px"
            size="lg"
            width="100%"
            colorScheme="brand"
            borderRadius="30px"
            _hover={{
              bg: 'white',
              color: 'brand.500',
            }}
            onClick={() => {
              router.push(`/catalogo`)
            }}
          >
            Ver todos
          </Button>
        </Hide>
      </Container>
    </Box>
  )
}

export default FeaturedProduct
