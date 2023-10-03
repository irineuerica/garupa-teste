import { body, param, ValidationChain } from 'express-validator';

class UserValidations {
  static create(): ValidationChain[] {
    return [
      body('email')
        .exists()
        .withMessage('Email é obrigatório.'),
    body('name')
        .exists()
        .withMessage('Nome é obrigatório.'),
    body('password')
        .exists()
        .withMessage('Senha é obrigatório.'),
    ];
  }

  static update(): ValidationChain[] {
    return [
    param('id')
        .exists()
        .withMessage('Id é obrigatório.'),
    body('email')
        .exists()
        .withMessage('Email é obrigatório.'),
    body('name')
        .exists()
        .withMessage('Nome é obrigatório.'),
    body('password')
        .exists()
        .withMessage('Senha é obrigatório.'),
    ];
  }

  static delete(): ValidationChain[] {
    return [
    param('id')
        .exists()
        .withMessage('Id é obrigatório.'),
    ];
  }

  static show(): ValidationChain[] {
    return [
    param('id')
        .exists()
        .withMessage('Id é obrigatório.'),
    ];
  }

   static login(): ValidationChain[] {
    return [
      body('email')
        .exists()
        .withMessage('Email é obrigatório.'),
    body('password')
        .exists()
        .withMessage('Senha é obrigatório.'),
    ];
  }
  

}

export { UserValidations };
