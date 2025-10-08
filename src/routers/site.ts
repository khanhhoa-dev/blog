// Router con
import { Router } from 'express';

import siteController from '../app/controllers/SiteController';

const router = Router();

router.get('/:slug', siteController.search);
router.get('/', siteController.home);

export default router;
