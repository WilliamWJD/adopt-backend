import { getRepository, Repository } from 'typeorm';
import IOngDTO from '../../../dtos/IOngDTO';
import IOngRepository from '../../../providers/IOngRepository';
import Ong from '../entities/Ong';

class OngRepository implements IOngRepository {
  private ormRepository: Repository<Ong>;

  constructor() {
    this.ormRepository = getRepository(Ong);
  }

  public async create({ name, email, password }: IOngDTO): Promise<Ong> {
    const ong = this.ormRepository.create({ name, email, password });
    await this.ormRepository.save(ong);
    return ong;
  }
}

export default OngRepository;
