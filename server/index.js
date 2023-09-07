import express from 'express'
import ViteExpress from 'vite-express'
import handlerFunctions from './controller.js'

const app = express()
const PORT = 4545


app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/movies')
app.get('/movie/:id')
app.post('/movies', handlerFunctions.addMovie )
app.put('/movies/:id')
app.delete('/movies/:id')

ViteExpress.listen(app, PORT, () => console.log(`Take us to warp ${PORT}`))