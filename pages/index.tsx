import { LayOut } from "@/components/layout/LayOut";
import { Card, CardHeader, Grid, Paper, Typography } from "@mui/material";

export default function Home() {
  return (
    <LayOut title="Home">
      <Grid container spacing={2}> 
        <Grid item xs={12} sm={4} >
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title='Pendientes'/>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} >
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title='En progreso'/>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} >
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title='Completadas'/>
          </Card>
        </Grid>
      </Grid>
    </LayOut>
  );
}
