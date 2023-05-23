import React, { useState } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


import Form from './Form';
import CardList from './CardList';
import MoviePage from './MoviePage';

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
  const [showForm, setShowForm] = useState(true);

  function hideForm(genre) {
    // this function shall hide the form
    console.log("Hej från hideForm INUTI APP du angav genre " + genre)
    setShowForm(false);
  }

  function displayForm() {
    setShowForm(true);
  }
  return (
    <Router>
      <MainContainer>

        <h1>Krille</h1>
        {/* <StyledPara>This is the most awesomest page ever. Trust me bro Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam eligendi corrupti reiciendis porro asperiores necessitatibus ipsam id dignissimos ullam commodi? Optio fuga eos quidem repellat quos assumenda omnis, sequi atque?</StyledPara>
      <Hero /> */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movie">Movie</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/movie">
            {showForm && <Form hideForm={hideForm} />}
            <MoviePage displayForm={displayForm} />

          </Route>
          <Route path="/">
            <Form />
            <CardList />
          </Route>
        </Switch>

        {/* <Card poster={falling_down_pic} title="Falling Down" description="An ordinary man frustrated with the various flaws he sees in society begins to psychotically and violently lash out against them." />  */}

      </MainContainer>
    </Router>
  )
}

export default App
