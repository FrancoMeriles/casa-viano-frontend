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

import axiosInstance from '@services/local'
import axios from 'axios'

import { Gallery } from '@components/Gallery/Gallery'
import { ProductsInterface } from '@customTypes/products'
import { getErrorUrl, translateCategory } from '@utils/index'
import { MessagesInterface } from '@customTypes/messages'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query

  let product
  let messages
  try {
    const requests = [
      axiosInstance.get(`/products/slug/${slug}`),
      axiosInstance.get('/messages'),
    ]
    const responses = await axios.all(requests)
    const dataArray = responses.map((response) => response.data)
    product = dataArray.find((data) => Object.hasOwn(data, 'product'))
    messages = dataArray.find((data) => Object.hasOwn(data, 'messages'))
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
      product: product.product,
      messages: messages.messages,
    },
  }
}

interface Props {
  category: string
  slug: string
  messages: MessagesInterface[]
  product: ProductsInterface
}

const Product = ({ category, product, messages }: Props) => {
  const [productMessages] = messages.filter(
    (message) => message.type === 'product'
  )
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
                      direction={{
                        base: 'column',
                        md: 'row',
                      }}
                    >
                      <Text fontSize="1xl" color="black" flex="1" p="5">
                        {attribute.key}
                      </Text>
                      <Text
                        fontSize="1xl"
                        color="black"
                        flex="4"
                        bg="#F8FAFC"
                        p="5"
                      >
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
                  onClick={() =>
                    window.open(
                      `https://wa.me/${productMessages.phone}?text=${
                        productMessages.content
                      } Producto: ${product.name}
                      Condición: ${
                        product.condition === 'new' ? 'Nuevo' : 'Usado'
                      }
                      Disponibilidad: ${
                        product.is_available ? 'Disponible' : 'No disponible'
                      }
                      `,
                      '_blank'
                    )
                  }
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
