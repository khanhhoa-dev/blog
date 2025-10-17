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
            res.render('courses/show', { plainCourse });
        } catch (error) {
            next(error);
        }
    }

    //[GET]: /courses/create
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            res.render('courses/create');
        } catch (error) {
            next(error);
        }
    }

    //[POST]: /courses/store
    async store(req: Request, res: Response, next: NextFunction) {
        try {
            const formData = req.body;
            formData.image = `https://files.fullstack.edu.vn/f8-prod/courses/${req.body.videoId}.png`;
            const store = new Course(formData);
            await store.save();
            res.redirect('/');
        } catch (error) {
            next(error);
        }
    }

    //[GET]: /courses/edit/:id
    async edit(req: Request, res: Response, next: NextFunction) {
        try {
            const editCourse = await Course.findById(req.params.id);
            if (!editCourse) {
                return res.status(404).json({ message: 'Lỗi hệ thống' });
            }
            const plainEditCourse = plainObject.mongooseObject(editCourse);
            res.render('courses/edit', { plainEditCourse });
        } catch (error) {
            next(error);
        }
    }

    //[PUT]: /course/update/:id
    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const data = req.body;
            const id = req.params.id;
            await Course.findByIdAndUpdate(id, data);
            res.redirect('/me/course');
        } catch (error) {
            next(error);
        }
    }
}

export default new CourseController();
