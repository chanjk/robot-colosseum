import React from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const style = {
  imgWrapper: {
    textAlign: 'center'
  },
  img: {
    height: 150
  }
}

const PlayerSummaryCard = ({ player }) => (
  <Card>
    <CardMedia>
      <div style={style.imgWrapper}>
        <img src={player.imageUrl} style={style.img}/>
      </div>
    </CardMedia>
    <CardTitle title={player.name} subtitle={player.role} />
    <CardText>
      <div>Level: {player.level}</div>
      <div>Metals: {player.metalCount}</div>
      <div>Wins: {player.winCount}</div>
    </CardText>
  </Card>
);

export default PlayerSummaryCard;
