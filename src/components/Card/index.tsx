import { FC } from 'react'
import { useRouter } from 'next/router'

import {
  Button,
  Card,
  CardBody,
  Image,
  Heading,
  CardFooter,
} from '@chakra-ui/react'

import { ProductsInterface } from '@customTypes/products'
import { MessagesInterface } from '@customTypes/messages'

interface Props {
  product: ProductsInterface
  messages: MessagesInterface
}

const CardComp: FC<Props> = ({ product, messages }) => {
  const { images, name, condition, slug } = product
  let principalImage
  if (images && images.length > 0) {
    principalImage = images.find((image) => image.principal)
  }
  const router = useRouter()
  let category = router.query.category
  if (!category) {
    category = condition === 'new' ? 'Nuevo' : 'Usado'
  }
  return (
    <Card>
      <Image
        src={principalImage?.path}
        fallbackSrc="/img/bg-empresa.png"
        alt="Green double couch with wooden legs"
        borderRadius="sm"
      />
      <CardBody>
        <Heading size="xs" noOfLines={2}>
          {name}
        </Heading>
      </CardBody>
      <CardFooter display="flex" flexDirection="column">
        <Button
          mb="1 0px"
          variant="solid"
          width="100%"
          colorScheme="brand"
          size="lg"
          borderRadius="50px"
          onClick={() =>
            window.open(
              `https://wa.me/${messages.phone}?text=${
                messages.content
              } Producto: ${name}
              Condición: ${condition === 'new' ? 'Nuevo' : 'Usado'}
              `,
              '_blank'
            )
          }
        >
          Consultar ahora
        </Button>
        <Button
          onClick={() =>
            router.push(`/catalogo/${category}/producto?slug=${slug}`)
          }
          size="lg"
          width="100%"
          variant="ghost"
          colorScheme="brand"
          mt="10px"
        >
          Ver detalle
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardComp
