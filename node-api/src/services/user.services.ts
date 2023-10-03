import { BadRequestError, NotFoundError } from '../helpers/errors.helper'
import { userRepository } from '../repositories/userRepository'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

type CreateUser = {
    name: string; 
    email: string; 
    password: string
}

type UpdateUser = {
    id: number | string;
    name: string; 
    email: string; 
    password: string
}

type Login = {
    email: string; 
    password: string
}

type ListUsers = {
    id: number;
    name: string; 
    email: string; 
}

export class UserService {
    async create({ name, email, password }: CreateUser) {
        if (!name || !email || !password) {
            throw new BadRequestError('Campos name, email e password são obrigatórios')
        }

        const userExists = await userRepository.findOneBy({ email })

        if (userExists) {
            throw new BadRequestError('E-mail já cadastrado')
        }

        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = userRepository.create({
            name,
            email,
            password: hashPassword,
        })
        await userRepository.save(newUser)
        const { password: _, ...user } = newUser
        return user
    }

    async show(id: Number) {
        if (!id) {
            throw new BadRequestError('Campo ID é obrigatório')
        }

        const user = await userRepository.findOneBy({ id: Number(id) })

        if (!user) {
            throw new NotFoundError('Usuário não encontrado')
        }

        const { password: _, ...userResult } = user;
        
        return userResult;
    }

    async delete(id: Number) {
        if (!id) {
            throw new BadRequestError('Campo ID é obrigatório')
        }

        const user = await userRepository.findOneBy({ id: Number(id) })

        if (!user) {
            throw new NotFoundError('Usuário não encontrado')
        }

        return await userRepository.delete({ id: Number(id) })
    }


    async update({ email, password, name, id }: UpdateUser) {
        if (!name || !email || !password || !id) {
            throw new BadRequestError('Campos id, name, email e password são obrigatórios')
        }

        const user = await userRepository.findOneBy({ id: Number(id) })

        if (!user) {
            throw new NotFoundError('Usuário não encontrado')
        }
        
        const hashPassword = await bcrypt.hash(password, 10)
        const updatedUser = { name, email, password: hashPassword }
        await userRepository.update(id, updatedUser);
        return updatedUser
    }

    async login({ email, password }: Login) {
        if (!email || !password) {
            throw new BadRequestError('Campos email e senha são obrigatórios')
        }
        const user = await userRepository.findOneBy({ email })
        if (!user) {
            throw new BadRequestError('Usuário inválido');
        }

        const verifyPass = await bcrypt.compare(password, user.password)

        if (!verifyPass) {
            throw new BadRequestError('Senha incorreta');
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? '', {
            expiresIn: '8h',
        })

        const { password: _, ...userLogin } = user;
        const authUser = { user: userLogin, token }
        return authUser
    }


    async list() : Promise<ListUsers[]> {
        const users = await userRepository.find();
        return users.map((user) => {
            const { password: _, ...userResult } = user;
            return userResult;
        })
    }

}