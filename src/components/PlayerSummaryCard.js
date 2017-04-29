import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

const PlayerSummaryCard = ({ name, role, imageUrl }) => (
  <Card>
    <CardMedia>
      <img src={imageUrl} />
    </CardMedia>
    <CardTitle title={name} subtitle={role} />
  </Card>
);

export default PlayerSummaryCard;
