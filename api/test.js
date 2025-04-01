const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://abdelmajidsabiri:Kgvo3539@cluster0.sm2gs.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  } finally {
    await client.close();
  }
}

run();
