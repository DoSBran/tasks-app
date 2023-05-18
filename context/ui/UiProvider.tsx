import { FC, useReducer } from "react";
import { UiContext, uiReducer } from ".";

export interface UiState{
    sideMenuOpen: boolean;
}

const Ui_Initial_State: UiState = {
    sideMenuOpen: false
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

  return (
    <UiContext.Provider value={{
        ...state,
        openMenu,
        closeMenu
    }}>
        {children}
    </UiContext.Provider>
  )
}