import React from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const PlayerSummaryCard = ({ name, role, imageUrl }) => (
  <Card>
    <CardMedia>
      <img src={imageUrl} />
    </CardMedia>
    <CardTitle title={name} subtitle={role} />
    <CardText>
      <div>Metals: 2000</div>
      <div>Wins: 20</div>
    </CardText>
  </Card>
);

export default PlayerSummaryCard;
