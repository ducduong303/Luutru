require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const userRouter = require('./routes/userRouter')

const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())


// Routes
app.use('/users', userRouter)
app.get("/", (req, res) => {
    res.send({ msg: "xin chào các bạn" })
})
app.get("/ms", (req, res) => {
    res.send({ msg: "Messeage thành công" })
})

const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log('Connected to MongoDB')
})

// Below MongoDB and  Above Listen Sever
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
//     });
// }

// Listen Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})


    // "client": "cd client && npm run start",
    // "client-install": "cd client && npm install",
    // "server-install": "npm install",
    // "install-all": "concurrently \"npm run client-install\" \"npm run server-install\" ",
    // "dev": "concurrently \"npm run client\" \"npm run server\" ",
    // "heroku-postbuild": "cd client && npm install && npm run build"