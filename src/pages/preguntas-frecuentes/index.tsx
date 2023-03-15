import Head from 'next/head'

import Header from '@components/Header'
import Footer from '@components/Footer'
import Whatsapp from '@components/Whatsapp'

import HeaderFaq from '@components/HeaderFaq'
import FaqContent from '@components/Faq'

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

const Faq = ({ messages }: Props) => {
  const [whatsappMessages] = messages.filter(
    (message) => message.type === 'whatsapp-icon'
  )
  return (
    <>
      <Head>
        <title>Casa Viano - Preguntas Frecuentes</title>
        <meta name="description" content="Casa Viano - Preguntas Frecuentes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Breadcrumb />

      <main>
        <HeaderFaq />
        <FaqContent />
      </main>
      <Whatsapp messages={whatsappMessages} />
      <Footer />
    </>
  )
}

export default Faq
