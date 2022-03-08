import { NavLink } from 'react-router-dom';
import LogoutAction from 'components/LogoutAction/LogoutAction';
import './PageContainer.css';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { emptyStore, feedStore } from 'redux/actions/feed-store-actions';
import { delay } from 'modules/delay/delay';
import { useFilms } from 'hooks/use-films';

export default function PageContainer({ children, title }) {
  const dispatch = useDispatch();
  const { unsetFilms, setFilmsIfEmpty } = useFilms();

  const navItemClassName = useCallback(({ isActive }) => {
    return `page-container__nav-item ${
      isActive ? 'page-container__nav-item--is-active' : ''
    }`;
  }, []);

  return (
    <article className="page-container">
      <header>
        <h1>{title}</h1>
        <nav className="page-container__nav-menu">
          <NavLink className={navItemClassName} to="/private1">
            Private 1
          </NavLink>
          <NavLink className={navItemClassName} to="/private2">
            Private 2
          </NavLink>
          <LogoutAction />
        </nav>
        <hr />
        Store actions:&nbsp;
        <button
          onClick={() => {
            dispatch(feedStore());
          }}
        >
          Feed
        </button>
        <button
          onClick={() => {
            dispatch(emptyStore());
          }}
        >
          Empty
        </button>
        <button
          onClick={async () => {
            dispatch(emptyStore());
            await delay(1000);
            dispatch(feedStore());
          }}
        >
          Refill
        </button>
        <button
          onClick={async () => {
            unsetFilms();
            await delay(1000);
            setFilmsIfEmpty();
          }}
        >
          Unset films
        </button>
        <button
          onClick={() => {
            setFilmsIfEmpty();
          }}
        >
          Set films
        </button>
        <hr />
      </header>
      <section>{children}</section>
    </article>
  );
}
