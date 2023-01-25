import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { FaWhatsapp } from 'react-icons/fa'

import { MessagesInterface } from '@customTypes/messages'

interface Props {
  messages: MessagesInterface
}

const Whatsapp = ({ messages }: Props) => {
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
      onClick={() =>
        window.open(
          `https://wa.me/${messages.phone}?text=${messages.content}`,
          '_blank'
        )
      }
    />
  )
}

export default Whatsapp
