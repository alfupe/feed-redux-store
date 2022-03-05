import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFeedStore } from 'hooks/use-feed-store';

export default function LogoutAction() {
  const navigate = useNavigate();
  const { emptyStore } = useFeedStore();

  const handleLogout = useCallback(
    (event) => {
      event.preventDefault();
      localStorage.removeItem('isLoggedIn');
      emptyStore();
      navigate('/login');
    },
    [navigate, emptyStore],
  );

  return (
    /* eslint jsx-a11y/anchor-is-valid: "off" */
    <a href="#" onClick={handleLogout}>
      Logout
    </a>
  );
}
