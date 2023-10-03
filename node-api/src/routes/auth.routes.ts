import { Router } from 'express'
import { UserController } from '../controllers/user.controller'

const routes = Router()

routes.post('/', new UserController().create);
routes.post('/login', new UserController().login)

export default routes