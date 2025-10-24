import { Router } from 'express';

import courseController from '../app/controllers/CourseController';

const router = Router();

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/edit/:id', courseController.edit);
router.post('/select-course-action', courseController.selectAllChecked);
router.put('/update/:id', courseController.update);
router.patch('/restore/:id', courseController.restore);
router.delete('/force/:id', courseController.deleteDestroy);
router.delete('/:id', courseController.delete);
router.get('/:slug', courseController.show);

export default router;
