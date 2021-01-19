import { Router } from 'express';
import ongsRoutes from '../../../../modules/ongs/infra/http/routes/ongs.routes';

const routes = Router();

routes.use('/ongs', ongsRoutes);

export default routes;
