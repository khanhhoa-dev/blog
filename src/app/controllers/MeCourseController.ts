import { Request, Response, NextFunction } from 'express';

import Course from '../models/Course';
import plainObject from '../../util/mongoose';

class MeCourseController {
    //[GET]: /me/course
    async show(req: Request, res: Response, next: NextFunction) {
        try {
            const course = await Course.find({});
            const data = plainObject.multipleMongooseObject(course);
            res.render('me/meCourse', { data });
        } catch (error) {
            next(error);
        }
    }
}

export default new MeCourseController();
