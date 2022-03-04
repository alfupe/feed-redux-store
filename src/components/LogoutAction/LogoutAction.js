import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFilms } from 'hooks/use-films';
import { useVehicles } from 'hooks/use-vehicles';
import { useStarships } from 'hooks/use-starships';
import { useSpecies } from 'hooks/use-species';
import { usePlanets } from 'hooks/use-planets';

export default function LogoutAction() {
  const navigate = useNavigate();
  const { unset: unsetFilms } = useFilms();
  const { unset: unsetPlanets } = usePlanets();
  const { unset: unsetSpecies } = useSpecies();
  const { unset: unsetStarships } = useStarships();
  const { unset: unsetVehicles } = useVehicles();

  const handleLogout = useCallback(
    (event) => {
      localStorage.removeItem('isLoggedIn');
      unsetFilms();
      unsetPlanets();
      unsetSpecies();
      unsetStarships();
      unsetVehicles();
      navigate('/login');
    },
    [
      navigate,
      unsetFilms,
      unsetPlanets,
      unsetSpecies,
      unsetStarships,
      unsetVehicles,
    ],
  );

  return (
    <button type="button" onClick={handleLogout}>
      Logout
    </button>
  );
}
