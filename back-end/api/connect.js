import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://devleoocha:firstdev@cluster0.onda6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotify");
// const songCollection = await db.collection("songs").find({}).toArray();

