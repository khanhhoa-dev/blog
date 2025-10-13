import { Router } from 'express';

import courseController from '../app/controllers/CourseController';

const router = Router();
router.get('/:slug', courseController.show);

export default router;
