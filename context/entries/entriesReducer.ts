import { EntriesState } from '.';
import { entry } from '../../interfaces/entry';

type EntriesActionType = 
   {type: 'Entry - Add New Entry', payload: entry} |
   {type: 'Entry - Update Entry', payload: entry}


export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
   switch (action.type) {
      case 'Entry - Add New Entry':

         return {
            ...state,
            entries: [...state.entries, action.payload]
         }
      case 'Entry - Update Entry':
         return { 
            ...state,
            entries: state.entries.map(entry => {
               if(entry._id === action.payload._id){
                  entry.status = action.payload.status;
                  entry.description = action.payload.description;
               }
               return entry;
            })
         }
      default:
         break;
   }

   return state;
}   