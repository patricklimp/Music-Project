
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://patricklimp:patrick94@cluster0.plaznzk.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function addPlaylist(playlist) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
   var insertPlaylist = await client.db("MusicApp").collection('Playlists').insertOne(playlist);
    console.log("playlist inserida.");
    return insertPlaylist
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

async function getAllPlaylists() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
     var allPlaylist = await client.db("MusicApp").collection('Playlists').find().toArray();
      return allPlaylist
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }

  async function deletePlaylist(idPlaylist) {
    const id = new ObjectId(idPlaylist._id)

    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
     var deletePlaylist = await client.db("MusicApp").collection('Playlists').deleteOne({"_id":id});
      return deletePlaylist.deletedCount > 0
    } catch(error){
        console.log(error)
        return false
    }finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
// run().catch(console.dir);

module.exports = {addPlaylist, getAllPlaylists, deletePlaylist}