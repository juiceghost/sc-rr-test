import React from 'react';
import styled from 'styled-components';

import Hero from './Hero';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
`;

const StyledPara = styled.p`
  max-width: 20em;
`;

function App() {
  return (
    <MainContainer>
      <h1>Krille</h1>
      <StyledPara>This is the most awesomest page ever. Trust me bro Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam eligendi corrupti reiciendis porro asperiores necessitatibus ipsam id dignissimos ullam commodi? Optio fuga eos quidem repellat quos assumenda omnis, sequi atque?</StyledPara>
      <Hero />
    </MainContainer>
  )
}

export default App
