import Booking from "../models/booking.js";

const postBookings =  async (req, res) => {
    const { name, age, adult, from, to } = req.body;

    const booking = new Booking(
        {
            name,
            age,
            adult,
            from,
            to
        }
    );

    try {
        const savedbooking = await booking.save();

        res.status(201).json({
            success: true,
            data: savedbooking,
            message: "Booking Created"
        });
    }

    catch (err) {
        return res.json({
            success: false,
            message: err.message
        });
    }
};

const getBookings = async (req, res) => {
    const allBookings = await Booking.find();

    res.status(201).json({
        success: true,
        data: { allBookings },
        message: "All bookings fetched successful"
    })
};

const putBookings =  async (req, res) => {
    const { id } = req.params;

    const { name, age, to, from, adult } = req.body;

try {
    await Booking.updateOne({ _id: id }, {
        $set: {
            name: name,
            age: age,
            adult: adult,
            to: to,
            from: from
        } })

        const updatedBooking = await Booking.findOne({ _id: id })

        res.status(201).json({
            success: "true",
            data: updatedBooking,
            message: "Updated successfully..!"
        })
} 
catch (err) {
    return res.json({
        success: false,
        message: err.message
    });
}
    };

    const patchBookings =  async (req, res) => {
        const { id } = req.params;
        const { name, age, to, from, adult } = req.body;

        try {
            await Booking.updateOne({ _id: id }, {
                $set: {
                    name: name,
                    age: age,
                    adult: adult,
                    to: to,
                    from: from
                } })
        
                const updatedBooking = await Booking.findOne({ _id: id })
        
                res.status(201).json({
                    success: "true",
                    data: updatedBooking,
                    message: "Updated successfully..!"
                })
        } 
        catch (err) {
            return res.json({
                success: false,
                message: err.message
            });
        }
    }

const deleteBookings =  async (req, res) => {
    const { id } = req.params;
await Booking.deleteOne({_id : id});
    res.json({
        success: true,
        message: "Booking deleted"
    })
};



export {postBookings, getBookings, putBookings, patchBookings , deleteBookings};