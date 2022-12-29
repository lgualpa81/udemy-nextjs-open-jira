import { FC, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        "Pendiente: in Lorem irure ipsum sit nostrud commodo ullamco tempor occaecat voluptate.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        "Progreso: minim nulla nisi mollit labore enim sunt quis mollit in.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description: "Finalizado: laborum in consequat mollit ut ea elit.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);
  const addNewEntry = (description: string): void => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: "pending",
    };
    dispatch({ type: "Add-Entry", payload: newEntry });
  };

  const updateEntry = (entry: Entry): void => {
    dispatch({ type: "Update-Entry", payload: entry });
  };

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
