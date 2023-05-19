import { FC, useReducer } from "react";
import { UiContext, uiReducer } from ".";

export interface UiState{
    sideMenuOpen: boolean;
    isAdding: boolean;
    isDragging: boolean;
}

const Ui_Initial_State: UiState = {
    sideMenuOpen: false,
    isAdding: false,
    isDragging: false
}

interface provider{
    children: React.ReactNode
}

export const UiProvider: FC<provider> = ({children}) => {
  const [state, dispatch] = useReducer(uiReducer, Ui_Initial_State);

  const openMenu = () => {
    dispatch({type: 'OpenSidebar'});
  };

  const closeMenu = () => {
    dispatch({type: 'CloseSidebar'});
  }

  const setAdding = (add: boolean) => {
    dispatch({type: 'isAdding', payload: add})
  }

  const startDragging = () => {
    dispatch({type: 'StartDragging'})
  }

  const endDragging = () => {
    dispatch({type: 'EndDragging'})
  }

  return (
    <UiContext.Provider value={{
        ...state,
        openMenu,
        closeMenu,
        setAdding,
        startDragging,
        endDragging
    }}>
        {children}
    </UiContext.Provider>
  )
}