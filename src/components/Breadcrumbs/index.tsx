import React from 'react'
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { capitalizeName, translateCategory } from '@utils/index'

interface Links {
  name: string
  link: string
  isCurrentPage: boolean
}

const BreadcrumbComp = () => {
  const [links, setLinks] = React.useState<Links[]>([])
  const { asPath, push } = useRouter()
  React.useEffect(() => {
    const paths = asPath.split('/').slice(1)
    let linkRoutes = ''
    const routes = paths.map((path, i) => {
      const hasQuery = path.includes('?')
      const name = hasQuery ? path.split('?')[0] : path
      linkRoutes += `/${
        path === 'Nuevo' ? 'new' : path === 'Usado' ? 'used' : path
      }`
      let finalName = capitalizeName(name)
      if (name === 'used' || name === 'new') {
        finalName = translateCategory(name)
      }
      return {
        name: finalName,
        link: linkRoutes,
        isCurrentPage: i + 1 === paths.length,
      }
    })
    setLinks(routes)
  }, [asPath])
  return (
    <Box
      bg="white"
      borderTop="solid"
      borderTopWidth="1px"
      borderTopColor="gray.200"
      borderBottom="solid"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
    >
      <Container pt="15px" pb="15px">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink onClick={() => push('/')}>
              Casa Viano
            </BreadcrumbLink>
          </BreadcrumbItem>

          {links.length > 0
            ? links.map((link) => (
                <BreadcrumbItem
                  isCurrentPage={link.isCurrentPage}
                  key={link.name}
                >
                  <BreadcrumbLink onClick={() => push(link.link)}>
                    {link.name === 'Catalogo' ? 'Catálogo' : link.name}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              ))
            : null}
        </Breadcrumb>
      </Container>
    </Box>
  )
}

export default BreadcrumbComp
