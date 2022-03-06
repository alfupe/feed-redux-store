import {
  setPlanetsIfEmpty,
  unsetPlanets,
} from 'redux/reducers/planets-reducer';
import {
  setSpeciesIfEmpty,
  unsetSpecies,
} from 'redux/reducers/species-reducer';
import {
  setVehiclesIfEmpty,
  unsetVehicles,
} from 'redux/reducers/vehicles-reducer';
import {
  setStarshipsIfEmpty,
  unsetStarships,
} from 'redux/reducers/starships-reducer';
import { setFilmsIfEmpty, unsetFilms } from 'redux/reducers/films-reducer';

export const feedStore = () => (dispatch, getState) => {
  setTimeout(() => {
    dispatch(setFilmsIfEmpty());
    dispatch(setPlanetsIfEmpty());
    dispatch(setSpeciesIfEmpty());
    dispatch(setVehiclesIfEmpty());
    dispatch(setStarshipsIfEmpty());
  }, 100);
};

export const emptyStore = () => async (dispatch, getState) => {
  dispatch(unsetFilms());
  dispatch(unsetPlanets());
  dispatch(unsetSpecies());
  dispatch(unsetVehicles());
  dispatch(unsetStarships());
};
