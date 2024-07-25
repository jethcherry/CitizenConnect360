import { DbHelper } from "../DatabaseHelpers/dbhelper";
import {Request,Response} from 'express'
import { v4  as uid} from "uuid";
import { Views } from "../Models/ViewsModel";
import ViewsSchema from "../Helpers/views";





const dbInstance = new DbHelper()


export const addView = async (req: Request, res: Response): Promise<Response> => {
    console.log(req.body);

    try {
        const id = uid();
        const { Image, Title, Description, Date, UserId } = req.body;

        const {error} = ViewsSchema.validate(req.body)
        if(error)
            {
                return res.status(400).json(error)
            }


        await dbInstance.exec('addView', { ViewId: id, Image, Title, Description, Date, UserId });

        return res.status(201).json({ message: 'View was added successfully!' , ViewId:id});
    } catch (error) {
        return res.status(500).json({ error });
    }
}

export const getView = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.ViewId;
        const {error} = ViewsSchema.validate(req.body)
        if(error)
            {
                return res.status(400).json(error)
            }

        const viewResult = await dbInstance.exec('getView', { ViewId: id });
        const view: Views[] = viewResult.recordset as Views[];

        if (view.length === 0) {
            return res.status(404).json({ message: 'View not found' });
        }

        return res.status(200).json(view[0]);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const getViews = async (req: Request, res: Response): Promise<void> => {

    try {
        
        const views = (await dbInstance.exec('getViews', {})).recordset as Views[];
        res.status(200).json(views);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateView = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.ViewId;
        const { Image, Title, Description, Date, UserId } = req.body;
        const {error} = ViewsSchema.validate(req.body)
        if(error)
            {
                return res.status(400).json(error)
            }

        await dbInstance.exec('updateView', { ViewId: id, Image, Title, Description, Date, UserId });

        return res.status(200).json({ message: 'View was updated successfully!' });
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const deleteView = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.ViewId;
        const {error} = ViewsSchema.validate(req.body)
        if(error)
            {
                return res.status(400).json(error)
            }

        await dbInstance.exec('deleteView', { ViewId: id });

        return res.status(200).json({ message: 'View was deleted successfully!' });
    } catch (error) {
        return res.status(500).json(error);
    }
};
