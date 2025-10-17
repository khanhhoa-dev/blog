//Bộ định tuyến trung gian
import { Application } from 'express';

import blogRouter from './blog';
import sideRouter from './site';
import meRouter from './me';
import courseRouter from './course';

function router(app: Application) {
    app.use('/me', meRouter);
    app.use('/courses', courseRouter);
    app.use('/blog', blogRouter);
    app.use('/', sideRouter);
}

export default router;
