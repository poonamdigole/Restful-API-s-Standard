import Bus from "../models/bus.js";

const postBuses = async (req, res) => {
            
    try {
    const { busName,  availableSeats,busNum,type, totalSeats } = req.body;

    const busbooking = new Bus({
        busName, availableSeats, busNum , type, totalSeats
    })

        const savedBus = await busbooking.save();

        return res.status(201).json({
            success: true,
            data: savedBus,
            message: "bus data add succesfully..!"
        })
    } catch (e) {
        return res.json({
            success: false,
            message: e.message
        })
    }
}

export {postBuses}