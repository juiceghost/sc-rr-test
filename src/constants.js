const TMDB_API_KEY = "d82f364f4fa13e9d2bc3e63a48f37d0c";
export const POSTER_PREFIX = "https://image.tmdb.org/t/p/original";
export const TMDB_GET_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&with_genres=80,18,53`;
//export const TMDB_GET_DETAIL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`;
export const TMDBGetDetailById = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`;

