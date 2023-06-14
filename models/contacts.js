import { model, Schema, models } from "mongoose";

const contactSchema = new Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    message: {type: String, required: true}
})

export const Contacts = models.Contacts || model('Contacts', contactSchema);