import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Hero from './Hero';
import CardList from './CardList';

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

function Movie() {

  // Object destructuring:
  let { movieId } = useParams();

  // Same result, no destructuring:
  //let params = useParams();
  //let movieId = params.movieId;
  //console.log(params);

  return <h3>Requested movie ID: {movieId}</h3>;
}

function Movies() {
  let match = useRouteMatch();
  //console.log(match);

  return (
    <>
      <h1>Movie</h1>
      <Switch>
        <Route path={`${match.path}/:movieId`}>
          <Movie />
        </Route>
        <Route path={match.path}>
          <h3>Go back and click a movie please.</h3>
        </Route>
      </Switch>
    </>
  );

};

function App() {

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
            <Movies />
          </Route>
          <Route path="/">
            <CardList />
          </Route>
        </Switch>

        {/* <Card poster={falling_down_pic} title="Falling Down" description="An ordinary man frustrated with the various flaws he sees in society begins to psychotically and violently lash out against them." />  */}

      </MainContainer>
    </Router>
  )
}

export default App
