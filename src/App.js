import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

// import CanvasTools from "./components/CanvasTools";
import CaseBlog from './pages/CaseBlog';
import ForgetPassword from './pages/ForgetPassword';
import Home from './pages/Home';
import Login from './pages/Login';
import NewCase from './pages/NewCase';
import Page404 from './pages/Page404';
import Member from './pages/Member';
import constants from './constant/routesConstant';

import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from './store/PrivateRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer-newcase';
import { useState } from 'react';
import { useEdgesState, useNodesState } from 'reactflow';
import { useEffect } from 'react';
import { userDetails } from './store/features/user/userSlice';

const App = () => {
  const { token } = useSelector((state) => state.auth);

  const location = useLocation();
  const { ROUTES } = constants;

  const [nodeInfo, setNodeInfo] = useState({ query: '', data: null });
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [canvasFunc, setCanvasFunc] = useState();
  const [isChecked, setIsChecked] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const [mode, setMode] = useState(true);
  const [nodeInfoList, setNodeInfoList] = useState([]);
  const [caseName, setCaseName] = useState('');
  const [activeButton, setActiveButton] = useState(null);
  const [search, setSearch] = useState('');
  const [ransomeData, setRansomeData] = useState([]);

  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) dispatch(userDetails());
  },[]);

  return (
    <>
      {token && (
        <nav>
          <Navbar
            nodes={nodes}
            edges={edges}
            caseName={caseName}
            setNodeInfo={setNodeInfo}
            setNodeInfoList={setNodeInfoList}
            nodeInfoList={nodeInfoList}
            setNodes={setNodes}
            setIsLoading={setIsLoading}
            setCaseName={setCaseName}
            setMode={setMode}
            mode={mode}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            search={search}
            setSearch={setSearch}
            setRansomeData={setRansomeData}
            profileDetail={user}
          />
        </nav>
      )}
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route
            path="/*"
            element={
              <Home
                search={search}
                caseName={caseName}
                setCaseName={setCaseName}
                setMode={setMode}
                mode={mode}
              />
            }
          />
          <Route
            path={`${ROUTES.newCase}/:id`}
            element={
              <NewCase
                setEdges={setEdges}
                setNodes={setNodes}
                setCanvasFunc={setCanvasFunc}
                nodes={nodes}
                edges={edges}
                setActiveMenu={setActiveMenu}
                nodeInfo={nodeInfo}
                activeMenu={activeMenu}
                setMode={setMode}
                mode={mode}
                isChecked={isChecked}
                setIsChecked={setIsChecked}
                isLoading={isLoading}
                setNodeInfo={setNodeInfo}
                nodeInfoList={nodeInfoList}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                canvasFunc={canvasFunc}
                activeButton={activeButton}
                setActiveButton={setActiveButton}
                setCaseName={setCaseName}
                search={search}
                setSearch={setSearch}
                ransomeData={ransomeData}
              />
            }
          />
          <Route
            path={ROUTES.caseBlog}
            element={<CaseBlog setMode={setMode} mode={mode} />}
          />

          <Route
            path={ROUTES.member}
            element={
              <Member profileDetail={user} setMode={setMode} mode={mode} />
            }
          />
        </Route>
        <Route
          path={ROUTES.login}
          element={
            token ? (
              <Navigate to="/" />
            ) : (
              <Login setMode={setMode} mode={mode} />
            )
          }
        />

        <Route
          path={ROUTES.forgotPassword}
          element={
            token ? (
              <Navigate to="/" />
            ) : (
              <ForgetPassword setMode={setMode} mode={mode} />
            )
          }
        />

        <Route path="*" element={<Page404 setMode={setMode} mode={mode} />} />
      </Routes>

      {token && location.pathname === `${ROUTES.newCase}/:casename/:id` && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
};

export default App;
