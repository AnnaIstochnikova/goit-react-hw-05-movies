import { Link, Outlet } from 'react-router-dom';
//import { Route, Routes } from 'react-router-dom';
//import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
