import { FC } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

import Footer from '@components/Footer'
import Header from '@components/Header'
import Hero from '@components/Hero'
import FeaturedProduct from '@components/FeaturedProduct'
import Testimonials from '@components/Testimonials'
import FeaturedCategory from '@components/FeaturedCategory'
import Brands from '@components/Brands'
import Counters from '@components/Counters'
import Whatsapp from '@components/Whatsapp'
import axios from '@services/local'
import { getErrorUrl } from '@utils/index'

import { ProductsInterface } from '@customTypes/products'

export const getServerSideProps: GetServerSideProps = async () => {
  let data
  try {
    const response = await axios.get('/products/featured')
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
    props: { products: data.products },
  }
}

interface Props {
  products: ProductsInterface[]
}

const Home: FC<Props> = ({ products }) => {
  return (
    <>
      <Head>
        <title>Casa Viano</title>
        <meta name="description" content="Casa Viano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        <FeaturedProduct products={products} />
        <Counters />
        <Brands />
        <FeaturedCategory />
        <Testimonials />
      </main>
      <Whatsapp />
      <Footer />
    </>
  )
}

export default Home
