import { api } from "../config/api.config";

export class BeersService {
    static instance: BeersService;
    private constructor() {}

    static getInstance() {
        if (!this.instance) {
            this.instance = new BeersService();
        }

        return this.instance;
    }

    async getBeers(page: number) {
       const {data} =  await api.get(`/beers/${page}`)
       return data;
    }

}
