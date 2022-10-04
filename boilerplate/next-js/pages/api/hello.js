import { getCollection } from '../../lib/mongodb'

export default async function handler(req, res) {
  const songs = await getCollection("songs")

  await songs.insertOne({name: "Wish You Were Here", artist: "Pink Floyd"})
  
  res.status(200).json({message: "inserted"})
}