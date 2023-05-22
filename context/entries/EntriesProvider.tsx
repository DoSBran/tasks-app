import { FC, useEffect, useReducer } from "react";
import { EntriesContext, entriesReducer } from ".";
import { entry } from "@/interfaces";
import { entriesApi } from "@/apis";

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

  const addEntry = async(description: string) => {
    const {data} = await entriesApi.post<entry>('/entries',{description})
    dispatch({ type: "Entry - Add New Entry", payload: data });
  };

  const updateEntry = (entry: entry) => {
    dispatch({ type: "Entry - Update Entry", payload: entry });
  };

  const refreshEntries = async() => {
    const {data} = await entriesApi.get<entry[]>('/entries');
    
    dispatch({ type: "Entry - Get Entries", payload: data})
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
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
