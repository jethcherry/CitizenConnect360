
import {Router} from 'express'
import { addPoll, deletePoll, getPoll, updatePoll } from '../Controllers/PollsControllers'
import { verifyTokens } from '../Middleware/verifyToken';

const pollRoutes = Router()


pollRoutes.post('/add', addPoll,verifyTokens);
pollRoutes.get('/:PollId', getPoll,verifyTokens);
pollRoutes.get('/', getPoll,verifyTokens);
pollRoutes.put('/update/:PollId', updatePoll,verifyTokens);
pollRoutes.delete('/delete/:PollId', deletePoll,verifyTokens);

export default pollRoutes