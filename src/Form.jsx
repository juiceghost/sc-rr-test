import React, { useState } from "react";
import { Rating } from 'react-simple-star-rating';

function Form() {
    const [movie, setMovie] = useState('');
    const [genre, setGenre] = useState('');
    const [ratingValue, setRatingValue] = useState(0) // https://codesandbox.io/s/react-simple-rating-ts-fzmpu?fontsize=14&hidenavigation=1&theme=dark
    // Select in react: https://www.robinwieruch.de/react-select/

    const genres = [
        {
            id: 80,
            name: "Crime",
        },
        {
            id: 53,
            name: "Thriller"
        },
        {
            id: 18,
            name: "Drama"
        }
    ];

    function handleMovieChange(evt) {
        //console.log(movieName.target.value);
        setMovie(evt.target.value)
    }

    function handleGenreChange(evt) {
        console.log(evt.target.value);
        setGenre(evt.target.value)
    }

    const handleRatingChange = (rate) => {
        console.log(rate)
        setRatingValue(rate)
    }

    function handleSubmit(evt) {
        console.log(evt)
        console.log("You entered " + movie + "in the movie box")
        console.log("You entered " + genre + "in the genre box")
        evt.preventDefault()
    }

    return (
        <>
            <h1>Form</h1>
            ID:
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={movie}
                    onChange={handleMovieChange}
                />
                <label>
                    Genre
                    <select value={genre} onChange={handleGenreChange}>
                        <option value=""> - Please select a genre - </option>
                        {genres.map(genre => (<option value={genre.id}>{genre.name}</option>))}
                        {/* <option value={33}>Thriller</option> */}
                    </select>
                </label>
                <Rating initialValue={2.32} onClick={handleRatingChange} allowFraction />
                <button type="submit">SEND</button>
            </form>
        </>
    )
}

export default Form;