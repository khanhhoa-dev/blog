import { Request, Response } from 'express';

class BLogController {
    //[GET] :/blog
    index(req: Request, res: Response) {
        res.render('blog');
    }
    show(req: Request, res: Response) {
        res.send('Hello Khánh Hòa');
    }
}

export default new BLogController();
