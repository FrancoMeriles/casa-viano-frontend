import Head from 'next/head'
import { GetServerSideProps } from 'next'

import {
  Text,
  Container,
  SimpleGrid,
  Box,
  Badge,
  Flex,
  Button,
  Divider,
  Heading,
} from '@chakra-ui/react'
import { FaWhatsapp } from 'react-icons/fa'

import Header from '@components/Header'
import Footer from '@components/Footer'
import Breadcrumb from '@components/Breadcrumbs'

import axios from '@services/local'

import { Gallery } from '@components/Gallery/Gallery'
import { ProductsInterface } from '@customTypes/products'
import { getErrorUrl, translateCategory } from '@utils/index'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query
  let data
  try {
    const response = await axios.get(`/products/slug/${slug}`)
    data = response.data
  } catch (err) {
    return {
      redirect: {
        destination: getErrorUrl(err),
      },
      props: {},
    }
  }
  return {
    props: {
      category: context.query.category,
      slug,
      product: data.product,
    },
  }
}

interface Props {
  category: string
  slug: string
  product: ProductsInterface
}

const Product = ({ category, product }: Props) => {
  return (
    <div>
      <Head>
        <title>Producto</title>
        <meta name="description" content="Producto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Breadcrumb />
      <main>
        <Container>
          <SimpleGrid
            columns={{
              base: 1,
              lg: 2,
            }}
            mt="50px"
            mb="20px"
          >
            <Box>
              <Gallery images={product.images} />
              <Box mt="50px">
                <Heading fontSize="2xl" color="brand.500" fontWeight="bold">
                  Descripción
                </Heading>
                <Divider m="15px 0" />
                <Text p="16px" fontSize="1xl" lineHeight="30px" color="black">
                  {product.body}
                </Text>
                <Heading fontSize="2xl" color="brand.500" fontWeight="bold">
                  Detalles técnicos
                </Heading>
                <Divider m="15px 0" />
                {product.attributes.map((attribute, i) => {
                  return (
                    <Flex
                      key={i}
                      pt="20px"
                      pb="10px"
                      borderBottom="solid"
                      borderBottomWidth="1px"
                      borderBottomColor="gray.300"
                    >
                      <Text fontSize="1xl" color="black" flex="1">
                        {attribute.key}
                      </Text>
                      <Text fontSize="1xl" color="black" flex="4">
                        {attribute.value}
                      </Text>
                    </Flex>
                  )
                })}
              </Box>
            </Box>
            <Box
              paddingLeft={{
                base: 'auto',
                lg: '50px',
              }}
              marginBottom={{
                base: '40px',
                lg: 'inherit',
              }}
              gridRow={{
                base: 1,
                lg: 'auto',
              }}
            >
              <Box position="sticky" top="110px" bottom="40px">
                <Flex align="center">
                  <Text fontSize="1xl" letterSpacing="2px" color="brand.500">
                    {translateCategory(category)}
                  </Text>
                  {product.is_available ? (
                    <Badge
                      fontWeight="bold"
                      bg="green.200"
                      p="2px 20px"
                      ml="10px"
                      fontSize="0.7em"
                    >
                      DISPONIBLE
                    </Badge>
                  ) : (
                    <Badge
                      fontWeight="bold"
                      bg="red.200"
                      p="2px 20px"
                      ml="10px"
                      fontSize="0.7em"
                    >
                      NO DISPONIBLE
                    </Badge>
                  )}
                </Flex>
                <Heading
                  fontSize="4xl"
                  color="brand.500"
                  fontWeight="bold"
                  lineHeight="50px"
                  letterSpacing="0"
                  mt="30px"
                >
                  {product.name}
                </Heading>
                <Text fontSize="2xl" mt="20px">
                  {product.description}
                </Text>
                <Button
                  mt="30px"
                  size="lg"
                  borderRadius="30px"
                  colorScheme="brand"
                  padding="5px 40px"
                  leftIcon={<FaWhatsapp />}
                >
                  Consultar ahora
                </Button>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default Product
