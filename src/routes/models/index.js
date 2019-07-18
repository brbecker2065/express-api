import { Router } from 'express'
import getAll from './getAll'
import getSingle from './getSingle'


const routes = Router()


routes.get('/', getAll)
routes.get('/:id', getSingle)
routes.get('/:id/cars', getCars)

routes.post('/', (req, res) => res.send('Hello World!'))


export default routes
