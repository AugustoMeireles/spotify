import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://augustomvargas:5qVv0JAFvhY9IBxi@cluster0.dc3oe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
