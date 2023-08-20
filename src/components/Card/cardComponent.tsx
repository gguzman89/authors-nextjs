import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";

type CardProps = {
  name: string;
  top_work?: string | 'Has not Top Work';
  type: string;
  image?: string | null;
};

export const CardComponent: React.FC<CardProps> = ({
  name,
  top_work,
  type,
  image,
}) => {
  return (
    <Card>
      {image !== null && (
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="Paella dish"
        />
      )}

      <CardContent>
        <Typography variant="h4" sx={{ mb: 1.5 }}>
          {name}
        </Typography>
        <Divider />
        <Typography sx={{ mt: 1.5 }}>Type: {type}</Typography>
        <Typography sx={{ mt: 1.5 }}>Top Work: {top_work}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
