const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const consolidate = require("consolidate")

const indexRouter = require("./routes/index")

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "html")
app.engine("html", consolidate.underscore)

app.use("/", indexRouter)

app.use((req, res, next) => {
  next()
})
app.use((req, res, next) => {
  const err = new Error("Not Found")
  err.status = 404
  next(err)
})
app.use((err, req, res, next) => {
  res.locals.error = err
  res.status(err.status)
  res.render("404", err)
})

module.exports = app
