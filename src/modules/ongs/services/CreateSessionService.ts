import { inject, injectable } from 'tsyringe';
import jwt from 'jsonwebtoken';

import authConfig from '../../../config/auth';
import Ong from '../infra/typeorm/entities/Ong';
import IHashProvider from '../providers/hashProvider/models/IHashProvider';
import IOngRepository from '../repositories/IOngRepository';

interface Request {
  email: string;
  password: string;
}

interface IResponse {
  ong: Ong;
  token: string;
}

@injectable()
class CreateSessionService {
  constructor(
    @inject('OngRepository')
    private ongRepository: IOngRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ email, password }: Request): Promise<IResponse> {
    const ong = await this.ongRepository.findByEmail(email);

    if (!ong) {
      throw new Error('Incorrect email/password combination');
    }

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      ong.password,
    );

    if (!passwordMatched) {
      throw new Error('Incorrect email/password combination');
    }

    const token = jwt.sign({}, authConfig.keySecret, {
      subject: ong.id,
      expiresIn: authConfig.expiresIn,
    });

    return { ong, token };
  }
}

export default CreateSessionService;
