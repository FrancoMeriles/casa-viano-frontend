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
import { MessagesInterface } from '@customTypes/messages'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const getServerSideProps: GetServerSideProps = async () => {
  let products
  let testimonials
  let messages
  try {
    const requests = [
      axiosInstance.get('/products/featured'),
      axiosInstance.get('/testimonials'),
      axiosInstance.get('/messages'),
    ]
    const responses = await axios.all(requests)
    const dataArray = responses.map((response) => response.data)
    products = dataArray.filter((data) => Object.hasOwn(data, 'products'))
    testimonials = dataArray.filter((data) =>
      Object.hasOwn(data, 'testimonials')
    )
    messages = dataArray.find((data) => Object.hasOwn(data, 'messages'))
  } catch (err) {
    console.log(err)
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
      messages: messages.messages,
    },
  }
}

interface Props {
  products: ProductsInterface[]
  testimonials: TestimonialInterface[]
  messages: MessagesInterface[]
}

const Home: FC<Props> = ({ products, testimonials, messages }) => {
  const [sliderMessages] = messages.filter(
    (message) => message.type === 'slider'
  )
  const [whatsappMessages] = messages.filter(
    (message) => message.type === 'whatsapp-icon'
  )
  const [productMessages] = messages.filter(
    (message) => message.type === 'product'
  )

  return (
    <>
      <Head>
        <title>Casa Viano</title>
        <meta name="description" content="Casa Viano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero messages={sliderMessages} />
        <FeaturedProduct messages={productMessages} products={products} />
        <Counters />
        <Brands />
        <FeaturedCategory />
        <Testimonials testimonials={testimonials} />
      </main>
      <Whatsapp messages={whatsappMessages} />
      <Footer />
    </>
  )
}

export default Home
