






const getSingle = async (req, res) => {
    const id = req.params.id
    const carData = await getData()
    const models = carData.models

    const model = models.find(m => m.id === id)
    if (model) {
        res.status(200).json(model)
    } else {
        res.status(400).json({ message: "not found" })
    }
}



export default getSingle