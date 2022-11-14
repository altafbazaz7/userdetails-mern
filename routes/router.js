import express from 'express';
import { addUser, editUser, getUsers, getUser} from '../controller/user-controller.js';

const routes = express.Router();

routes.post('/add',addUser)
routes.get('/all',getUsers)
routes.get('/:id',getUser)
routes.put('/:id',editUser)

export default routes;