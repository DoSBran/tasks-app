import { EntriesState } from '.';
import { entry } from '../../interfaces/entry';

type EntriesActionType = {type: 'Entry - Add New Entry', payload: entry}


export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
   switch (action.type) {
      case 'Entry - Add New Entry':

         return {
            ...state,
            entries: [...state.entries, action.payload]
         }
      // case 'Process':
      //    return {
      //       ...state,
      //       sideMenuOpen: newValue
      // }
      default:
         break;
   }

   return state;
}   