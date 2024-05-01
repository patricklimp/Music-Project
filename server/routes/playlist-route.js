const express = require('express');
const router = express.Router();
const PlaylistRepository = require('../database/playlistrepository')

// var allPlaylists = [];
//     allPlaylists.push({id:1, title: 'POP', coverImg: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F781022760353018715%2F&psig=AOvVaw0n2a6HnTpDNU0qieMW1d40&ust=1703716903243000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCigp6WroMDFQAAAAAdAAAAABAD'})
//     allPlaylists.push({id:2, title: 'R&B', coverImg: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Foriginalmusic.es%2Fblog%2Fconociendo-estilos-musicales-rb%2F&psig=AOvVaw1eTBvrqijdSlobiHlBSOqM&ust=1703717121740000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDB14SXroMDFQAAAAAdAAAAABAI'})
//     var nextPlaylistId = 3;

    const repository = new PlaylistRepository()

router.get('/', async (req, res)=>{
  
    res.json(await repository.getAll())
})

router.post('/', (req, res)=>{
    const playlist = req.body;
    repository.add(playlist);
    res.json(playlist);
    
})

router.delete('/', async (req, res)=> {
    const playlist = req.body
    const isDeleted = await repository.delete(playlist)

    if(isDeleted){
        res.json(playlist) 
    }

   else {
     res.sendStatus(404)
   }
    
})




module.exports = router