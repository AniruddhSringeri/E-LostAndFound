import express from 'express'
const router = express.Router()
import auth from '../middleware/auth.js' 
import Lost from '../models/Lost.js'

router.post('/', (req, res) => {
    const dbItem = req.body
    const {user_id, item, place_lost } = req.body
    if(!user_id || !item.name || !item.category || !item.description || !place_lost){
        return res.status(400).json({msg:'Please enter all the fields'})
    }

    Lost.create(dbItem, (err, data) => {
        if(err){
            res.status(500).json({msg:"Something's wrong"})
        }
        else{
            res.status(201).send(data)
        }
    })
})

router.get('/', (req, res) => {
    

    Lost.find((err, data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            // const items = data.map(x => x.item)
            res.status(200).send(data)
        }

    })
})

router.get('/:id', (req, res) => {
    Lost.find({_id: req.params.id}, (err, data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data[0])
        }
    })
})
export default router