import { Router } from 'express';

import courseController from '../app/controllers/CourseController';

const router = Router();

router.post('/store', courseController.store);
router.get('/create', courseController.create);
router.get('/:slug', courseController.show);

export default router;
