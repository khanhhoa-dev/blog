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

    //[GET]: /me/trash
    async trash(req: Request, res: Response, next: NextFunction) {
        try {
            const courseSoftDelete = await Course.findWithDeleted({
                deleted: true,
            });
            const data = plainObject.multipleMongooseObject(courseSoftDelete);
            res.render('me/trash', { data });
        } catch (error) {
            next(error);
        }
    }
}

export default new MeCourseController();
