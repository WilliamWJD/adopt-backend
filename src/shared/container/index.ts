import { container } from 'tsyringe';

import '../../modules/ongs/providers';

import OngRepository from '../../modules/ongs/infra/typeorm/repositories/OngRepository';
import IOngRepository from '../../modules/ongs/repositories/IOngRepository';

container.registerSingleton<IOngRepository>('OngRepository', OngRepository);
