import { entry } from '@/interfaces';
import { createContext } from 'react'

interface ContextProps {
   entries: entry[];
   addEntry: (description: string) => void;
   updateEntry: (enty: entry, showSnackbar?: boolean) => void;
   deleteEntry: (id: string) => void;
}

export const EntriesContext = createContext({} as ContextProps);