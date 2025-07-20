import { Text, Image, ScrollView, Alert } from 'react-native';
import React, { useEffect, useMemo } from 'react';
import { movieDetailsStyle } from '../style/style';
import LinearGradient from 'react-native-linear-gradient';
import {
  RouteProp,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import { RootStackParamList } from '../Navigator/AppNavigator';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  addtoFavoritesRequest,
  addtoFavoritesSuccess,
  fetchMovieDetails,
  removefromFavoritesSuccess,
} from '../redux/MovieSlice';
import CustomHeader from '../components/CustomHeader';
import moment from 'moment';
import CustomButon from '../components/CustomButon';

type MovieDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'MovieDetails'
>;

interface Props {
  route: MovieDetailsScreenRouteProp;
}
const MovieDetails: React.FC<Props> = ({ route }) => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const { movieId } = route.params;
  console.log(movieId, 'movieId');
  const dispatch = useAppDispatch();
  const { selectedMovie, favoriteMovies } = useAppSelector(
    state => state.Movies,
  );
  console.log(favoriteMovies, 'favoriteMovies');
  const isFavorite = useMemo(() => {
    return favoriteMovies?.some(fav => fav.id === selectedMovie?.id);
  }, [favoriteMovies, selectedMovie]);

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
  }, [isFocused, movieId, dispatch]);

  const addtoFavoritesbutton = () => {
    try {
      dispatch(addtoFavoritesRequest());
      if (!selectedMovie) {
        console.error('No movie selected to add to favorites');
        return;
      }
      if (isFavorite) {
        dispatch(removefromFavoritesSuccess(selectedMovie.id));
        Alert.alert(
          'Remove to Favorites',
          `${selectedMovie.title} has been remove to your favorites.`,
          [{ text: 'OK' }],
        );
      } else {
        dispatch(addtoFavoritesSuccess(selectedMovie));
        Alert.alert(
          'Added to Favorites',
          `${selectedMovie.title} has been added to your favorites.`,
          [{ text: 'OK' }],
        );
      }
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  };
  return (
    <LinearGradient
      start={{ x: 5, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={['#000000', '#008080', '#004d4d']}
      style={movieDetailsStyle.container}
    >
      <CustomHeader
        title={'Movie Details'}
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={movieDetailsStyle.scrollViewContainer}
      >
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${selectedMovie?.poster_path}`,
          }}
          style={movieDetailsStyle.posterImg}
        />
        <Text style={movieDetailsStyle.titleText}>{selectedMovie?.title}</Text>
        <Text style={movieDetailsStyle.overviewText}>
          {selectedMovie?.overview}
        </Text>
        <Text style={movieDetailsStyle.genreText}>
          {selectedMovie?.genres[0].name}
        </Text>
        <Text style={movieDetailsStyle.releaseText}>
          Release Date:{' '}
          {moment(selectedMovie?.release_date).format('DD MMMM YYYY')}
        </Text>
        <CustomButon
          title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          onPress={addtoFavoritesbutton}
        />
      </ScrollView>
    </LinearGradient>
  );
};

export default MovieDetails;
