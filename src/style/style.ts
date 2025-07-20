import { StyleSheet } from 'react-native';
import { normalize } from '../utlis/helper/normalize';
import { COLOR } from '../theme/color';
import { FONTS } from '../theme/font';

export const SplashStyle = StyleSheet.create({
  LinearGradientView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImg: {
    resizeMode: 'contain',
    width: normalize(150),
    height: normalize(100),
    justifyContent: 'center',
    tintColor: COLOR.white,
  },
  movieText: {
    fontFamily: FONTS.Nunito_Bold,
    color: COLOR.white,
    fontSize: normalize(18),
  },
  subText: {
    color: COLOR.white,
    fontFamily: FONTS.Nunito_SemiBold,
    fontSize: normalize(14),
  },
});

export const StatusBarStyle = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
});

export const HomeScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    resizeMode: 'contain',
    width: normalize(35),
    height: normalize(35),
    alignSelf: 'center',
    marginTop: normalize(10),
    tintColor: COLOR.white,
  },
  noMoviesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noMoviesText: {
    color: COLOR.white,
    fontFamily: FONTS.Nunito_Medium,
    fontSize: normalize(14),
  },
});
export const MovieListStyle = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'center',
    marginBottom: normalize(15),
  },

  ImageContainer: {
    width: '100%',
    aspectRatio: 2 / 2.5,
    overflow: 'hidden',
    borderTopRightRadius: normalize(20),
    borderTopLeftRadius: normalize(20),
  },
  moviePoster: {
    width: '100%',
    height: '100%',
  },
  listContainer: {
    padding: normalize(10),
    marginHorizontal: normalize(30),
  },
  CardContainer: {
    width: '58%',
    backgroundColor: COLOR.cardColor,
    borderRadius: normalize(15),
    marginHorizontal: normalize(10),
    paddingBottom: normalize(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 10,
  },
  titleText: {
    color: COLOR.white,
    fontFamily: FONTS.Nunito_Bold,
    fontSize: normalize(13),
    marginHorizontal: normalize(10),
    marginTop: normalize(10),
  },
  rating: {
    resizeMode: 'contain',
    width: normalize(10),
    height: normalize(10),
    marginLeft: normalize(1),
    tintColor: COLOR.lightGreen,
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: COLOR.lightGreen,
    fontFamily: FONTS.Nunito_Bold,
    fontSize: normalize(12),
    marginHorizontal: normalize(10),
    paddingVertical:normalize(4)
  },
  releaseText: {
    fontFamily: FONTS.Nunito_SemiBold,
    color: COLOR.white,
    fontSize: normalize(12),
    marginHorizontal: normalize(10),
  },
});

export const movieDetailsStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    // paddingHorizontal: normalize(10),
    paddingBottom: normalize(20),
    // backgroundColor: COLOR.cardColor,
  },
  posterImg: {
    width: '100%',
    height: 550,
    resizeMode: 'cover',
  },
  titleText: {
    fontFamily: FONTS.Nunito_Bold,
    color: COLOR.white,
    fontSize: normalize(18),
    marginTop: normalize(10),
    marginHorizontal: normalize(15),
  },
  overviewText: {
    fontFamily: FONTS.Nunito_SemiBold,
    color: COLOR.white,
    fontSize: normalize(14),
    marginTop: normalize(10),
    marginHorizontal: normalize(15),
    backgroundColor:COLOR.cardColor,
    padding:normalize(10),
    borderRadius:normalize(10),
    letterSpacing:normalize(2),
  },
  genreText: {
    fontFamily: FONTS.Nunito_Bold,
    color: COLOR.white,
    fontSize: normalize(13),
    marginTop: normalize(10),
    marginHorizontal: normalize(15),
    backgroundColor: COLOR.cardColor,
    width: normalize(100),
    textAlign: 'center',
    paddingHorizontal: normalize(10),
    paddingTop: normalize(8),
    paddingBottom: normalize(9),
    borderRadius: normalize(8),
  },
  releaseText: {
    fontFamily: FONTS.Nunito_Bold,
    color: COLOR.white,
    fontSize: normalize(13),
    marginTop: normalize(10),
    marginHorizontal: normalize(15),
  },
});

export const headerStyle = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(20),
    // paddingVertical: normalize(8),
    backgroundColor: COLOR.cardColor,
    paddingTop: normalize(20),
    paddingBottom: normalize(15),
  },
  headerTitle: {
    fontFamily: FONTS.Nunito_Bold,
    color: COLOR.white,
    fontSize: normalize(18),
  },
  headerIcon: {
    width: normalize(24),
    height: normalize(24),
    tintColor: COLOR.white,
  },

  headerImage: {
    resizeMode: 'contain',
    width: normalize(15),
    height: normalize(15),
    borderRadius: normalize(15),
    tintColor: COLOR.white,
  },
});

export const customButtonStyle = StyleSheet.create({
  buttonContainer: {
    backgroundColor: COLOR.cardColor,
    paddingVertical: normalize(15),
    paddingHorizontal: normalize(20),
    borderRadius: normalize(5),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: normalize(10),
    marginHorizontal: normalize(10),
    marginBottom: normalize(10),
  },
  buttonText: {
    fontFamily: FONTS.Nunito_Bold,
    color: COLOR.white,
    fontSize: normalize(14),
  },
});

export const textInputStyle = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.cardColor,
    borderRadius: normalize(5),
    paddingHorizontal: normalize(15),
    marginHorizontal: normalize(10),
    marginTop: normalize(10),
    marginBottom: normalize(10),
  },
  inputField: {
    flex: 1,
    color: COLOR.white,
    fontFamily: FONTS.Nunito_SemiBold,
    fontSize: normalize(14),
    paddingVertical: normalize(16),
    letterSpacing: normalize(1.5),
  },
  searchIcon: {
    width: normalize(15),
    height: normalize(15),
    tintColor: COLOR.lightGreen,
  },
});
