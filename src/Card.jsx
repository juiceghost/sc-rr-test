import React from 'react';
import styled from 'styled-components';

import falling_down_pic from './assets/falling_down.jpeg';


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

function Card() {

    return (
        <CardContainer>
            <CardImage src={falling_down_pic} alt="Falling Down" />
            <h1>Falling Down 1993</h1>
            <p>An ordinary man frustrated with the various flaws he sees in society begins to psychotically and violently lash out against them.</p>
        </CardContainer>
    );
}

export default Card;