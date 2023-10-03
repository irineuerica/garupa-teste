import { Request, Response } from 'express'
import { api } from '../config/api.config'

export class ApiController {

    async getBeers(req: Request, res: Response) {
        const { page } = req.params;
        const { data } = await api.get(`/beers?page=${page}&per_page=12`)
        res.json(data);
    }

}