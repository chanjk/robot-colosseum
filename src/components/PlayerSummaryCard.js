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
        <img src={player.image_url} style={style.img}/>
      </div>
    </CardMedia>
    <CardTitle title={player.name} subtitle={player.role} />
    <CardText>
      <div>Level: {player.level}</div>
      <div>Metals: {player.metal_count}</div>
      <div>Wins: {player.win_count}</div>
    </CardText>
  </Card>
);

export default PlayerSummaryCard;
