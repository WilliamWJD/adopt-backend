import IOngDTO from '../dtos/IOngDTO';
import Ong from '../infra/typeorm/entities/Ong';

export default interface IOngRepository {
  create({ name, email, password }: IOngDTO): Promise<Ong>;
  findByEmail(email: string): Promise<Ong | undefined>;
  findById(id: string): Promise<Ong | undefined>;
  update({ id, name, email, password }: IOngDTO): Promise<Ong>;
}
