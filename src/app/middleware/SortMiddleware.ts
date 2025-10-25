import { Request, Response, NextFunction } from 'express';

interface Sort {
    enable: boolean;
    type: string;
    column?: string;
}

function SortMiddleware(req: Request, res: Response, next: NextFunction) {
    const sort: Sort = {
        enable: false,
        type: 'default',
    };

    if (Object.prototype.hasOwnProperty.call(req.query, '_sort')) {
        Object.assign(sort, {
            enable: true,
            column: req.query.column,
            type: req.query.type,
        });
    }
    res.locals.sort = sort;
    next();
}

export default SortMiddleware;
