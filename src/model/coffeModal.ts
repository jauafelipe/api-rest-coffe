import mongoose, { Schema } from "mongoose";


const coffeSchema: Schema = new Schema({
    contents: [
        {
            tags: {
                type: Array,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            photo: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }
    ]

}, {timestamps: true})

export const coffeCreate = mongoose.model('coffe', coffeSchema)