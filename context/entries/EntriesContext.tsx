import { entry } from '@/interfaces';
import { createContext } from 'react'

interface ContextProps {
   entries: entry[];
   addEntry: (description: string) => void;
}

export const EntriesContext = createContext({} as ContextProps);