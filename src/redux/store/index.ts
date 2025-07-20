import { configureStore } from '@reduxjs/toolkit';
import MovieReducer from '../MovieSlice';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['Movies', 'selectedMovie', 'favoriteMovies'], 
};
const persistedReducer = persistReducer(persistConfig, MovieReducer);
export const store = configureStore({
  reducer: {
    Movies: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
