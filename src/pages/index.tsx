import Head from 'next/head'
import Footer from '@components/Footer'
import Header from '@components/Header'
import Hero from '@components/Hero'
import FeaturedProduct from '@components/FeaturedProduct'
import Testimonials from '@components/Testimonials'
import FeaturedCategory from '@components/FeaturedCategory'
import Brands from '@components/Brands'
import Counters from '@components/Counters'
import Whatsapp from '@components/Whatsapp'

export default function Home() {
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
        <FeaturedProduct />
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
