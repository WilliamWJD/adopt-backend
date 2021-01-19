import { inject, injectable } from 'tsyringe';
import Ong from '../infra/typeorm/entities/Ong';

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
  ) {}

  public async execute({ id, name, email, password }: Request): Promise<Ong> {
    const ong = await this.ongRepository.findById(id);

    if (!ong) {
      throw new Error('Ong not found');
    }

    ong.name = name;
    ong.email = email;

    if (password) {
      ong.password = password;
    }

    await this.ongRepository.update(ong);

    return ong;
  }
}

export default UpdateOngService;
