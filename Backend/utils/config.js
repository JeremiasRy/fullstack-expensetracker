require('dotenv').config()

let mongoUrl = process.env.MONGODB_URL
let port = process.env.PORT

module.exports = { mongoUrl, port }