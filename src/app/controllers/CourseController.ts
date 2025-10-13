import { Request, Response, NextFunction } from 'express';

import Course from '../models/Course';
import plainObject from '../../util/mongoose';

class CourseController {
    // [GET]: /courses/:slug
    async show(req: Request, res: Response, next: NextFunction) {
        try {
            const course = await Course.findOne({ slug: req.params.slug });
            if (!course) {
                return res.status(404).json({ message: 'Course not found' });
            }
            const plainCourse = plainObject.mongooseObject(course);
            res.render('courses/course', { plainCourse });
        } catch (error) {
            next(error);
        }
    }
}

export default new CourseController();
