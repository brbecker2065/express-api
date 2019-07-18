import { Router } from 'express'

const routes = Router()

const getAll = async (req, res) => {
    const carData = await getData()
    const models = carData.models
    res.status(200).json(models)
}



app.get('/', (req, res) => res.send('Hello World!'))


export default routes