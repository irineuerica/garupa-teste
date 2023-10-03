import { Request, Response } from 'express'
import { userRepository } from '../repositories/userRepository'
import { UserService } from '../services/user.services'

export class UserController {

	async create(req: Request, res: Response) {
		const { name, email, password } = req.body;
		const userService = new UserService();
		const user = await userService.create({ name, email, password });
		return res.status(201).json(user)
	}

	async show(req: Request, res: Response) {
		const { id } = req.params;
		const userService = new UserService();
		const user = await userService.show(Number(id));
		return res.json(user)
	}

	async delete(req: Request, res: Response) {
		const { id } = req.params
		const userService = new UserService();
		await userService.delete(Number(id))
		return res.status(204).json()
	}

	async update(req: Request, res: Response) {
		const { email, password, name } = req.body;
		const { id } = req.params
		const userService = new UserService();
		const user = await userService.update({ email, password, name, id: id })
		return res.json(user)

	}

	async login(req: Request, res: Response) {
		const { email, password } = req.body
		const userService = new UserService();
		const authUser = await userService.login({ email, password })
		return res.json({
			user: authUser?.user,
			token: authUser?.token,
		})

	}

	async list(req: Request, res: Response) {
		const userService = new UserService();
		const users = await userService.list();
		res.json(users);
	}

}