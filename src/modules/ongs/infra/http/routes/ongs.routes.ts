import { Router } from 'express';

import OngController from '../controllers/OngController';

const ongsRoutes = Router();

ongsRoutes.post('/', OngController.store);
ongsRoutes.put('/:id', OngController.update);

export default ongsRoutes;
