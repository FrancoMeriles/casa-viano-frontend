import React from 'react'
import {
  Box,
  Container,
  Button,
  Flex,
  Spacer,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react'
import Card from '@components/Card'
import { useRouter } from 'next/router'

const FeaturedProduct = () => {
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
        </Flex>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        >
          <Card />
          <Card />
          <Card />
          <Card />
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default FeaturedProduct
