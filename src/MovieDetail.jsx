import React from 'react';
import { Rating } from 'react-simple-star-rating';
import { useParams } from "react-router-dom";
import axios from 'axios';

import * as URLS from './constants';

function MovieDetail() {
    const [data, setData] = React.useState(false);
    // Object destructuring:
    let { movieId } = useParams();

    console.log(URLS.POSTER_PREFIX)

    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios(URLS.TMDBGetDetailById(movieId));
            console.log(result)
            setData(result.data);
        };

        fetchData();
    }, []);


    // Same result, no destructuring:
    //let params = useParams();
    //let movieId = params.movieId;
    //console.log(params);
    return data ? <>
        <h1>{data.title}</h1>
        <Rating initialValue={data.vote_average / 2} allowFraction />
    </> : <h3>Loading</h3>;
}


export default MovieDetail;