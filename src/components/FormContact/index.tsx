/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  Button,
  Select,
} from '@chakra-ui/react'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

export default function FormContact() {
  const [loadingBtn, setLoadingBtn] = useState(false)

  const validationSchema = Yup.object({
    message: Yup.string()
      .min(5, 'Debe contener al menos 5 carácteres')
      .required('Este campo es requerido'),
    phone: Yup.number()
      .typeError('Este campo tiene que ser solo números')
      .required('Este campo es requerido'),
    name: Yup.string().required('Este campo es requerido'),
    email: Yup.string()
      .email('El email no es válido')
      .required('Este campo es requerido'),
    province: Yup.string().required('Este campo es requerido'),
    about: Yup.string().required('Este campo es requerido'),
  })

  const updateMessage = async (data: any) => {
    setLoadingBtn(true)
    console.log(data)
    // try {
    //   await service.post(`/messages/edit/${message_id}`, data)
    //   push('/dashboard/contacts')
    // } catch (error) {
    //   console.log(error)
    //   setLoadingBtn(false)
    // }
  }
  return (
    <Box
      p={{
        base: '10px',
        sm: '30px',
        md: '50px',
      }}
    >
      <Formik
        initialValues={{
          name: '',
          phone: '',
          email: '',
          province: '',
          about: '',
          message: '',
        }}
        onSubmit={(values) => updateMessage(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <FormControl mt="20px" isInvalid={!!errors.name && touched.name}>
              <FormLabel fontSize="20px" color="brand.500" htmlFor="name">
                Nombre y Apellido
              </FormLabel>
              <Field
                as={Input}
                borderColor="gray.100"
                _hover={{
                  bg: 'white',
                }}
                type="text"
                name="name"
                size="lg"
              />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>
            <Flex>
              <Box flex="1" pr="10px">
                <FormControl
                  mt="20px"
                  isInvalid={!!errors.phone && touched.phone}
                >
                  <FormLabel fontSize="20px" color="brand.500" htmlFor="phone">
                    Teléfono
                  </FormLabel>
                  <Field
                    as={Input}
                    borderColor="gray.100"
                    _hover={{
                      bg: 'white',
                    }}
                    type="tel"
                    name="phone"
                    size="lg"
                  />
                  <FormErrorMessage>{errors.phone}</FormErrorMessage>
                </FormControl>
              </Box>
              <Box flex="1" pl="10px">
                <FormControl
                  mt="20px"
                  isInvalid={!!errors.email && touched.email}
                >
                  <FormLabel fontSize="20px" color="brand.500" htmlFor="email">
                    Email
                  </FormLabel>
                  <Field
                    as={Input}
                    borderColor="gray.100"
                    _hover={{
                      bg: 'white',
                    }}
                    type="text"
                    name="email"
                    size="lg"
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
              </Box>
            </Flex>
            <FormControl
              mt="20px"
              isInvalid={!!errors.province && touched.province}
            >
              <FormLabel fontSize="20px" color="brand.500" htmlFor="province">
                Provincia
              </FormLabel>
              <Field
                as={Select}
                borderColor="gray.100"
                _hover={{
                  bg: 'white',
                }}
                bg="white"
                name="province"
                size="lg"
              >
                <option value="">Seleccionar</option>
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Catamarca">Catamarca</option>
                <option value="Chaco">Chaco</option>
                <option value="Chubut">Chubut</option>
                <option value="Ciudad Autonoma De Bs As">
                  Ciudad Autonoma De Bs As
                </option>
                <option value="Cordoba">Córdoba</option>
                <option value="Corrientes">Corrientes</option>
                <option value="Entre Rios">Entre Rios</option>
                <option value="Formosa">Formosa</option>
                <option value="Jujuy">Jujuy</option>
                <option value="La Pampa">La Pampa</option>
                <option value="La Rioja">La Rioja</option>
                <option value="Mendoza">Mendoza</option>
                <option value="Misiones">Misiones</option>
                <option value="Neuquen">Neuquen</option>
                <option value="Rio Negro">Rio Negro</option>
                <option value="Salta">Salta</option>
                <option value="San Luis">San Luis</option>
                <option value="Santa Cruz">Santa Cruz</option>
                <option value="Santa Fe">Santa Fe</option>
                <option value="Santiago del Estero">Santiago del Estero</option>
                <option value="Tierra del Fuego">Tierra del Fuego</option>
              </Field>
              <FormErrorMessage>{errors.province}</FormErrorMessage>
            </FormControl>
            <FormControl mt="20px" isInvalid={!!errors.about && touched.about}>
              <FormLabel fontSize="20px" color="brand.500" htmlFor="about">
                Asunto
              </FormLabel>
              <Field
                as={Select}
                borderColor="gray.100"
                _hover={{
                  bg: 'white',
                }}
                bg="white"
                name="about"
                size="lg"
                placeholder="Selecciona el motivo de tu consulta"
              >
                <option value="nose">Nose</option>
              </Field>
              <FormErrorMessage>{errors.about}</FormErrorMessage>
            </FormControl>
            <FormControl
              mt="20px"
              isInvalid={!!errors.message && touched.message}
            >
              <FormLabel fontSize="20px" color="brand.500" htmlFor="message">
                Consulta
              </FormLabel>
              <Field
                as={Textarea}
                borderColor="gray.100"
                _hover={{
                  bg: 'white',
                }}
                name="message"
                size="lg"
              />
              <FormErrorMessage>{errors.message}</FormErrorMessage>
            </FormControl>
            <Box textAlign="right">
              <Button
                mt="30px"
                size="lg"
                isLoading={loadingBtn}
                loadingText="Enviando"
                colorScheme="brand"
                type="submit"
                borderRadius="50px"
                pl="50px"
                pr="50px"
              >
                Enviar Consulta
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  )
}
