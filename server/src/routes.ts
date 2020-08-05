import express, { request, response } from 'express';

const routes = express.Router();

routes.post('/classes', (request, response) =>{

    const data = request.body;

    console.log(data)

    return response.status(201).json(data)
})    

export default routes;