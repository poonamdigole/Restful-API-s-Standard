import { Schema, model } from "mongoose";

const bookingSchema = new Schema (
    {
        name:{
            type : String,
            required : true
        },
        age:{
            type:Number,
            required : true
        },
        adult:{
              type:Number,
              default : "0"
        },
        to:{
            type : String,
            required:true
        },
        from:{
            type : String,
            required:true
        }
    } , 
    {
        timestamps : true
    }
);

const Booking = model('booking', bookingSchema);
export default Booking;