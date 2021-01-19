import { inject, injectable } from 'tsyringe';

import IOngRepository from '../repositories/IOngRepository';
import Ong from '../infra/typeorm/entities/Ong';
import IHashProvider from '../providers/hashProvider/models/IHashProvider';

interface Request {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateOngService {
  constructor(
    @inject('OngRepository')
    private ongRepository: IOngRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ name, email, password }: Request): Promise<Ong> {
    const checkOng = await this.ongRepository.findByEmail(email);

    if (checkOng) {
      throw new Error('already an ONG registered with this email');
    }

    const passwordHash = await this.hashProvider.generatedHash(password);

    const ong = await this.ongRepository.create({
      name,
      email,
      password: passwordHash,
    });

    return ong;
  }
}

export default CreateOngService;
