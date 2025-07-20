import { StatusBar, Image, View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { HomeScreenStyle } from '../style/style';
import { IMAGES } from '../theme/images';
import { fetchMoviesList } from '../redux/MovieSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import LinearGradient from 'react-native-linear-gradient';
import MovieList from '../components/MovieList';
import CustomTextInput from '../components/CustomTextInput';
import { COLOR } from '../theme/color';

const Home = () => {
  const dispatch = useAppDispatch();
  const { movies, error } = useAppSelector(state => state.Movies);
  console.log(movies, 'Movies');
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [masterData, setMasterData] = React.useState<any[]>(movies);
  const [filteredData, setFilteredData] = React.useState<any[]>(masterData);
  useEffect(() => {
    dispatch(fetchMoviesList());

  }, [dispatch]);

  useEffect(() => {
    setMasterData(movies);
    setFilteredData(movies);
  }, [movies]);

  const serachFilterFunction = (text: string) => {
    if (text) {
      const newdata = masterData.filter(item => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newdata);
      setSearchQuery(text);
    } else {
      setFilteredData(masterData);
      setSearchQuery(text);
    }
  };
  return (
    <LinearGradient
      start={{ x: 5, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={['#000000', '#008080', '#004d4d']}
      style={HomeScreenStyle.container}
    >
      <StatusBar barStyle={'light-content'} translucent={false} backgroundColor={COLOR.cardColor} />
      <Image source={IMAGES.logo} style={HomeScreenStyle.logoContainer} />
      <CustomTextInput
        value={searchQuery}
        onChangeText={text => serachFilterFunction(text)}
        placeholder="Find Your Movies"
        placeholderTextColor={COLOR.white}
      />
      {filteredData.length > 0 ? (
        <MovieList movies={filteredData} error={error} />
       ) : (
        <View style={HomeScreenStyle.noMoviesContainer}>
          <Text style={HomeScreenStyle.noMoviesText}>No Movies Found</Text>
        </View> 
       )} 
    </LinearGradient>
  );
};

export default Home;
