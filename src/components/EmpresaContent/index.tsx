import CountUp from 'react-countup'
import {
  Grid,
  GridItem,
  Text,
  Box,
  Heading,
  Flex,
  Divider,
} from '@chakra-ui/react'

export default function EmpresaContent() {
  console.log('test')
  return (
    <Grid templateColumns="repeat(7, 1fr)">
      <GridItem colSpan={4} p="70px">
        <Text fontSize="xl" mb="30px" lineHeight="40px">
          En <Box as="strong">1910 Don Andrés Martín Viano</Box> inaugura una
          pequeña Ferretería en el local de calle Italia 1674, construida por él
          mismo con hierros, alambres, piedras y mezcla, donde funcionará por
          más de 50 años.
        </Text>
        <Text fontSize="xl" mb="30px" lineHeight="40px">
          En el año <Box as="strong">1948</Box> su hijo
          <Box as="strong"> Ulises Rampy</Box> se hace cargo de la ferretería
          ampliándose en diferentes rubros, comenzando a vender maquinarias y
          tractores. El 15 de julio de 1978 se inaugura el actual edificio de
          Av. Mullally y calle Italia, remodelando esta histórica esquina
          realiquense, ampliando su comodidad y servicios al campo y a la
          comunidad.
        </Text>
        <Text fontSize="xl" mb="30px" lineHeight="40px">
          En <Box as="strong">1980</Box> asumiría funciones
          <Box as="strong"> Roberto Andrés Beta</Box> bajo las premisas de
          mantener el vínculo cercano con el cliente y atender de forma más
          eficiente a sus necesidades, en <Box as="strong">1990</Box> abre una
          sucursal en Huinca Renancó.
        </Text>
        <Text fontSize="xl" mb="30px" lineHeight="40px">
          En <Box as="strong">2012</Box> se incorpora la cuarta generación
          <Box as="strong"> Gonzalo Andrés</Box> con el objetivo de
          profesionalizar la empresa familiar, en <Box as="strong">2020 </Box>
          inauguró la concesionaria de Maquinas Agrícolas sobre la RN35
          volviendo a tener taller propio.
        </Text>
        <Text fontSize="xl" mb="30px" lineHeight="40px">
          Desde ya que nada de esto hubiese sido posible sin
          <Box as="strong"> usted</Box>, nuestro cliente, aquel que también lo
          fue por varias generaciones, ganando una mutua confianza que nos
          impulsa a seguir creciendo y creyendo en ustedes y en nosotros.
        </Text>
        <Text fontSize="xl" mb="30px" lineHeight="40px">
          <Box as="strong">¡GRACIAS!</Box> por seguir confiando en nuestra
          empresa y ser parte importante de ella, los esperamos en cualquiera de
          nuestros locales, estamos a su entera disposición:
          <Box as="strong"> CASA VIANO.</Box>
        </Text>
      </GridItem>
      <GridItem colSpan={3} bg="brand.500">
        <Box p="70px">
          <Flex alignItems="center" p="20px" mb="20px">
            <Text fontSize="6xl" fontWeight="bold" color="white">
              <CountUp end={112} separator="." enableScrollSpy />
            </Text>
            <Heading
              ml="20px"
              fontSize="2xl"
              color="white"
              lineHeight="30px"
              maxW="180"
            >
              Años de trayectoria
            </Heading>
          </Flex>
          <Divider />
          <Flex alignItems="center" p="20px" mb="20px" mt="20px">
            <Text fontSize="6xl" fontWeight="bold" color="white">
              <CountUp prefix="+" end={10000} separator="." enableScrollSpy />
            </Text>
            <Heading
              ml="20px"
              fontSize="2xl"
              color="white"
              lineHeight="30px"
              maxW="180"
            >
              Maquinarias vendidas
            </Heading>
          </Flex>
          <Divider />
          <Flex alignItems="center" p="20px" mt="40px">
            <Heading
              ml="20px"
              fontSize="3xl"
              fontWeight="bold"
              color="white"
              lineHeight="35px"
            >
              Con presencia en La Pampa, sur de Córdoba, sur de San Luis y oeste
              de Buenos Aires.
            </Heading>
          </Flex>
        </Box>
      </GridItem>
    </Grid>
  )
}
