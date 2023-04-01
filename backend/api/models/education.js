import mongoose from "mongoose";

const educationSchema = new mongoose.Schema(
    {
        day: {
            type : String
        },
        hours: {
            type : String
        },
        level: {
            type : String
        },
        topic: {
            type : String
        },
        roadmap: [{
            type: mongoose.SchemaTypes.ObjectId,
            required: true
          }],
        user : [{
            type: mongoose.SchemaTypes.ObjectId,
        }]
    });

    export const education = mongoose.model("education", educationSchema);

    export default {education}