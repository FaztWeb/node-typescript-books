import { Request, Response } from 'express';

class IndexController {

    public index (req: Request, res: Response) {
        res.render('index', { title: 'Welcome to Books App'});        
    }

}

export const indexController = new IndexController();