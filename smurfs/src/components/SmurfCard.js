import React from 'react'
import styled from 'styled-components';

const Card = styled.div`
  width: 60%;
  border: 1px solid black;
  margin: 2%;
`;

const SmurfCard = (props) => {
    // console.log(props);
    return (
        <Card>
            <h1>{props.smurf.name}</h1>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
        </Card>
    )
}

export default SmurfCard
