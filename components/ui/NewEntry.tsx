import { ChangeEvent, useContext, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

  //const [isAdding, setIsAdding] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);

  const onTextFieldChanged = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(event.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;
    console.log(inputValue);
    addNewEntry(inputValue);
    setInputValue("");
    setIsAddingEntry(false);
    setTouched(false);
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="Nueva entrada"
            autoFocus
            multiline
            label="Nueva entrada"
            helperText={inputValue.length <= 0 && touched && "Ingrese un valor"}
            error={inputValue.length <= 0 && touched}
            value={inputValue}
            onChange={onTextFieldChanged}
            onBlur={() => setTouched(true)}
          />

          <Box display="flex" justifyContent="space-between">
            <Button
              variant="text"
              onClick={() => {
                setIsAddingEntry(false);
              }}
            >
              Cancelar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={onSave}
              endIcon={<SaveOutlinedIcon />}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          fullWidth
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={() => setIsAddingEntry(true)}
        >
          Agregar tarea
        </Button>
      )}
    </Box>
  );
};
