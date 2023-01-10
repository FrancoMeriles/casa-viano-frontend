import type { NextApiRequest, NextApiResponse } from 'next'
import service from '@services/bff'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await service.get('/products/featured')
  res.status(200).json({ ...response.data })
}
