import { FC, useEffect, useReducer } from "react";
import { EntriesContext, entriesReducer } from ".";
import { entry } from "@/interfaces";
import { entriesApi } from "@/apis";
import { useSnackbar } from 'notistack';
import { useRouter } from "next/router";

export interface EntriesState {
  entries: entry[];
}

const Entries_Initial_State: EntriesState = {
  entries: [],
};

interface provider {
  children: React.ReactNode;
}

export const EntriesProvider: FC<provider> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_Initial_State);
  const {enqueueSnackbar} = useSnackbar();
  const router = useRouter();
  const addEntry = async(description: string) => {
    const {data} = await entriesApi.post<entry>('/entries',{description})
    dispatch({ type: "Entry - Add New Entry", payload: data });
  };

  const updateEntry = async({_id, description, status}: entry, shwoSnackbar = false) => {
    try {
      const {data} = await entriesApi.put(`/entries/${_id}`, { description, status})
      dispatch({ type: "Entry - Update Entry", payload: data });

      if(shwoSnackbar){
        enqueueSnackbar('Entrada actualizada', {
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin:{
            vertical: 'top',
            horizontal: 'right'
          }
        })
      }
      
    } catch (error) {
      console.log(error);
    }
    
  };

  const refreshEntries = async() => {
    const {data} = await entriesApi.get<entry[]>('/entries');
    
    dispatch({ type: "Entry - Get Entries", payload: data})
  }

  const deleteEntry = async(_id: string) => {
    try {
      await entriesApi.delete(`/entries/${_id}`)
      await refreshEntries();
      router.push('/');
      enqueueSnackbar('Se elimino la entrada', {
        variant: 'success',
        autoHideDuration: 1500,
        anchorOrigin:{
          vertical: 'top',
          horizontal: 'right'
        }
      })
  } catch (error) {
      enqueueSnackbar('No se pudo eliminar la entrada', {
          variant: 'error',
          autoHideDuration: 1500,
          anchorOrigin:{
            vertical: 'top',
            horizontal: 'right'
          }
        })
  }
  }

  useEffect(() => {
    refreshEntries();
  },[])

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addEntry,
        updateEntry,
        deleteEntry
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
