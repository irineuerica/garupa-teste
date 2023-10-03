import { Router } from 'express'
import { authMiddleware } from '../middleware/auth.middleware'
import authenticationRoutes from './auth.routes'
import userRoutes from './user.routes'
import beers from './api.routes'

const routes = Router()

routes.use(authenticationRoutes)

routes.use(authMiddleware)

routes.use('/user', userRoutes);

routes.use('/beers', beers);


export default routes