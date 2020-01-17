const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const config = require('config');
const uri = config.get('mongoURI');




const connectDB = async () => {
  const MongoClient = require('mongodb').MongoClient;
  const client = new MongoClient(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
   });

  try{
    
    await client.connect();
    console.log("MongoDB connected...");

    const db = client.db("test");

    let r = await db.collection('inserts').insertOne({a : 1});
    assert.equal(1, r.insertedCount);

  } catch (err) {

    console.error(err.message);

  }
  client.close();

 };

module.exports = connectDB;