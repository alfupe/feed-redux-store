import { setFilmsIfEmpty, unsetFilms } from 'redux/actions/films-actions';
import { setPlanetsIfEmpty, unsetPlanets } from 'redux/actions/planets-actions';
import { setSpeciesIfEmpty, unsetSpecies } from 'redux/actions/species-actions';
import {
  setVehiclesIfEmpty,
  unsetVehicles,
} from 'redux/actions/vehicles-actions';
import {
  setStarshipsIfEmpty,
  unsetStarships,
} from 'redux/actions/starships-actions';

export const feedStore = () => async (dispatch, getState) => {
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
