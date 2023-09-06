import { Movie }from './model.js'

export default {
    addMovie: async (req, res) => {
        try {
            console.log(req.body)
            const {movieName, imgUrl} = req.body
            const newMov = await Movie.create({movieName, imgUrl})
            console.log(newMov)
            res.sendStatus(200)
        } catch(err){
            console.log(err)
        }
    }
}

// export default handlerFunctions