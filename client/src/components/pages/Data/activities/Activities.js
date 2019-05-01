import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions }  from 'react-toolbox/lib/card';
// import Button from 'react-toolbox/lib/button';
// import 'bootstrap/dist/css/bootstrap.min.css';
import adven from './images/act.jpg';


const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

const Activities = () => (
  <Card style={{width: '350px'}}>
    <CardTitle
      avatar={adven}
      title="Avatar style title"
      subtitle="Subtitle here"
    />
    <CardMedia
      aspectRatio="wide"
      image="https://placeimg.com/800/450/nature"
    />
    <CardText>{dummyText}</CardText>
    <CardActions>
      {/* <Button label="Action 1" />
      <Button label="Action 2" /> */}
    </CardActions>

  </Card>
);

// return <Activities />;

export default Activities;
