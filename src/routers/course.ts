import { Router } from 'express';

import courseController from '../app/controllers/CourseController';

const router = Router();

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/edit/:id', courseController.edit);
router.put('/update/:id', courseController.update);
router.get('/:slug', courseController.show);

export default router;
