const express = require('express');
const path  = require('path');
const bcrypt = require('bcrypt')

let staticPath = path.join(__dirname, "public")

const app = express();

app.use(express.static(staticPath));

app.listen(8080, () => {
	console.log('Executando na porta 8080...');
})



app.get("/", (req, res) => {
	res.sendFile(path.join(staticPath, "index.html"));
})

app.get("/404", (req, res) => {
	res.sendFile(path.join(staticPath, "404.html"));
})

app.use((req, res) => {
	res.redirect('/404');
})