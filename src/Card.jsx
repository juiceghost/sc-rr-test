import React from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 30em;
  width: 25em;
  /* background: red; */
  border: 2px solid black;
  margin-bottom: 1em;
`;

const CardImage = styled.img`
   object-fit: cover;
   height: 20em;
`;

function Card(props) {
    //console.log(props);
    return (
        <CardContainer>
            <CardImage src={props.poster} alt={props.title} />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </CardContainer>
    );
}


export default Card;