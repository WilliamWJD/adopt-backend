import { Router } from 'express';

import OngController from '../controllers/OngController';
import authenticated from '../middlewares/authenticated';

const ongsRoutes = Router();

ongsRoutes.post('/', OngController.store);

ongsRoutes.use(authenticated);

ongsRoutes.put('/:id', OngController.update);

export default ongsRoutes;
