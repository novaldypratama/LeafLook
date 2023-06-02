const { MongoClient } = require('mongodb');

const connectionURL = '<connectionURL>';
const databaseName = '<databaseName>';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

async function connectToDatabase() {
  try {
    const client = await MongoClient.connect(connectionURL, options);
    db = client.db(databaseName);
    console.log('Connected to the database!');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}


module.exports = {
  connectToDatabase,
  db,
};
