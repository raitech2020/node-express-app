const express = require("express")

const app = express()
const port = 3000

// middleware fn
const logger = (req, res, next) => {
    console.log(`url: ${req.originalUrl}`)
    next()
}

// set middleware
app.use(logger)

// set built-in middleware for static file
app.use(express.static("public"))
// set built-in middleware for getting html form req.body
app.use(express.urlencoded({extended: true}))
// set built-in middleware for getting json req.body
app.use(express.json())

// set view engine
app.set("view engine", "ejs")

// app.get("/", (req, res) => {
//     // send text
//     // res.send("Hi there!")
//
// })

// set routes
const homeRouter = require("./routes/home")
app.use("/", homeRouter)

const userRouter = require("./routes/users")
app.use("/users", userRouter)

// start app
app.listen(port)
