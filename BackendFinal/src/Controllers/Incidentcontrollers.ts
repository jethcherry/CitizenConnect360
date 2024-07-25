import { DbHelper } from "../DatabaseHelpers/dbhelper";
import { v4 as uid } from "uuid";
import {Request,Response} from 'express'
import { Incidence } from "../Models/IncidentModel";
import IncidentSchema from "../Helpers/incident";


const dbInstance = new DbHelper()

export const addIncident = async (req: Request, res: Response): Promise<Response> => {
    console.log(req.body);

    try {
        const id = uid();
        const { Image, Title, Location, Description, Date, Author, UserId } = req.body;
        const {error} = IncidentSchema.validate(req.body)
        if(error)
            {
                return res.status(400).json(error)
            }

        await dbInstance.exec('addIncident', { IncidenceId: id, Image, Title, Location, Description, Date, Author, UserId });

        return res.status(201).json({ message: 'Incident was added successfully!',IncidenceId:id });
    } catch (error) {
        return res.status(500).json({ error });
    }
};


export const getIncident = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.IncidenceId;
        const {error} = IncidentSchema.validate(req.body)
        if(error)
            {
                return res.status(400).json(error)
            }


        const incidentResult = await dbInstance.exec('getIncident', { IncidenceId: id });
        const incident: Incidence[] = incidentResult.recordset as Incidence[];

        if (incident.length === 0) {
            return res.status(404).json({ message: 'Incident not found' });
        }

        return res.status(200).json(incident[0]);
    } catch (error) {
        return res.status(500).json({ error });
    }
}

export const getIncidents = async (req: Request, res: Response): Promise<void> => {

    try {
        
        const incidents = (await dbInstance.exec('getIncidents', {})).recordset as Incidence[];
        res.status(200).json(incidents);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateIncident = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.IncidenceId;
        const { Image, Title, Location, Description, Date, Author, UserId } = req.body;
        const {error} = IncidentSchema.validate(req.body)
        if(error)
            {
                return res.status(400).json(error)
            }

        await dbInstance.exec('updateIncident', { IncidenceId: id, Image, Title, Location, Description, Date, Author, UserId });

        return res.status(200).json({ message: 'Incident was updated successfully!',IncidenceId:id });
    } catch (error) {
        return res.status(500).json(error);
    }
};


export const deleteIncident = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.IncidenceId;

        await dbInstance.exec('deleteIncident', { IncidenceId: id });

        return res.status(200).json({ message: 'Incident was deleted successfully!' });
    } catch (error) {
        return res.status(500).json(error);
    }
};
