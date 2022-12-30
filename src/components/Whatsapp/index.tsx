import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { FaWhatsapp } from 'react-icons/fa'
const Whatsapp = () => {
  return (
    <IconButton
      position="fixed"
      width="50px"
      zIndex="9"
      bottom="30"
      right="30"
      as="a"
      bg="whatsapp.500"
      _hover={{
        bg: 'whatsapp.600',
      }}
      size="lg"
      borderRadius="25px"
      cursor="pointer"
      aria-label="Whatsapp"
      icon={<FaWhatsapp color="white" fontSize="1.5rem" />}
      onClick={() => console.log('se clickeo whaatsapp')}
    />
  )
}

export default Whatsapp
