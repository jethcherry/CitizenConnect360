
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import path from 'path';
import dotenv from 'dotenv';
import { Payload } from '../Models/authModel';


dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export interface ExtendedRequest extends Request {
    info?: Payload;
}

export function verifyTokens(req: ExtendedRequest, res: Response, next: NextFunction) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: "Forbidden!" });
        }

        const token = authHeader.split('Bearer ')[1];
        const decodeData = jwt.verify(token, process.env.SECRET as string) as Payload;
        req.info = decodeData;
        next();
    } catch (error) {
        return res.status(500).json({ message: "Invalid token", error });
    }
}

export const verifyAdmin = (req: ExtendedRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET as string) as Payload;
        if (!decoded.isAdmin) {
            return res.status(403).json({ message: 'Admin access required.' });
        }

        req.info = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token.' });
    }
};

export const welcomePage = (req: ExtendedRequest, res: Response) => {
    try {
        res.status(200).send(`<h1>Welcome! ${req.info?.Name}</h1>`);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
};



export interface ExtendedRequest extends Request {
    info?: Payload;
}
