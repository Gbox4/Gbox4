import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI

export let client;
export let database;

export const connect = async () => {
  if (!database) {
    client = await MongoClient.connect(uri);
    database = client.db("NEXT_DB_NAME");
  }
  return database;
};

export const getCollection = async (collectionName) => {
  const db = await connect();
  return db.collection(collectionName);
};