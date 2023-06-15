import { model, Schema, models } from "mongoose";

const serviceSchema = new Schema({
    title: {type: String, required: true},
    about: {type: String, required: true},
    image: {type: String, required: true}
})

export const Services = models.Services || model('Services', serviceSchema);