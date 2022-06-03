const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send(`<h1>AKS sample workload to reach On-Premises REST API</h1>`)
})

app.use('/api/onprem', require('./api/onprem'))

app.listen(PORT, () => console.log(`Server running on port ${PORT} for ${process.env.NODE_ENV}`))