const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://Recipeapp:Password@recipeapp.wn99l.mongodb.net/?retryWrites=true&w=majority&appName=Recipeapp";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tlsAllowInvalidCertificates: true,
});

async function connectDB() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB! "
    );
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
}

module.exports = connectDB;
