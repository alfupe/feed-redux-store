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
import { FeedStoreProvider } from 'redux/FeedStoreProvider';

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
          element={
            <FeedStoreProvider>
              <PrivateRoute component={PrivatePage} />
            </FeedStoreProvider>
          }
        />
        <Route
          path="/private2"
          exact
          element={
            <FeedStoreProvider>
              <PrivateRoute component={Private2Page} />
            </FeedStoreProvider>
          }
        />
      </Routes>
    </Router>
  );
}
