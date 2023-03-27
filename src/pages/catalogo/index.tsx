import Head from 'next/head'
import { useRouter } from 'next/router'

import { Container, Flex, Box, Image, Button, Heading } from '@chakra-ui/react'

import Header from '@components/Header'
import Footer from '@components/Footer'

import HeaderCatalogo from '@components/HeaderCatalogo'

import Breadcrumb from '@components/Breadcrumbs'

export default function Home() {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Catálogo</title>
        <meta name="description" content="Catálogo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Breadcrumb />
      <main>
        <HeaderCatalogo />
        <Container mt="50px">
          <Flex
            mt="60px"
            mb="60px"
            direction={{
              base: 'column',
              md: 'row',
            }}
          >
            <Box
              position="relative"
              mb="30px"
              pr={{
                base: 'auto',
                md: '10px',
              }}
            >
              <Image
                src="/img/maquinarias-usadas.png"
                alt="Maquinarias Usadas"
                w="100%"
              />
              <Box
                position="absolute"
                top={{ base: '20px', md: '50px' }}
                left={{ base: '20px', md: '50px' }}
              >
                <Heading
                  fontSize="5xl"
                  fontWeight="bold"
                  color="white"
                  lineHeight="45px"
                  mb="30px"
                  letterSpacing="0"
                  maxW="300"
                >
                  Maquinarias usadas
                </Heading>
                <Button
                  size="lg"
                  bg="white"
                  color="brand.500"
                  borderRadius="50px"
                  p="20px 30px"
                  onClick={() => router.push('/catalogo/used')}
                >
                  Ver maquinas
                </Button>
              </Box>
            </Box>
            <Box
              position="relative"
              mb="30px"
              pl={{
                base: 'auto',
                md: '10px',
              }}
            >
              <Image
                src="/img/maquinarias-nuevas.png"
                alt="Maquinarias Nuevas"
              />
              <Box
                position="absolute"
                top={{ base: '20px', md: '50px' }}
                left={{ base: '20px', md: '50px' }}
              >
                <Heading
                  fontSize="5xl"
                  fontWeight="bold"
                  color="white"
                  lineHeight="45px"
                  letterSpacing="0"
                  mb="30px"
                  maxW="300"
                >
                  Maquinarias nuevas
                </Heading>
                <Button
                  size="lg"
                  bg="white"
                  color="brand.500"
                  borderRadius="50px"
                  p="20px 30px"
                  onClick={() => router.push('/catalogo/new')}
                >
                  Ver maquinas
                </Button>
              </Box>
            </Box>
          </Flex>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
