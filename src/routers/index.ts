//Bộ định tuyến trung gian
import { Application } from 'express';

import blogRouter from './blog';
import sideRouter from './site';

function router(app: Application) {
    //nếu request nào bắt đầu bằng /blog, hãy chuyển quyền xử lý sang blogRouter.
    //blogRouter chính là một middleware con
    app.use('/blog', blogRouter);
    app.use('/', sideRouter);
}

export default router;
