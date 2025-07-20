import { FlatList } from 'react-native';
import React from 'react';
import { Movie } from '../Types/movieType';
import MovieListComp from './MovieListComp';
import { MovieListStyle } from '../style/style';

interface MovieListProps {
  movies: Movie[];
  loading?: boolean;
  error?: string | null;
}

const MovieList:React.FC<MovieListProps> = ({ movies, loading = false, error = null }) => {
  return (
   <FlatList 
   showsVerticalScrollIndicator={false}
    numColumns={2}
   data={movies} 
    renderItem={({item,index})=>{
        return(
            <MovieListComp movie={item} />
        )
    }}
    columnWrapperStyle={MovieListStyle.columnWrapper}
     contentContainerStyle={MovieListStyle.listContainer}
   />
  );
};

export default MovieList;
