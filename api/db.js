const express = require("express");
const cors = require("cors"); 
const { MongoClient } = require("mongodb");
require("dotenv").config({path:"./config.env"})

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 5000;
let db;

const dbu = process.env.ATLAS_URI
const client = new MongoClient(dbu)

async function connectToDatabase() {

  try {
    await client.connect();
    db = client.db("BookHaven");

    const collections = await db.collections()
    collections.forEach((collection) => console.log(collection.collectionName))

  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  }
}


app.get("/api/books", async (req, res) => {
  try {
    const books = await db.collection("books").find().toArray();
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to fetch books");
  }
});

app.post("/api/books", async (req, res) => {
  try {
    const newBook = req.body;
    const result = await db.collection("books").insertOne(newBook);
    res.status(201).json(result.ops[0]);  // Respond with the created book
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add book" }); 
  }
});

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
