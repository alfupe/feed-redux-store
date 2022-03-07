import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { emptyStore } from 'redux/actions/feed-store-actions';

export default function LogoutAction() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = useCallback(
    (event) => {
      event.preventDefault();
      localStorage.removeItem('isLoggedIn');
      dispatch(emptyStore());
      navigate('/login');
    },
    [navigate, dispatch],
  );

  return (
    /* eslint jsx-a11y/anchor-is-valid: "off" */
    <a href="#" onClick={handleLogout}>
      Logout
    </a>
  );
}
