import { Router } from 'express'
import { ApiController } from '../controllers/api.controller';

const routes = Router()

routes.get('/:page', new ApiController().getBeers);

export default routes