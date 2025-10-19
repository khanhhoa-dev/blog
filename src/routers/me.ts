import { Router } from 'express';

import meCourseController from '../app/controllers/MeCourseController';

const router = Router();

router.get('/course', meCourseController.show);
router.get('/trash', meCourseController.trash);

export default router;
