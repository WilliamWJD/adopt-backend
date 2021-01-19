import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateOngService from '../../../services/CreateOngService';

class OngController {
  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password } = req.body;

      const createOngService = container.resolve(CreateOngService);

      const createOng = await createOngService.execute({
        name,
        email,
        password,
      });

      return res.json(createOng);
    } catch (err) {
      return res.status(401).json(`erro: ${err}`);
    }
  }
}

export default new OngController();
