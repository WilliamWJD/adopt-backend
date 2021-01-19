import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateOngService from '../../../services/CreateOngService';
import UpdateOngService from '../../../services/UpdateOngService';

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
      return res.status(401).json(err.message);
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;

      const updateOngService = container.resolve(UpdateOngService);

      const updateOng = await updateOngService.execute({
        id,
        name,
        email,
        password,
      });

      return res.json(updateOng);
    } catch (err) {
      return res.status(401).json(err.message);
    }
  }
}

export default new OngController();
