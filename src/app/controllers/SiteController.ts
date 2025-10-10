import { Request, Response, NextFunction } from 'express';

import Course from '../models/Course';
import plainObject from '../../util/mongoose';

class SiteController {
    //[GET] :/home
    async home(req: Request, res: Response, next: NextFunction) {
        try {
            const courses = await Course.find({}); //Hành động gọi đến Model để lấy dữ liệu
            const plainCourse = plainObject.multipleMongooseObject(courses);
            res.render('home', { plainCourse });
        } catch (error) {
            next(error);
        }
        // res.render('home');
    }

    //[GET] :/search
    search(req: Request, res: Response) {
        res.render('search');
    }
}

export default new SiteController();
