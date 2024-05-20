import express from 'express'
import {data} from './data.js'

const app = express()
const PORT = 3000

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/destination', (req, res) => {
    res.render('destination', {destinations: data.destinations})
})

app.get('/crew', (req, res) => {
    res.render('crew', {crew: data.crew})
})

app.get('/technology', (req, res) => {
    res.render('technology', {technology: data.technology})
})

app.listen(PORT, () => {
    console.log(`[server]: listening on port: ${PORT}`)
})