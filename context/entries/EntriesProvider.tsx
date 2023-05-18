import { FC, useReducer } from 'react';
import { EntriesContext, entriesReducer } from '.';
import { entry } from '@/interfaces';
import { v4 as uuidv4 } from 'uuid';

export interface EntriesState{
   entries: entry[];
}

const Entries_Initial_State: EntriesState = {
   entries: [
    {
        _id: uuidv4(),
        description: 'any',
        status: 'pending',
        createAt: Date.now(),
    },
    {
        _id: uuidv4(),
        description: 'any',
        status: 'inProgress',
        createAt: Date.now() - 1000000,
    },
    {
        _id: uuidv4(),
        description: 'any',
        status: 'finish',
        createAt: Date.now() - 100000,
    }
   ]
}

interface provider{
   children: React.ReactNode
}

export const EntriesProvider: FC<provider> = ({children}) => {
   const [state, dispatch] = useReducer(entriesReducer, Entries_Initial_State)
   return (
      <EntriesContext.Provider value={{
         ...state
      }}>
         {children}
      </EntriesContext.Provider>
   )
}