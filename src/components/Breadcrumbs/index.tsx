import React from 'react'
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

interface Links {
  name: string
  link: string
  isCurrentPage: boolean
}

const BreadcrumbComp = () => {
  const [links, setLinks] = React.useState<Links[]>([])
  const { asPath } = useRouter()
  React.useEffect(() => {
    const paths = asPath.split('/').slice(1)
    let linkRoutes = ''
    const routes = paths.map((path, i) => {
      const hasQuery = path.includes('?')
      const name = hasQuery ? path.split('?')[0] : path
      const capitalizeName = `${name[0].toUpperCase()}${name.substring(1)}`
      linkRoutes += `/${path}`
      return {
        name: capitalizeName,
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
      marginBottom="50px"
    >
      <Container p="15px 0">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Casa Viano</BreadcrumbLink>
          </BreadcrumbItem>

          {links.length > 0
            ? links.map((link) => (
                <BreadcrumbItem
                  isCurrentPage={link.isCurrentPage}
                  key={link.name}
                >
                  <BreadcrumbLink href={link.link}>
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
