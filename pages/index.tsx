import { LayOut } from "@/components/layout/LayOut";
import { EntryList, NewEntry } from "@/components/ui";
import { Card, CardContent, CardHeader, Grid, Paper, Typography } from "@mui/material";

export default function Home() {
  return (
    <LayOut title="Home">
      <Grid container spacing={2}> 
        <Grid item xs={12} sm={4} >
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title='Pendientes'/>
              <NewEntry/>
              <EntryList status="pending"/>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} >
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title='En progreso'/>
            <EntryList status="inProgress"/>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} >
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title='Completadas'/>
            <EntryList status="finish"/>
          </Card>
        </Grid>
      </Grid>
    </LayOut>
  );
}
