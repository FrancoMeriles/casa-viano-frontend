import React from 'react'
import { useRouter } from 'next/router'

import {
  Button,
  Card,
  CardBody,
  Image,
  Heading,
  CardFooter,
} from '@chakra-ui/react'

const CardComp = () => {
  const router = useRouter()
  const category = router.query.category

  return (
    <Card>
      <Image
        src="https://dummyimage.com/279x214/e0e0e0/7d7d7d"
        alt="Green double couch with wooden legs"
        borderRadius="sm"
      />
      <CardBody>
        <Heading size="xs" noOfLines={2}>
          Nombre de la maquinaría hasta 2 líneas y elipsis...
        </Heading>
      </CardBody>
      <CardFooter display="flex" flexDirection="column">
        <Button
          mb="1 0px"
          variant="solid"
          width="100%"
          colorScheme="brand"
          color="white"
          size="lg"
          _hover={{
            bg: 'white',
            color: 'brand.500',
          }}
          borderRadius="50px"
        >
          Consultar ahora
        </Button>
        <Button
          onClick={() =>
            router.push(`/catalogo/${category}/producto?slug=some-slug`)
          }
          size="lg"
          width="100%"
          variant="ghost"
          colorScheme="brand"
        >
          Ver detalle
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardComp
