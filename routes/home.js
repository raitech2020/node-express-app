const express = require("express")
const router = express.Router()

const logger2 = (req, res, next) => {
    console.log("home logger")
    next()
}

router.get("/", logger2, (req, res) => {
    // send text
    res.send("Hi there!")
})

router.get("/text", (req, res) => {
    // send text
    res.send("text output!")
})

router.get("/home", (req, res) => {
    res.send("Welcome to our Company")
})

router.get("/json", (req, res) => {
    // send json
    res.status(200).json({message: 'Hi'})
})

router.get("/file", (req, res) => {
    // send file
    res.status(200).download("server.js")
})

router.get("/html", (req, res) => {
    // send html template
    res.render("index", {
        name: "Bup"
    })
})

module.exports = router
