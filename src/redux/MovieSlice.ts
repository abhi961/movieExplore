import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie, MovieDetails } from '../Types/movieType';


interface MoviesState {
  movies: Movie[];
  selectedMovie: MovieDetails | null;
  favoriteMovies?: Movie[];
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  movies: [],
  selectedMovie: null,
  favoriteMovies: [],
  loading: false,
  error: null,
};

const API_KEY = '235460db70bb88ac649040e8740ed65a'

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    fetchMovieRequset(state) {
      state.loading = true;
      state.error = null;
    },
    fetchMoviesSuccess(state, action: PayloadAction<Movie[]>) {
      state.movies = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchMoviesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    fetchMovieDetailsReq(state) {
      state.loading = true;
      state.error = null;
    },

    fetchMovieDetailsSuccess(state, action: PayloadAction<MovieDetails>) {
      state.selectedMovie = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchMovieDetailsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    addtoFavoritesRequest(state) {
      state.loading = true;
      state.error = null;
    },
    addtoFavoritesSuccess(state, action: PayloadAction<Movie>) {
      const movie = action.payload;
     if (!state.favoriteMovies?.some(fav => fav.id === movie.id)) {
        state.favoriteMovies?.push(movie);
      }
    },
    addtoFavoritesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload; 
    },

    removefromFavoritesReq(state) {
      state.loading = true;
      state.error = null;
    },
    removefromFavoritesSuccess(state, action: PayloadAction<number>) {
      const movieId = action.payload;
      state.favoriteMovies = state.favoriteMovies?.filter(movie => movie.id !== movieId);
      state.loading = false;
      state.error = null;
    },
    removefromFavoritesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },  
  },
});
export const {
  fetchMovieRequset,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  fetchMovieDetailsReq,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsFailure,
  addtoFavoritesFailure,
  addtoFavoritesRequest,
  addtoFavoritesSuccess,
  removefromFavoritesFailure,
  removefromFavoritesReq,
  removefromFavoritesSuccess
} = movieSlice.actions;

export default movieSlice.reducer;

export const fetchMoviesList = () => async (dispatch: any) => {
  try {
    dispatch(fetchMovieRequset());
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`,
    );
    const data = await response.json();
    dispatch(fetchMoviesSuccess(data.results));
  } catch (error) {
    // dispatch(fetchMoviesFailure(error.message));
  }
};

export const fetchMovieDetails = (movieId: number) => async (dispatch: any) => {
  try {
    dispatch(fetchMovieDetailsReq());
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`,
    );
    const data = await response.json();
    dispatch(fetchMovieDetailsSuccess(data));
  } catch (error) {
    console.log(error);
  }
};
