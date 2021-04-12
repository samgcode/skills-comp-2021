const {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential,
} = require('mongodb-stitch-browser-sdk')

const client = Stitch.initializeDefaultAppClient('skills2021-gqmwb')

const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('skills2021')

client.auth.loginWithCredential(new AnonymousCredential())

export default db