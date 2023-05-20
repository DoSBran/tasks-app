import { UiContext } from "@/context/ui";
import { entry } from "@/interfaces";
import {
  CardActionArea,
  Typography,
  CardContent,
  CardActions,
} from "@mui/material";
import { FC, DragEvent, useContext } from "react";
import { Card } from '@mui/material';

interface Props {
  entry: entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { startDragging, endDragging, isDragging } = useContext(UiContext);

  const onDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", entry._id);
    startDragging();
  };

  const onDragEnd = () => {
    endDragging();
  };
  return (
    <Card
      sx={{
        marginBottom: 1,
        position:'relative', zIndex: 999,forceFallback: 'true'
      }}
      
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
     
      <CardActionArea >
        <CardContent>
          <Typography whiteSpace="pre-line">{entry.description}</Typography>
        </CardContent>
        <CardActions
          sx={{ diplay: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          <Typography variant="body2">Hace 30 minutos</Typography>
        </CardActions>
        
      </CardActionArea>
      
    </Card>
  );
};
