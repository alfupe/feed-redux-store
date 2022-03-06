import filmsReducer from 'redux/reducers/films-reducer';
import planetsReducer from 'redux/reducers/planets-reducer';
import speciesReducer from 'redux/reducers/species-reducer';
import vehiclesReducer from 'redux/reducers/vehicles-reducer';

export const rootReducer = {
  films: filmsReducer,
  planets: planetsReducer,
  species: speciesReducer,
  starships: speciesReducer,
  vehicles: vehiclesReducer,
};
