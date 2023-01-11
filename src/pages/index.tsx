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
import axiosInstance from '@services/local'
import axios from 'axios'
import { getErrorUrl } from '@utils/index'

import { ProductsInterface } from '@customTypes/products'
import { TestimonialInterface } from '@customTypes/testimonials'

export const getServerSideProps: GetServerSideProps = async () => {
  let products
  let testimonials
  try {
    const requests = [
      axiosInstance.get('/products/featured'),
      axiosInstance.get('/testimonials'),
    ]
    const responses = await axios.all(requests)
    const dataArray = responses.map((response) => response.data)
    products = dataArray.filter((data) => Object.hasOwn(data, 'products'))
    testimonials = dataArray.filter((data) =>
      Object.hasOwn(data, 'testimonials')
    )
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
      products: products[0].products,
      testimonials: testimonials[0].testimonials,
    },
  }
}

interface Props {
  products: ProductsInterface[]
  testimonials: TestimonialInterface[]
}

const Home: FC<Props> = ({ products, testimonials }) => {
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
        <Testimonials testimonials={testimonials} />
      </main>
      <Whatsapp />
      <Footer />
    </>
  )
}

export default Home
