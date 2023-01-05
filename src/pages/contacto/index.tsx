import Head from 'next/head'

import Header from '@components/Header'
import Footer from '@components/Footer'
import Whatsapp from '@components/Whatsapp'

import Breadcrumb from '@components/Breadcrumbs'

const index = () => {
  return (
    <>
      <Head>
        <title>Casa Viano - Contacto</title>
        <meta name="description" content="Casa Viano - Contacto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Breadcrumb />

      <main>Main</main>
      <Whatsapp />
      <Footer />
    </>
  )
}

export default index
