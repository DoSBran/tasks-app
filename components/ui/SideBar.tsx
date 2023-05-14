import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const menuitems: string[] = ["Inicio", "Enviar Email", "Tareas"];

export const SideBar = () => {
  return (
    <Drawer anchor="left" open={true}>
      <Box sx={{ width: 250 }}>
        <Box padding="5px 10px">
          <Typography variant="h4">Menú</Typography>
        </Box>
        <List>
          {menuitems.map((item) => (
            <ListItem button key={item}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
