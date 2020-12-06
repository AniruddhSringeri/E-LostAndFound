import mongoose from 'mongoose'

const lostSchema = mongoose.Schema({
    user_id:{
        type: String,
        required: true
    },
    item: {
        name: String,
        category: String,
        description: String,
        img: String,
    },
    place_lost:{
        type: String,
        required: true
    },
    time: {
        type:Date,
        default:Date.now
    }
})

export default mongoose.model('lost', lostSchema)