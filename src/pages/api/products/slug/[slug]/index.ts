import type { NextApiRequest, NextApiResponse } from 'next'
import service from '@services/bff'
import { getErrorResponse } from '@utils/index'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query
  try {
    const response = await service.get(`/products/slug/${slug}`)
    res.status(200).json({ ...response.data })
  } catch (err) {
    res.status(err.response.status).json(getErrorResponse(err))
  }
}
