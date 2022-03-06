import { NavLink } from 'react-router-dom';
import LogoutAction from 'components/LogoutAction/LogoutAction';
import './PageContainer.css';
import { useCallback } from 'react';

export default function PageContainer({ children, title }) {
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
      </header>
      <section>{children}</section>
    </article>
  );
}
