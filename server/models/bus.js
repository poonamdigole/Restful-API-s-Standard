import { Schema , model } from "mongoose";

const busSchema = new Schema({
        busName:{
            type : String,
            required : true
        },
        busNum:{
            type : Number,
            required:true
        },
        totalSeats:{
            type:Number,
            required : true
        },
        availableSeats:{
            type:Number,
            required : true
        },
        type : {
            type: String,
            enum:["seater", "sleeper-AC", "sleeper-nonAC"],
            requied: true
        }
       
})

const Bus = model ('Bus' , busSchema);
export default Bus;