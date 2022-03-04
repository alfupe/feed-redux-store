import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFilms } from 'hooks/use-films';

export default function LogoutAction() {
  const navigate = useNavigate();
  const { unset: unsetFilms } = useFilms();

  const handleLogout = useCallback(
    (event) => {
      localStorage.removeItem('isLoggedIn');
      unsetFilms();
      navigate('/login');
    },
    [navigate, unsetFilms],
  );

  return (
    <button type="button" onClick={handleLogout}>
      Logout
    </button>
  );
}
