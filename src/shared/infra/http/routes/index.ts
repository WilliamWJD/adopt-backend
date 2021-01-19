import { Router } from 'express';
import ongsRoutes from '../../../../modules/ongs/infra/http/routes/ongs.routes';
import sessionRoutes from '../../../../modules/ongs/infra/http/routes/session.routes';

const routes = Router();

routes.use('/ongs', ongsRoutes);
routes.use('/session', sessionRoutes);

export default routes;
