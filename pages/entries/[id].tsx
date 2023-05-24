import { LayOut } from "@/components/layout/LayOut";
import { Card, CardContent, CardHeader, Grid, TextField , CardActions, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, capitalize, IconButton} from "@mui/material";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { EntryStatus, entry } from "@/interfaces";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { ChangeEvent, FC, useContext, useMemo, useState } from "react";
import { GetServerSideProps } from 'next'
import { dbEntries } from "@/database";
import { EntriesContext } from "@/context/entries";
import { dateFunctions } from "@/utils";


const ValidStatus: EntryStatus[] = ['pending', 'inProgress', 'finish'];

interface Props {
    entry: entry;
}
export const EntryPage: FC<Props> = ({entry}) => {
    const {updateEntry, deleteEntry} = useContext(EntriesContext);
    const [description, setDescription] = useState(`${entry.description}`);
    const [status, setStatus] = useState<EntryStatus>(`${entry.status}`);
    const [touched, setTouched] = useState(false);
    


    const isNotvalid = useMemo(() => description.length === 0 && touched,[description, touched])

    const onSave = () => {
        if(description.trim().length === 0)return;

        const updatedEntry: entry = {
            ...entry,
            description,
            status
        };
        updateEntry(updatedEntry, true);
    }

    const onDelete = () => {
        deleteEntry(entry._id)
    }
   

  return (
    <LayOut title={description.substring(0,20) + '...'}>
      <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
            <Card>
                <CardHeader
                    title={`Entrada:`}
                    subheader={`Creada hace: ${dateFunctions.getformatdistanceToNow(entry.createdAt)}`}
                />
                <CardContent>
                    <TextField
                        sx={{marginTop: 2, marginBottom: 1}}
                        fullWidth
                        placeholder="Nueva entrada"
                        autoFocus
                        multiline
                        label="Nueva entrada"
                        value={description}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                        helperText={isNotvalid && 'Ingrese la descripción de la tarea'}
                        onBlur={() => setTouched(true)}
                        error={isNotvalid}
                    />
                </CardContent>
                <FormControl sx={{marginLeft: 1}}>
                    <FormLabel >Estado: </FormLabel>
                    <RadioGroup 
                        row
                        value={status}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setStatus(e.target.value as EntryStatus)}
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
                    <Button disabled={description.length===0 && true}  startIcon={<SaveOutlinedIcon/>} variant='contained' onClick={onSave} fullWidth>Guardar</Button>
                </CardActions>
            </Card>
        </Grid>
      </Grid>

      <IconButton
        onClick={onDelete}
        sx={{position: 'fixed', bottom: 30, right: 30, backgroundColor: 'red'}}
      >
        <DeleteOutlineOutlinedIcon/>
      </IconButton>
    </LayOut>
  );
};

export default EntryPage;

export const getServerSideProps: GetServerSideProps = async ({params}) => {

    const {id} = params as {id: string};

    const entry = await dbEntries.getEntry(id);

    if(!entry){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    return {
        props: {
            entry: JSON.parse(JSON.stringify(entry))
        }
    }
}
