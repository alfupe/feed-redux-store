import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
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
  ) : (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
}
