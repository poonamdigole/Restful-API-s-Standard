
const health =  async (req, res) => {
    res.json({
        success: true,
        message: "Server is running up !"
    })
};

export default health;