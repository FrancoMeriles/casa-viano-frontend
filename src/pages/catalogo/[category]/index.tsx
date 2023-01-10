import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { Container, Text, SimpleGrid, Heading } from '@chakra-ui/react'

import Header from '@components/Header'
import Footer from '@components/Footer'
import FeaturedCategory from '@components/FeaturedCategory'

import Breadcrumb from '@components/Breadcrumbs'
import Card from '@components/Card'
import axios from '@services/local'

import { translateCategory } from '@utils/index'

import { ProductsInterface } from '@customTypes/products'
interface Props {
  category: string
  products: ProductsInterface[]
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await axios.get(
    `/products?condition=${context.query.category}`
  )
  return {
    props: {
      products: data.products,
      category: context.query.category,
    },
  }
}

const Category = ({ category, products }: Props) => {
  console.log('llego final')
  console.log(products)
  const title = `Maquinaria ${translateCategory(category)}`
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
        <Container mt="50px">
          <Text fontSize="1xl" letterSpacing="2px" color="gray" mb="10px">
            CATÁLOGO
          </Text>
          <Heading
            fontSize="5xl"
            color="brand.500"
            fontWeight="bold"
            lineHeight="50px"
            letterSpacing="0"
          >
            {title}
          </Heading>
          <SimpleGrid
            mt="60px"
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
          >
            {products.map((product) => (
              <Card key={product._id} product={product} />
            ))}
          </SimpleGrid>
          <FeaturedCategory />
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default Category
