import { UiState } from '.';

type UiActionType = {type: 'OpenSidebar'} | {type: 'CloseSidebar'}

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
   switch (action.type) {
      case 'OpenSidebar':

         return {
            ...state,
            sideMenuOpen: true
         }
      case 'CloseSidebar':
         return {
            ...state,
            sideMenuOpen: false
      }
      default:
         break;
   }

   return state;
}