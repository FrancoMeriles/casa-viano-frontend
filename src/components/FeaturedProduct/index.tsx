import React from 'react'
import {
  Box,
  Container,
  Text,
  Button,
  Flex,
  Spacer,
  Card,
  CardBody,
  Image,
  Heading,
  CardFooter,
  SimpleGrid,
} from '@chakra-ui/react'

const FeaturedProduct = () => {
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
          <Text
            fontSize="5xl"
            fontWeight="bold"
            color="brand.500"
            lineHeight="50px"
            mb="10px"
            maxW="270"
          >
            Productos destacados
          </Text>
          <Spacer />
          <Button
            size="lg"
            colorScheme="brand"
            borderRadius="30px"
            _hover={{
              bg: 'white',
              color: 'brand.500',
            }}
            onClick={() => console.log('se clickeo btn 1')}
          >
            Ver todos
          </Button>
        </Flex>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        >
          <Card>
            <Image
              src="https://dummyimage.com/279x214/e0e0e0/7d7d7d"
              alt="Green double couch with wooden legs"
              borderRadius="sm"
            />
            <CardBody>
              <Heading size="xs" noOfLines={2}>
                Nombre de la maquinaría hasta 2 líneas y elipsis...
              </Heading>
            </CardBody>
            <CardFooter display="flex" flexDirection="column">
              <Button
                mb="1 0px"
                variant="solid"
                width="100%"
                colorScheme="brand"
                color="white"
                size="lg"
                _hover={{
                  bg: 'white',
                  color: 'brand.500',
                }}
                borderRadius="50px"
              >
                Consultar ahora
              </Button>
              <Button
                size="lg"
                width="100%"
                variant="ghost"
                colorScheme="brand"
              >
                Ver detalle
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <Image
              src="https://dummyimage.com/279x214/e0e0e0/7d7d7d"
              alt="Green double couch with wooden legs"
              borderRadius="sm"
            />
            <CardBody>
              <Heading size="xs" noOfLines={2}>
                Nombre de la maquinaría hasta 2 líneas y elipsis...
              </Heading>
            </CardBody>
            <CardFooter display="flex" flexDirection="column">
              <Button
                mb="1 0px"
                variant="solid"
                width="100%"
                colorScheme="brand"
                color="white"
                size="lg"
                _hover={{
                  bg: 'white',
                  color: 'brand.500',
                }}
                borderRadius="50px"
              >
                Consultar ahora
              </Button>
              <Button
                size="lg"
                width="100%"
                variant="ghost"
                colorScheme="brand"
              >
                Ver detalle
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <Image
              src="https://dummyimage.com/279x214/e0e0e0/7d7d7d"
              alt="Green double couch with wooden legs"
              borderRadius="sm"
            />
            <CardBody>
              <Heading size="xs" noOfLines={2}>
                Nombre de la maquinaría hasta 2 líneas y elipsis...
              </Heading>
            </CardBody>
            <CardFooter display="flex" flexDirection="column">
              <Button
                mb="1 0px"
                variant="solid"
                width="100%"
                colorScheme="brand"
                color="white"
                size="lg"
                _hover={{
                  bg: 'white',
                  color: 'brand.500',
                }}
                borderRadius="50px"
              >
                Consultar ahora
              </Button>
              <Button
                size="lg"
                width="100%"
                variant="ghost"
                colorScheme="brand"
              >
                Ver detalle
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <Image
              src="https://dummyimage.com/279x214/e0e0e0/7d7d7d"
              alt="Green double couch with wooden legs"
              borderRadius="sm"
            />
            <CardBody>
              <Heading size="xs" noOfLines={2}>
                Nombre de la maquinaría hasta 2 líneas y elipsis...
              </Heading>
            </CardBody>
            <CardFooter display="flex" flexDirection="column">
              <Button
                mb="1 0px"
                variant="solid"
                width="100%"
                colorScheme="brand"
                color="white"
                size="lg"
                _hover={{
                  bg: 'white',
                  color: 'brand.500',
                }}
                borderRadius="50px"
              >
                Consultar ahora
              </Button>
              <Button
                size="lg"
                width="100%"
                variant="ghost"
                colorScheme="brand"
              >
                Ver detalle
              </Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default FeaturedProduct
