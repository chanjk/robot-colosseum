import React from 'react';
import { List, ListItem } from 'material-ui/List';
import { HorizontalBar } from 'react-chartjs-2';

const BattleRatingChart = ({ ratings }) => {
  const data = {
    labels: ratings.map(rating => rating.name),
    datasets: [
      {
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: ratings.map(rating => rating.value)
      }
    ]
  }

  const options = {
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true,
          max: 255
        }
      }]
    },
    legend: { display: false }
  }

  return <List>
    <ListItem>
      <HorizontalBar data={data} options={options} />
    </ListItem>
  </List>;
};

export default BattleRatingChart;
