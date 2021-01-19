import { inject, injectable } from 'tsyringe';
import Ong from '../infra/typeorm/entities/Ong';
import IHashProvider from '../providers/hashProvider/models/IHashProvider';

import IOngRepository from '../repositories/IOngRepository';

interface Request {
  id: string;
  name: string;
  email: string;
  password?: string;
}

@injectable()
class UpdateOngService {
  constructor(
    @inject('OngRepository')
    private ongRepository: IOngRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ id, name, email, password }: Request): Promise<Ong> {
    const ong = await this.ongRepository.findById(id);

    if (!ong) {
      throw new Error('Ong not found');
    }

    const checkMailOng = (await this.ongRepository.findByEmail(email)) as Ong;

    if (checkMailOng.id !== id) {
      throw new Error('already an ONG registered with this email');
    }

    ong.name = name;
    ong.email = email;

    if (password) {
      const passwordHashed = await this.hashProvider.generatedHash(password);
      ong.password = passwordHashed;
    }

    await this.ongRepository.update(ong);

    return ong;
  }
}

export default UpdateOngService;
