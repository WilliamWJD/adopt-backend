import IOngDTO from '../dtos/IOngDTO';
import Ong from '../infra/typeorm/entities/Ong';

export default interface IOngRepository {
  create({ name, email, password }: IOngDTO): Promise<Ong>;
  findByEmail(email: string): Promise<Ong | undefined>;
}
