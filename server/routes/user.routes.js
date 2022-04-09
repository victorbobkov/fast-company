const express = require('express')
const User = require('../models/User')
const router = express.Router({ mergeParams: true })

router.patch('/:userId', async (req, res) => {
   try {
      const { userId } = req.params

      // todo: userId === current user id
      if (userId) {
         const updatedUsers = await User.findByIdAndUpdate(userId, req.body, {new: true})
         res.send(updatedUsers)
      } else {
         res.status(401).json({message: 'Unauthorized'})
      }
   } catch (e) {
      res.status(500).json({
         message: 'На сервере произошла ошибка. Попробуйте позже'
      })
      console.log(e)
   }
})

router.get('/', async (req, res) => {
   try {
      const list = await User.find()
      res.status(200).send(list)
   } catch (e) {
      res.status(500).json({
         message: 'На сервере произошла ошибка. Попробуйте позже'
      })
      console.log(e)
   }
})

module.exports = router