import { DbHelper } from "../DatabaseHelpers/dbhelper";
import {v4 as uid} from 'uuid'
import {Response,Request} from 'express'
import { Polls } from "../Models/PollsModel";
import PollSchema from "../Helpers/polls";

const dbInstance = new DbHelper()

export const addPoll = async (req: Request, res: Response): Promise<Response> => {
    console.log(req.body);

    try {
        const id = uid();
        const { Question, Options, UserId } = req.body;
        const {error} = PollSchema.validate(req.body)
        if(error)
            {
                return res.status(400).json(error)
            }

        await dbInstance.exec('addPoll', { PollId: id, Question, Options, UserId });

        return res.status(201).json({ message: 'Poll was added successfully!' , pollId: id});
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const getPoll = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.PollId;
        const {error} = PollSchema.validate(req.body)
        if(error)
            {
                return res.status(400).json(error)
            }


        const pollResult = await dbInstance.exec('getPoll', { PollId: id });
        const poll: Polls[] = pollResult.recordset as Polls[];

        if (poll.length === 0) {
            return res.status(404).json({ message: 'Poll not found' });
        }

        return res.status(200).json(poll[0]);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const getPolls = async (req: Request, res: Response): Promise<void> => {
    try {
        const polls = (await dbInstance.exec('getPolls', {})).recordset as Polls[];
        res.status(200).json(polls);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updatePoll = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.PollId;
        const { Question, Options, UserId } = req.body;
        const {error} = PollSchema.validate(req.body)
        if(error)
            {
                return res.status(400).json(error)
            }


        await dbInstance.exec('updatePoll', { PollId: id, Question, Options, UserId });

        return res.status(200).json({ message: 'Poll was updated successfully!' });
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const deletePoll = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.PollId;
        const {error} = PollSchema.validate(req.body)
        if(error)
            {
                return res.status(400).json(error)
            }


        await dbInstance.exec('deletePoll', { PollId: id });

        return res.status(200).json({ message: 'Poll was deleted successfully!' });
    } catch (error) {
        return res.status(500).json(error);
    }
};