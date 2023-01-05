import Head from 'next/head'

import Header from '@components/Header'
import Footer from '@components/Footer'
import Whatsapp from '@components/Whatsapp'
import HeaderEmpresa from '@components/HeaderEmpresa'
import EmpresaContent from '@components/EmpresaContent'
import Breadcrumb from '@components/Breadcrumbs'

const index = () => {
  return (
    <>
      <Head>
        <title>Casa Viano - Empresa</title>
        <meta name="description" content="Casa Viano - Empresa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Breadcrumb />
      <main>
        <HeaderEmpresa />
        <EmpresaContent />
      </main>
      <Whatsapp />
      <Footer />
    </>
  )
}

export default index
