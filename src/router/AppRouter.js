import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from 'react-router-dom';
import PrivateRoute from 'router/PrivateRoute';
import LoginPage from 'pages/LoginPage/LoginPage';
import PrivatePage from 'pages/PrivatePage/PrivatePage';
import Private2Page from 'pages/Private2Page/Private2Page';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<div>not found</div>} />
        <Route path="/" exact element={<Navigate to="/login" />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route
          path="/private"
          exact
          element={<PrivateRoute component={PrivatePage} />}
        />
        <Route
          path="/private2"
          exact
          element={<PrivateRoute component={Private2Page} />}
        />
      </Routes>
    </Router>
  );
}
