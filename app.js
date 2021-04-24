const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
	res.render('index')
})

app.listen(process.env.PORT || port, () => {
	console.log(`App listening at localhost:${port}. . .`)
})
