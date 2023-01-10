type AttributesType = {
  key: string
  value: string
}

type ImagesType = {
  principal: boolean
  path: string
}

export interface ProductsInterface {
  _id: string
  slug: string
  name: string
  description: number
  body: number
  is_available: boolean
  condition: string
  featured: boolean
  attributes: AttributesType[]
  images: ImagesType[]
}
