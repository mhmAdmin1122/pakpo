import { model, Schema, models } from "mongoose";

const popCourseSchema = new Schema({
    name: {type: String, required: true},
    about: {type: String, required: true},
    price: {type: String, required: true},
    category: {type: String, required: true},
    image: {type: String, required: true}
})

export const PopCourse = models.PopCourse || model('PopCourse', popCourseSchema);