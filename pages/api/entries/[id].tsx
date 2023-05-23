import { db } from '@/database'
import { Entry, EntryInterface } from '@/models'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = 
    | {message: string}
    | EntryInterface

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    const {id} = req.query

    if(!mongoose.isValidObjectId(id)){
        return res.status(400).json({message: 'Invalid id'})
    }

    switch(req.method){
        case 'PUT':
            return updateEntry(req, res);
        case 'GET':
            return getEntry(req, res)
        default:
            return res.status(400).json({message: 'Invalid method'})

    }
}

const updateEntry = async(req: NextApiRequest, res: NextApiResponse) => {
    const {id} = req.query
    await db.connect();

    const entryToUpdate = await Entry.findById( id );

    if(!entryToUpdate){
        await db.disconnect();
        return res.status(400).json({message: 'Entry not found'});
    }

    const {
        description = entryToUpdate.description,
        status = entryToUpdate.status
    } = req.body;

    try {
        const updateEntry = await Entry.findByIdAndUpdate(id, {description, status}, {runValidators: true, new: true});
        await db.disconnect();
        res.status(200).json(updateEntry);
    } catch (error: any) {
        await db.disconnect();
        res.status(400).json(error.errors.status.message);
    }
    

}

const getEntry = async(req: NextApiRequest, res: NextApiResponse) => {
    const {id} = req.query;

    await db.connect();
    const result = await Entry.findById(id);
    await db.disconnect();

    if(!result){
        res.status(400).json({message: "Entry not found"});
    }
        
    return res.status(200).json(result);
   
        
   
}