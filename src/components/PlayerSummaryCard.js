import React from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const style = {
  imgWrapper: {
    textAlign: 'center'
  },
  img: {
    height: 150
  }
}

const PlayerSummaryCard = ({ name, role, imageUrl }) => (
  <Card>
    <CardMedia>
      <div style={style.imgWrapper}>
        <img src={imageUrl} style={style.img}/>
      </div>
    </CardMedia>
    <CardTitle title={name} subtitle={role} />
    <CardText>
      <div>Metals: 2000</div>
      <div>Wins: 20</div>
    </CardText>
  </Card>
);

export default PlayerSummaryCard;
