export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
}

export interface MovieDetails extends Movie{
   id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  genres: Array<{ id: number; name: string }>;
}

export interface FavoriteMoviesState extends Movie {
  movies: Movie[];
  selectedMovie: MovieDetails | null;
  favoriteMovies: Movie[];
  loading: boolean;
  error: string | null;
}
