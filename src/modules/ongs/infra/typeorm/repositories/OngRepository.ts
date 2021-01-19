import { getRepository, Repository } from 'typeorm';
import IOngDTO from '../../../dtos/IOngDTO';
import IOngRepository from '../../../repositories/IOngRepository';
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

  public async findByEmail(email: string): Promise<Ong | undefined> {
    const ong = await this.ormRepository.findOne({
      where: {
        email,
      },
    });

    return ong;
  }
}

export default OngRepository;
