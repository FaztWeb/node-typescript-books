import { Router} from 'express';

const router: Router = Router(); 

import { indexController } from '../controllers/indexController';

router.get('/', indexController.index);

export default router;