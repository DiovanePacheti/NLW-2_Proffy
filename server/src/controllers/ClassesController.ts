
import { Request, Response }  from 'express';

export default class ClassesController {

    async create(request:Request, response:Response){

        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;
    
        //console.log(data)
    
        return await response.json({"name":name})
    } 

    async index(request:Request, response:Response){
        return response.json({
            name:"diovane"
        })
    }

}