import * as React from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Form from './Form';
import Card from './Card';
import * as URLS from './constants';

const CardListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;


function CardList(props) {
    const [data, setData] = React.useState({ results: [] });
    const [page, setPage] = React.useState(1);
    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios(URLS.TMDB_GET_MOVIES + "&page=" + page);
            console.log(result.data)
            setData(result.data);
        };

        fetchData();
    }, [page]);

    const nextPage = () => {
        setPage((prevState) => prevState + 1);
    }
    const prevPage = () => {
        setPage((prevState) => prevState - 1);
    }
    return (
        <>
            Page {data.page} of {data.total_pages}
            <button onClick={nextPage}>NEXT PAGE</button>
            <button onClick={prevPage}>PREV PAGE</button>
            <CardListContainer>
                {data.results.map(movie => (
                    <Link to={`/movie/${movie.id}`} key={movie.id}>
                        <Card title={movie.title} overview={movie.overview} poster={URLS.POSTER_PREFIX + movie.poster_path} />
                        <Form personId={movie.id} />
                    </Link>
                ))}
            </CardListContainer>
        </>
    );
}

export default CardList