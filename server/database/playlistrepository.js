const mongoDB = require("./mongoDB/mongoDB");

class PlaylistRepository {
    

    async getAll(){
        return await mongoDB.getAllPlaylists()
    }


    add(playlist){
       
        mongoDB.addPlaylist(playlist)
    }

    async delete(playlist){

        return await mongoDB.deletePlaylist(playlist)

    }
}







module.exports = PlaylistRepository

