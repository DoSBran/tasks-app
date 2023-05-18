import { entry } from '@/interfaces';
import { createContext } from 'react'

interface ContextProps {
   entries: entry[];
}

export const EntriesContext = createContext({} as ContextProps);