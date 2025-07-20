import { View, Text, TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import { RootStackParamList } from '../Navigator/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Movie } from '../Types/movieType';
import { useNavigation } from '@react-navigation/native';
import { MovieListStyle } from '../style/style';
import { IMAGES } from '../theme/images';
import moment from 'moment';



type MovieListItemProps = {
  movie: Movie;
};

type MovieListNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

const MovieListComp:React.FC<MovieListItemProps> = ({movie}) => {
     const navigation = useNavigation<MovieListNavigationProp>();
    
  return (
    <TouchableOpacity 
    onPress={()=> navigation.navigate('MovieDetails',{movieId:movie.id})}
    style={MovieListStyle.CardContainer}>
       <View style={MovieListStyle.ImageContainer}>
         <Image source={{uri:`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}} style={MovieListStyle.moviePoster} />
       </View>
       <Text style={MovieListStyle.titleText}>{movie.title}</Text>
      <View style={MovieListStyle.ratingView}>
         <Text style={MovieListStyle.ratingText}>{movie.vote_average.toFixed(1)}</Text>
         <Image source={IMAGES.rating} style={MovieListStyle.rating} />
      </View>
      <Text style={MovieListStyle.releaseText}>{moment(movie.release_date).format('DD MMMM YYYY')}</Text>
    </TouchableOpacity>
  )
}

export default MovieListComp