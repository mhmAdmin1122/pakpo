import { model, Schema, models } from "mongoose";

const teamSchema = new Schema({
    memberName: {type: String, required: true},
    memberPosition: {type: String, required: true},
    age: {type: String, required: true},
    image: {type: String, required: true},
    bio: {type: String, required: true}
})

export const Teams = models.Teams || model('Teams', teamSchema);