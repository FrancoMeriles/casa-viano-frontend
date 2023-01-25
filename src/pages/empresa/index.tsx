import Head from 'next/head'

import Header from '@components/Header'
import Footer from '@components/Footer'
import Whatsapp from '@components/Whatsapp'
import HeaderEmpresa from '@components/HeaderEmpresa'
import EmpresaContent from '@components/EmpresaContent'
import Breadcrumb from '@components/Breadcrumbs'
import { GetServerSideProps } from 'next/types'
import { getErrorUrl } from '@utils/index'
import service from '@services/local'
import { MessagesInterface } from '@customTypes/messages'

export const getServerSideProps: GetServerSideProps = async () => {
  let data
  try {
    const response = await service.get(`/messages`)
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
    props: {
      messages: data.messages,
    },
  }
}
interface Props {
  messages: MessagesInterface[]
}

const Company = ({ messages }: Props) => {
  const [whatsappMessages] = messages.filter(
    (message) => message.type === 'whatsapp-icon'
  )
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
      <Whatsapp messages={whatsappMessages} />
      <Footer />
    </>
  )
}

export default Company
