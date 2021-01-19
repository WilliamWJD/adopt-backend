import { inject, injectable } from 'tsyringe';

import IOngRepository from '../providers/IOngRepository';
import Ong from '../infra/typeorm/entities/Ong';

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
  ) {}

  public async execute({ name, email, password }: Request): Promise<Ong> {
    const ong = await this.ongRepository.create({ name, email, password });
    return ong;
  }
}

export default CreateOngService;
