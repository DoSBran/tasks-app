import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../database/db';
import { db } from '@/database';
import { Entry, EntryInterface } from '@/models';
import { NewEntry } from '../../../components/ui/NewEntry';

type Data = 
    | {message: string}
    | EntryInterface[]
    | EntryInterface

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET': {
            return getEntries(res)
        }
        case 'POST': {
            return newEntry(req, res)
        }
        default: 
            return res.status(401).json({ message:'endpoint does not exists'})
    }
}

const getEntries = async(res: NextApiResponse<Data>) => {
    try{
        await db.connect();
        const entries = await Entry.find().sort({createdAt: 'ascending'});
        await db.disconnect();
        return res.status(200).json(entries);
    }catch (e) {
        await db.disconnect();
        console.log(e);
        return res.status(500).json({message: 'ver la consola'});
    }
    

    
}

const newEntry = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

    const {description = ''} = req.body;

    const addEntry = new Entry({
        description,
        createdAt: Date.now(),
    })

    try {
        await db.connect();
        await addEntry.save();
        await db.disconnect();

        return res.status(201).json( addEntry );
    } catch (error) {
        await db.disconnect();
        console.log(error);

        return res.status(500).json({message: 'Revisar consola del server'})
    }
    

}