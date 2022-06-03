const functions = require('firebase-functions');

const updateKey = () => {
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = 'mongodb+srv://kyledickey:loudogky8@cluster0.4lv6urk.mongodb.net/?retryWrites=true&w=majority';
    const mClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });    

    const key =  randomString.generate(256)
    mClient.connect().then(() => {
        const db = mClient.db('main')
        const collection = db.collection('apiKey')
        collection.updateOne({ current: true }, { $set: { key: key } }).then(() => {
            console.log('----- API Key Updated -----')
            mClient.close()
        })
    })
}

exports.keyGen = functions.pubsub.schedule('every 24 hours').onRun(updateKey)