import React from 'react';
import { useRouteMatch, Switch, Route } from "react-router-dom";

import MovieDetail from './MovieDetail';

function MoviePage() {
    let match = useRouteMatch();
    //console.log(match);

    return (
        <>
            <h1>Movie</h1>
            <Switch>
                <Route path={`${match.path}/:movieId`}>
                    <MovieDetail />
                </Route>
                <Route path={match.path}>
                    <h3>Go back and click a movie please.</h3>
                </Route>
            </Switch>
        </>
    );
};


export default MoviePage;