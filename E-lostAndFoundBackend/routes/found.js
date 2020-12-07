import express from 'express'
const router = express.Router()

// import Item from '../models/Item.js'
import Found from '../models/Found.js'

router.post('/', (req, res) => {
    const dbItem = req.body
    const {user_id, item, place_found } = req.body
    if(!user_id || !item.name || !item.category || !item.description || !item.img || !place_found){
        return res.status(400).json({msg:'Please enter all the fields'})
    }

    Found.create(dbItem, (err, data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

router.get('/', (req, res) => {
    

    Found.find((err, data) => {
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
    Found.find({_id: req.params.id}, (err, data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data[0])
        }
    })
})

export default router