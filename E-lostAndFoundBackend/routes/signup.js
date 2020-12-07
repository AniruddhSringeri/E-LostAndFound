import express from 'express'
const router = express.Router()
import bcrypt from 'bcryptjs'
import config from 'config'
import jwt from 'jsonwebtoken'

import User from '../models/User.js'

router.post('/',(req,res) => {
    const { name, email, password} = req.body
    // Simple validation
    if(!name || !email || !password) {
        return res.status(400).json({msg: 'Please enter all fields'})
    }

    // Check for existing user
    User.findOne({ email })
      .then(user => {
          if(user) return res.status(400).json({msg: "User already exists"})

          const newUser = new User({
              name,
              email,
              password
          })
          // Create salt and hash
          bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash)=> {
                  if(err) throw err
                  newUser.password = hash
                  newUser.save()
                    .then(user => {

                        jwt.sign(
                            { id: user.id, name: user.name },
                            config.get('jwtSecret'),
                            { expiresIn: 1800 },
                            (err, token) => {
                                if(err) throw error
                                res.json({
                                    token,
                                    user: {
                                        id: user.id,
                                        name: user.name,
                                        email: user.email
                                    }
                                }) 
                            }
                        )
                        
                    })
              })
          })
        })
})


export default router