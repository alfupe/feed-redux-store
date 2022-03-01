import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LogoutAction() {
  const navigate = useNavigate();

  const handleLogout = useCallback(
    (event) => {
      localStorage.removeItem('isLoggedIn');
      navigate('/login');
    },
    [navigate],
  );

  return (
    <button type="button" onClick={handleLogout}>
      Logout
    </button>
  );
}
