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
import { useRouter } from "next/router";
import { dateFunctions } from "@/utils";

interface Props {
  entry: entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UiContext);
  const router = useRouter();

  const onDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", entry._id);
    startDragging();
  };

  const onDragEnd = () => {
    endDragging();
  };

  const onClick = () => {
    router.push(`/entries/${entry._id}`);
  }
  return (
    <Card
      onClick={onClick}
      sx={{
        marginBottom: 1,
        position:'relative', 
        zIndex: 999,
        forceFallback: 'true',
        cursor: 'pointer'
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
          <Typography variant="body2">Hace: {`${dateFunctions.getformatdistanceToNow(entry.createdAt)}`}</Typography>
        </CardActions>
        
      </CardActionArea>
      
    </Card>
  );
};
