import { createContext } from 'react'

interface ContextProps {
   sideMenuOpen: boolean;
   openMenu: () => void;
   closeMenu: () => void;
   isAdding: boolean;
   setAdding: (add: boolean) => void;
   startDragging: () => void;
   endDragging: () => void;
   isDragging: boolean;
}

export const UiContext = createContext({} as ContextProps);