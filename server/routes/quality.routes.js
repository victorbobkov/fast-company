const express = require('express')
const Quality = require('../models/Qualitiy')
const router = express.Router({ mergeParams: true })

router.get('/', async (req, res) => {
    try {
        const qualities = await Quality.find()
        res.status(200).send(qualities)
    } catch (e) {
        res.status(500).json({
            message: 'Internal Server Error. Try again later'
        })
    }
})

module.exports = router