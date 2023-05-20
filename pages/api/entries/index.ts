import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../database/db';
import { db } from '@/database';
import { Entry, EntryInterface } from '@/models';

type Data = 
    | {message: string}
    | EntryInterface[]
    | EntryInterface

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET': {
            return getEntries(res)
        }
        default: 
            return res.status(400).json({ message:'endpoint does not exists'})
    }
}

const getEntries = async(res: NextApiResponse<Data>) => {
    await db.connect();
    const entries = await Entry.find().sort({createAt: 'ascending'});

    res.status(200).json(entries)
}