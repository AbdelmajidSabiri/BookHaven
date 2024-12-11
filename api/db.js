const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 5000;

const uri = "mongodb://localhost:27017";
const dbName = "BookHaven";
const client = new MongoClient(uri);
let db;

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB and set the database
async function connectToDatabase() {
  try {
    await client.connect();
    db = client.db(dbName);
    console.log(`Connected to database: ${dbName}`);

  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  }
}

connectToDatabase();

// Route to fetch all books
app.get("/api/books", async (req, res) => {
  try {
    const books = await db.collection("books").find().toArray();
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to fetch books");
  }
});

// Route to add a new book
app.post("/api/books", async (req, res) => {
  try {
    const newBook = req.body;
    const result = await db.collection("books").insertOne(newBook);
    res.status(201).json(result.ops[0]);  // Respond with the created book
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to add book");
  }
});

// Start the server and connect to MongoDB
connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error("Error starting server:", err);
});
