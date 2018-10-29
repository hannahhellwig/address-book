import express from "express"
import bodyParser from "body-parser"
const contacts = require("./contacts.json")

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get("/", (req, res) =>
  res.send("Hello World!")
)

app.get("/contacts", (req, res) => {
  res.json(contacts)
})

app.get("/contacts/:id", (req, res) => {
  const contactId = req.params.id
  const filteredContacts = contacts.contacts.filter((item) => {
    return (contactId == item.id)
  })
  if (filteredContacts.length > 0) {
    res.json(filteredContacts)
  } else res.send("404 page not found")

})

app.get("*", (req, res) => {
  res.send("404 page not found")
})

app.listen(3000, () =>
  console.log("Example app listening on port 3000!")
)
