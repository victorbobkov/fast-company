const express = require('express')
const User = require('../models/User')
const auth = require('../middleware/auth.middleware')
const router = express.Router({ mergeParams: true })

router.patch('/:userId', auth, async (req, res) => {
   try {
      const { userId } = req.params

      if (userId === req.user._id) {
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

router.get('/', auth, async (req, res) => {
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