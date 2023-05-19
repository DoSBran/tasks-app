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
        description: 'Pendientes',
        status: 'pending',
        createAt: Date.now(),
    },
    {
        _id: uuidv4(),
        description: 'En Proceso',
        status: 'inProgress',
        createAt: Date.now() - 1000000,
    },
    {
        _id: uuidv4(),
        description: 'Finalizadas',
        status: 'finish',
        createAt: Date.now() - 100000,
    }
   ]
}

interface provider{
   children: React.ReactNode
}

export const EntriesProvider: FC<provider> = ({children}) => {
   const [state, dispatch] = useReducer(entriesReducer, Entries_Initial_State);

   const addEntry = (description: string) => {
      const newEntry: entry = {
         _id: uuidv4(),
         description,
         createAt: Date.now(),
         status: 'pending'
      } 

      dispatch({type: 'Entry - Add New Entry', payload: newEntry});
   }
   return (
      <EntriesContext.Provider value={{
         ...state,
         addEntry
      }}>
         {children}
      </EntriesContext.Provider>
   )
}