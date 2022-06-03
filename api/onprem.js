const express = require('express')
const axios = require('axios')
const https = require('https')

const router = express.Router()

const apiPath = process.env.REMOTE_API;
const config = {
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
};

router.get('/', async (req, res) => {
    try {
        const response = await axios.get(`${apiPath}`, config);
        res.json(response.data);
    } catch (error) {
        if (error && error.message) {
            res.json({ message: error.message });
        } else {
            res.json({ message: 'Something went wrong' });
        }
    }
})

module.exports = router;