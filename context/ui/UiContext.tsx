import React, { createContext } from 'react'

interface ContextProps {
   sideMenuOpen: boolean;
   openMenu: () => void;
   closeMenu: () => void;
}

export const UiContext = createContext({} as ContextProps);