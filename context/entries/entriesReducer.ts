import { EntriesState } from '.';

type EntriesActionType = {type: 'New'} | {type: 'Process'}

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
   switch (action.type) {
    //   case 'New':

    //      return {
    //         ...state,
    //         propToedit: newValue
    //      }
    //   case 'Process':
    //      return {
    //         ...state,
    //         sideMenuOpen: newValue
    //   }
      default:
         break;
   }

   return state;
}   