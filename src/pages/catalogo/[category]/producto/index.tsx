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
} from '@chakra-ui/react'
import { FaWhatsapp } from 'react-icons/fa'

import Header from '@components/Header'
import Footer from '@components/Footer'
import Breadcrumb from '@components/Breadcrumbs'

import { images } from '@components/Gallery/_data'
import { Gallery } from '@components/Gallery/Gallery'

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      category: context.query.category,
      slug: context.query.slug,
    },
  }
}

interface Product {
  category: string
  slug: string
}

const Product = ({ category, slug }: Product) => {
  console.log(category)
  console.log(slug)
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
              <Gallery images={images} />
              <Box mt="50px">
                <Text fontSize="2xl" color="brand.500" fontWeight="bold">
                  Descripción
                </Text>
                <Divider m="15px 0" />
                <Text p="16px" fontSize="1xl" lineHeight="30px" color="black">
                  Capacidad: 13m3. Chasis: compacto, ensamblado en bloque con la
                  carrocería. Ejes: cuadrados, de 3” con rodillos cónicos. Tren
                  Delantero: con aro giratorio a bolillas Suspensión: con
                  elásticos reforzados de 63 mm. Autocarga y Descarga: con
                  amando a través de un motor hidráulico con multiplicador de
                  velocidad. Diámetro del tubo 150 mm. Sistema de Descarga al
                  Sinfín: por gravedad, mediante de las boquillas inferiores con
                  apertura y cierre por medio de palancas.
                </Text>
                <Text fontSize="2xl" color="brand.500" fontWeight="bold">
                  Detalles técnicos
                </Text>
                <Divider m="15px 0" />

                <Flex pt="20px" pb="10px" borderBottom="solid 1px #D0D0D0">
                  <Text fontSize="1xl" color="black" flex="1">
                    Campo 1
                  </Text>
                  <Text fontSize="1xl" color="black" flex="4">
                    Descripción
                  </Text>
                </Flex>
                <Flex pt="20px" pb="10px" borderBottom="solid 1px #D0D0D0">
                  <Text fontSize="1xl" color="black" flex="1">
                    Campo 1
                  </Text>
                  <Text fontSize="1xl" color="black" flex="4">
                    Descripción
                  </Text>
                </Flex>
                <Flex pt="20px" pb="10px" borderBottom="solid 1px #D0D0D0">
                  <Text fontSize="1xl" color="black" flex="1">
                    Campo 1
                  </Text>
                  <Text fontSize="1xl" color="black" flex="4">
                    Descripción
                  </Text>
                </Flex>
              </Box>
            </Box>
            <Box
              paddingLeft={{
                base: 'auto',
                lg: '50px',
              }}
              marginBottom={{
                base: '40px',
                lg: 'auto',
              }}
              gridRow={{
                base: 1,
                lg: 'auto',
              }}
            >
              <Box position="sticky" top="110px" bottom="40px">
                <Flex align="center">
                  <Text fontSize="1xl" letterSpacing="2px" color="brand.500">
                    {category.toUpperCase()}
                  </Text>
                  <Badge
                    fontWeight="bold"
                    bg="green.200"
                    p="2px 20px"
                    ml="10px"
                    fontSize="0.7em"
                  >
                    DISPONIBLE
                  </Badge>
                </Flex>
                <Text
                  fontSize="4xl"
                  color="brand.500"
                  fontWeight="bold"
                  lineHeight="50px"
                  mt="30px"
                >
                  Nombre de producto extenso de tres líneas de texto
                </Text>
                <Text fontSize="2xl" mt="20px">
                  Descripción resumida del producto que contempla hasta cuatro
                  líneas de texto. Para más detalle incluirlos en los campos de
                  descripción detallada.
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
          {/* <Box
              maxW="3xl"
              mx="auto"
              px={{ base: '4', md: '8', lg: '12' }}
              py={{ base: '6', md: '8', lg: '12' }}
            >
              <Gallery images={images} />
            </Box> */}
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default Product
