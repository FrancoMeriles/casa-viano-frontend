import type { NextApiRequest, NextApiResponse } from 'next'
import service from '@services/bff'
import { getErrorResponse } from '@utils/index'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await service.get('/products/featured')
    res.status(response.status).json({ ...response.data })
  } catch (err) {
    res.status(err.response.status).json(getErrorResponse(err))
  }
}
