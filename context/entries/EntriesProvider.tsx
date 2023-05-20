import { FC, useEffect, useReducer } from "react";
import { EntriesContext, entriesReducer } from ".";
import { entry } from "@/interfaces";
import { v4 as uuidv4 } from "uuid";
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

  const addEntry = (description: string) => {
    const newEntry: entry = {
      _id: uuidv4(),
      description,
      createAt: Date.now(),
      status: "pending",
    };

    dispatch({ type: "Entry - Add New Entry", payload: newEntry });
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
