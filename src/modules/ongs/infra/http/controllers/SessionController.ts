import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateSessionService from '../../../services/CreateSessionService';

class SessionController {
  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;

      const createSessionService = container.resolve(CreateSessionService);

      const response = await createSessionService.execute({ email, password });

      return res.status(201).json(response);
    } catch (err) {
      return res.json(err.message);
    }
  }
}

export default new SessionController();
