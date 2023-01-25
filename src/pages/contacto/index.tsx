import Head from 'next/head'

import Header from '@components/Header'
import Footer from '@components/Footer'
import Whatsapp from '@components/Whatsapp'

import Breadcrumb from '@components/Breadcrumbs'
import { MessagesInterface } from '@customTypes/messages'
import { getErrorUrl } from '@utils/index'
import { GetServerSideProps } from 'next'
import service from '@services/local'

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

const Contact = ({ messages }: Props) => {
  const [whatsappMessages] = messages.filter(
    (message) => message.type === 'whatsapp-icon'
  )
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
      <Whatsapp messages={whatsappMessages} />
      <Footer />
    </>
  )
}

export default Contact
