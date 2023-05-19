import { List, Paper } from "@mui/material";
import React, { DragEvent, FC, useContext, useMemo } from "react";
import { EntryCard } from ".";
import { EntryStatus } from "@/interfaces";
import { EntriesContext } from "@/context/entries";
import { UiContext } from "@/context/ui";
import styles from './EntryList.module.css';

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const {isDragging, endDragging} = useContext(UiContext);
  const { entries, updateEntry } = useContext(EntriesContext);
  const entriesByStatus = useMemo(() => entries.filter((entry) => entry.status === status),[entries]) 
  const allowDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();

  }
  
  const onDropEntry = (e: DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData('text');
    const entry = entries.find(entry => entry._id === id)!;
    entry.status = status
    updateEntry(entry);
    endDragging();
  }

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging? styles.dragging: ''}
    >
      <Paper
        sx={{
          height: "calc(100vh - 160px)",
          overflow: "scroll",
          padding: "1px 5px",
          backgroundColor: "transparent",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        <List sx={{ opacity: isDragging? 0.2: 1, transition: 'all .3s' }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry}/>
          ))}
        </List>
      </Paper>
    </div>
  );
};
