import { Router } from "express";
import { addIncident, deleteIncident, getIncident, getIncidents, updateIncident } from "../Controllers/Incidentcontrollers";
import { verifyTokens } from "../Middleware/verifyToken";

const incidentRoutes = Router()
incidentRoutes.post('/add', addIncident,verifyTokens);
incidentRoutes.get('/:IncidenceId', getIncident,verifyTokens);
incidentRoutes.get('/', getIncidents);
incidentRoutes.put('/update/:IncidenceId', updateIncident,verifyTokens);
incidentRoutes.delete('/delete/:IncidenceId', deleteIncident,verifyTokens);

export default incidentRoutes