import { NavLink } from 'react-router-dom';
import LogoutAction from 'components/LogoutAction/LogoutAction';
import './PageContainer.css';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { emptyStore, feedStore } from 'redux/actions/feed-store-actions';
import { delay } from 'modules/delay/delay';
import { useFilms } from 'hooks/use-films';
import { Button, Container, Segment } from 'semantic-ui-react';

export default function PageContainer({ children, title }) {
  const dispatch = useDispatch();
  const { unsetFilms, setFilmsIfEmpty } = useFilms();

  const navItemClassName = useCallback(({ isActive }) => {
    return `page-container__nav-item ${
      isActive ? 'page-container__nav-item--is-active' : ''
    }`;
  }, []);

  return (
    <Container as="article" className="page-container">
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
        <Segment>
          Store actions:&nbsp;
          <Button
            onClick={() => {
              dispatch(feedStore());
            }}
          >
            Feed
          </Button>
          <Button
            onClick={() => {
              dispatch(emptyStore());
            }}
          >
            Empty
          </Button>
          <Button
            onClick={async () => {
              dispatch(emptyStore());
              await delay(1000);
              dispatch(feedStore());
            }}
          >
            Refill
          </Button>
          <Button
            onClick={async () => {
              unsetFilms();
              await delay(1000);
              setFilmsIfEmpty();
            }}
          >
            Unset films
          </Button>
          <Button
            onClick={() => {
              setFilmsIfEmpty();
            }}
          >
            Set films
          </Button>
        </Segment>
      </header>
      <section>{children}</section>
    </Container>
  );
}
