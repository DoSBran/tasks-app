import { LayOut } from "@/components/layout/LayOut";
import { Card, CardContent, CardHeader, Grid, TextField , CardActions, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, capitalize, IconButton} from "@mui/material";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { EntryStatus } from "@/interfaces";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { ChangeEvent, useMemo, useState } from "react";
const ValidStatus: EntryStatus[] = ['pending', 'inProgress', 'finish'] 
export const EntryPage = () => {
    const [inputValue, setInputValue] = useState('');
    const [state, setState] = useState<EntryStatus>('pending');
    const [touched, setTouched] = useState(false);

    const isNotvalid = useMemo(() => inputValue.length === 0 && touched,[inputValue, touched])

  return (
    <LayOut title="EntryPage">
      <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
            <Card>
                <CardHeader
                    title={`Entrada: ${inputValue}`}
                    subheader={`Creada hace  ... minutos`}
                />
                <CardContent>
                    <TextField
                        sx={{marginTop: 2, marginBottom: 1}}
                        fullWidth
                        placeholder="Nueva entrada"
                        autoFocus
                        multiline
                        label="Nueva entrada"
                        value={inputValue}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                        helperText={isNotvalid && 'Ingrese la descripción de la tarea'}
                        onBlur={() => setTouched(true)}
                        error={isNotvalid}
                    />
                </CardContent>
                <FormControl sx={{marginLeft: 1}}>
                    <FormLabel >Estado: </FormLabel>
                    <RadioGroup 
                        row
                        value={state}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setState(e.target.value as EntryStatus)}
                    >
                        {
                            ValidStatus.map((status) => (
                                <FormControlLabel
                                    key={status}
                                    value={status}
                                    control={<Radio/>}
                                    label={capitalize(status)}
                                />
                            ))
                        }
                    </RadioGroup>
                </FormControl>
                <CardActions>
                    <Button disabled={inputValue.length===0 && true}  startIcon={<SaveOutlinedIcon/>} variant='contained' fullWidth>Guardar</Button>
                </CardActions>
            </Card>
        </Grid>
      </Grid>

      <IconButton
        sx={{position: 'fixed', bottom: 30, right: 30, backgroundColor: 'red'}}
      >
        <DeleteOutlineOutlinedIcon/>
      </IconButton>
    </LayOut>
  );
};

export default EntryPage;
