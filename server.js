// Improtar uma dependencia
const express = require('express')
const nunjucks = require('nunjucks')

//  Inicia o servidor
const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function (req, res) {
    const about = {
        avatar_url: "img-leonardo.jpeg",
        name: "Leonardo Freitas",
        role: "Desenvolvedor Fullstack",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit <a target='_blank' href='https://github.com/LeoPFreitas'>LeoPFreitas.</a>",

        link: [
            { name: "Github", url: "https://github.com/LeoPFreitas" },
            { name: "Github", url: "https://github.com/LeoPFreitas" },
            { name: "Github", url: "https://github.com/LeoPFreitas" }
        ]
    }

    return res.render('about', { about: about }) // por ser iguais, pode meter só about
})

server.get("/portfolio", function (req, res) {
    return res.render('portfolio', { items: videos })
})

server.listen(5000, function () {
    console.log("server is running!")
})