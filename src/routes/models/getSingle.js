






const getAll = async (req, res) => {
    const carData = await getData()
    const models = carData.models
    res.status(200).json(models)
}