import { Request, Response } from 'express';
import Course from '../models/Course';

class SiteController {
    //[GET] :/home
    async home(req: Request, res: Response) {
        try {
            await Course.create({
                name: 'NodeJS',
                description: 'Learn backend',
                image: 'https://camo.githubusercontent.com/030079e5e56562613068058b4a0b04a8972bbd22cf3fc852548eec3ffd9d7131/68747470733a2f2f6e6f6465692e636f2f6e706d2f6d6f6e676f6f73652e706e67',
            });
            const coures = await Course.find({}); //Hành động gọi đến Model để lấy dữ liệu
            res.json(coures);
        } catch (error) {
            console.log('ERROR!!!', error);
        }
        // res.render('home');
    }

    //[GET] :/search
    search(req: Request, res: Response) {
        res.render('search');
    }
}

export default new SiteController();
