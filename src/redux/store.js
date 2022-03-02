import { combineReducers, createStore } from 'redux';
import { filmsReducer } from 'redux/reducers/films-reducer';
import { planetsReducer } from 'redux/reducers/planets-reducer';
import { speciesReducer } from 'redux/reducers/species-reducer';
import { vehiclesReducer } from 'redux/reducers/vehicles-reducer';

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const rootReducer = combineReducers({
  films: filmsReducer,
  planets: planetsReducer,
  species: speciesReducer,
  starships: speciesReducer,
  vehicles: vehiclesReducer,
});

export const store = createStore(rootReducer, enhancer);
