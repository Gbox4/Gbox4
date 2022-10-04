// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getCollection } from '../../lib/mongodb'

type HelloResponse = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HelloResponse>
) {
  const songs = await getCollection("songs")
  songs.insertOne({name: "Wish You Were Here", artist: "Pink Floyd"})
  
  res.status(200).json({ message: 'Hello' })
}
