import { UiState } from ".";

type UiActionType =
  | { type: "OpenSidebar" }
  | { type: "CloseSidebar" }
  | { type: "isAdding"; payload: boolean }
  | { type: "StartDragging"}
  | { type: "EndDragging"}

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case "OpenSidebar":
      return {
        ...state,
        sideMenuOpen: true,
      };
    case "CloseSidebar":
      return {
        ...state,
        sideMenuOpen: false,
      };
    case "isAdding":
      return {
        ...state,
        isAdding: action.payload,
      };
    case 'StartDragging':
      return {
         ...state,
         isDragging: true
      }
    case 'EndDragging':
      return {
         ...state,
         isDragging: false
      }

    default:
      break;
  }

  return state;
};
