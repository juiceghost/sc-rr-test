import React from 'react';
import styled from 'styled-components';

import Hero from './Hero';
import Card from './Card';
import falling_down_pic from './assets/falling_down.jpeg';

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

const myMovies = [
  {
    "poster": falling_down_pic,
    "title": "Falling Down 1993",
    "description": "An ordinary man frustrated with the various flaws he sees in society begins to psychotically and violently lash out against them."
  },
  {
    "poster": falling_down_pic,
    "title": "Falling Down 1994",
    "description": "An ordinary man frustrated with the various flaws he sees in society begins to psychotically and violently lash out against them."
  },
  {
    "poster": falling_down_pic,
    "title": "Falling Down 1995",
    "description": "An ordinary man frustrated with the various flaws he sees in society begins to psychotically and violently lash out against them."
  }
];

function App() {
  return (
    <MainContainer>
      <h1>Krille</h1>
      <StyledPara>This is the most awesomest page ever. Trust me bro Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam eligendi corrupti reiciendis porro asperiores necessitatibus ipsam id dignissimos ullam commodi? Optio fuga eos quidem repellat quos assumenda omnis, sequi atque?</StyledPara>
      <Hero />
      {myMovies.map(movie => <Card title={movie.title} description={movie.description} poster={movie.poster} />)}
      {/* <Card poster={falling_down_pic} title="Falling Down" description="An ordinary man frustrated with the various flaws he sees in society begins to psychotically and violently lash out against them." />  */}
    </MainContainer>
  )
}

export default App
