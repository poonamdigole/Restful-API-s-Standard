import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Booking from './models/booking.js';
import Bus from './models/bus.js';
import { deleteBookings, getBookings, patchBookings, postBookings, putBookings } from './controllers/bookings.js';
import { postBuses } from './controllers/buses.js';
import health from './controllers/health.js';
dotenv.config();

const app = express();
app.use(express.json());

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    if (conn) {
        console.log("MongoDB is connected")
    }
};
connectDB();

app.get('/health',health);

// post booking
app.post('/api/bookings', postBookings);


//  get bookings
app.get('/api/bookings', getBookings);

// put booking
app.put('/api/bookings/:id', putBookings);


// patch booking
app.patch('/bookings/:id', patchBookings);


// delete booking
app.delete('/api/bookings/:id', deleteBookings);


// post bus v1
app.post('/api/v1/buses', postBuses);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});