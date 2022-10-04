import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI!

export let client: MongoClient;
export let database: Db;

export const connect = async (): Promise<Db> => {
  if (!database) {
    client = await MongoClient.connect(uri);
    database = client.db("NEXT_DB_NAME");
  }

  return database;
};

export const getCollection = async (collectionName: string) => {
  const db = await connect();
  return db.collection(collectionName);
};