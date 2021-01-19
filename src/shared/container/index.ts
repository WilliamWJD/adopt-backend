import { container } from 'tsyringe';

import OngRepository from '../../modules/ongs/infra/typeorm/repositories/OngRepository';
import IOngRepository from '../../modules/ongs/providers/IOngRepository';

container.registerSingleton<IOngRepository>('OngRepository', OngRepository);
