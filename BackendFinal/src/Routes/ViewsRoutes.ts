
import {Router} from 'express'
import { addView, deleteView, getView, getViews, updateView } from '../Controllers/ViewsControllers'

const viewRoutes=Router()

viewRoutes.post('/add', addView);
viewRoutes.get('/:ViewId', getView);
viewRoutes.get('/', getViews);
viewRoutes.put('/update/:ViewId', updateView);
viewRoutes.delete('/delete/:ViewId', deleteView);

export default viewRoutes