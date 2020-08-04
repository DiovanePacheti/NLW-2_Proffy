import express, { request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/user', (request,response:Response) =>{
    return response.json({
        name:"Diovane",
        idade:30
    })
})

export default app;