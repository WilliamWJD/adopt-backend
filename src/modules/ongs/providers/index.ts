import { container } from 'tsyringe';

import IHashProvider from './hashProvider/models/IHashProvider';
import HashProvider from './hashProvider/implementations/HashProvider';

container.registerSingleton<IHashProvider>('HashProvider', HashProvider);
