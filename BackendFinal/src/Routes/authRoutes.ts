import { Router } from "express";
import { deleteUser, getUsers, loginUser, registerUser, updateUser } from "../Controllers/authControllers";
import { verifyAdmin, verifyTokens, welcomePage } from "../Middleware/verifyToken";


const authRoutes = Router()

authRoutes.post('/register',registerUser);
authRoutes.post('/login',loginUser,verifyTokens);
authRoutes.get('/home',welcomePage)
authRoutes.get('/user',getUsers,verifyTokens);
authRoutes.put('/user',updateUser,verifyAdmin,verifyTokens)
authRoutes.delete('/user',deleteUser,verifyAdmin,verifyTokens)


export default authRoutes;