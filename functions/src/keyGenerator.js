const { MongoClient, ServerApiVersion } = require('mongodb');

// Connect Mongo
const uri = 'mongodb+srv://kyledickey:loudogky8@cluster0.4lv6urk.mongodb.net/?retryWrites=true&w=majority';
const mClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
mClient.connect();
const db = mClient.db('main')

const keyGenerator = async () => {
    const key = rand.generate(256);
    
    const collection = db.collection('apiKey')

    await collection.updateOne({ current: true }, { $set: { key: key } })

    console.log('----- API Key Updated -----')
}

module.exports = keyGenerator