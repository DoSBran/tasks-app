import { isValidObjectId } from 'mongoose';
import { connect, disconnect } from './db';
import { Entry, EntryInterface } from '@/models';

export const getEntry = async(id:string): Promise<EntryInterface | null> => {
    if(!isValidObjectId(id)) return null;

    connect();
    const entry = Entry.findById(id).lean();
    disconnect();

    return entry;
}
