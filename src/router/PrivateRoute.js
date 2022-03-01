import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from 'services/auth.service';

export default function PrivateRoute({ component: Component, ...rest }) {
  const [loading, setLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const isLogged = await isLoggedIn();
        setIsLogged(isLogged);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return loading ? (
    <div style={{ height: '100vh' }}>loading…</div>
  ) : isLogged ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" replace state={{ from: rest.location }} />
  );
}
