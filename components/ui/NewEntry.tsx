import { Box, Button, TextField } from "@mui/material";
import React, { ChangeEvent, ChangeEventHandler, useContext, useState } from "react";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { EntriesContext } from "@/context/entries";
import { UiContext } from "@/context/ui";

export const NewEntry = () => {
  const {isAdding, setAdding} = useContext(UiContext);
  const [inputValue, setInputValue] = useState<string>('');
  const [touched, setTouched] = useState<boolean>(false);
  const {addEntry} = useContext(EntriesContext);

  const save = () => {
    if(inputValue.length === 0)return;
    addEntry(inputValue);
    setInputValue('');
    setAdding(false);
    setTouched(false);
  }
  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {isAdding ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="Nueva entrada"
            autoFocus
            multiline
            label="Nueva entrada"
            helperText={inputValue.length <= 0 && touched && 'La descripcion es requerida'}
            error={inputValue.length <= 0 && touched}
            value={inputValue}
            onChange={(e:ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
            onBlur={() => setTouched(true)}
          />
          <Box display="flex" justifyContent="space-between">
            <Button variant="text" onClick={() => setAdding(false)}>Cancelar</Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
              onClick={save}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          endIcon={<AddCircleOutlineOutlinedIcon />}
          fullWidth
          variant="outlined"
          onClick={() => setAdding(true)}
        >
          Agregar tarea
        </Button>
      )}
    </Box>
  );
};
