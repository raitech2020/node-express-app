const express = require("express")
const router = express.Router()

const userLogger = (req, res, next) => {
    console.log("userLogger")
    next()
}

router.use(userLogger)

router.get("/", (req, res) => {
    // query params
    const name = req.query.name
    const age = req.query.age
    // res.send("Users list")
    if (name && age) {
        res.send(`Users: name=${name}, age=${age}`)
    } else if (name) {
        res.send(`Users: name=${name}`)
    } else if (age) {
        res.send(`Users: age=${age}`)
    } else {
        res.send("Users list")
    }
})

// static route
router.get("/new", (req, res) => {
    res.render("users/new", {firstName: "Test"})
})

router.post("/", (req, res) => {
    console.log(req.body.firstName)
    const isValid = false
    if (isValid) {
        users.push({name: req.body.firstName})
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("error")
        res.render("users/new", {firstName: req.body.firstName})
    }
})

// chaining routes (/:id is a dynamic route)
router.route("/:id")
    .get((req, res) => {
        console.log(req.user)
        res.send(`Get user with id ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update user with id ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete user with id ${req.params.id}`)
    })

const users = [
    {name: "Thompson"},
    {name: "Pike"}
]

router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router
