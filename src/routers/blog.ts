// Router con
import { Router } from 'express';

import blogController from '../app/controllers/BlogController';

const router = Router();

router.get('/:slug', blogController.show);
router.get('/', blogController.index);

export default router;
