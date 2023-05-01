import { Navigate, Route, Routes } from 'react-router-dom';

// import CanvasTools from "./components/CanvasTools";
import CaseBlog from './pages/CaseBlog';
import ForgetPassword from './pages/ForgetPassword';
import Home from './pages/Home';
import Login from './pages/Login';
import NewCase from './pages/NewCase';
import LoadCase from './pages/LoadCase';
import Page404 from './pages/Page404';
import ReadCase from './pages/ReadCase';
import Member from './pages/Member';
import constants from './constant/routesConstant';
import { PrivateRoute } from './context/PrivateRoute';
import LoginContext from './context/LoginContext';
import { useContext } from 'react';

const App = () => {
  const { ROUTES } = constants;
  const { isLoggedIn } = useContext(LoginContext);
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.newCase} element={<NewCase />} />
        <Route path={ROUTES.caseBlog} element={<CaseBlog />} />
        <Route path={ROUTES.loadCase} element={<LoadCase />} />
        <Route path={ROUTES.readCase} element={<ReadCase />} />
        <Route path={ROUTES.member} element={<Member />} />
      </Route>
      <Route
        path={ROUTES.login}
        element={isLoggedIn ? <Navigate to="/" /> : <Login />}
      />

      <Route
        path={ROUTES.forgotPassword}
        element={isLoggedIn ? <Navigate to="/" /> : <ForgetPassword />}
      />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default App;
