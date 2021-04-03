const {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential,
} = require('mongodb-stitch-browser-sdk')

const client = Stitch.initializeDefaultAppClient('skills2021-gqmwb')

const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('skills2021')

client.auth.loginWithCredential(new AnonymousCredential())


export default db

//96aad01f-c356-4312-8854-7a1363c68e60