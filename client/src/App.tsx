import 'hammerjs';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import routes from './routes/routes';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
      <HashRouter>
        <div className="k-no-auth">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            {routes
              .filter((f) => f.role.indexOf('guest') >= 0)
              .map((item) => (
                <Route key={item.route} path={item.route} element={item.element} />
              ))}
          </Routes>
        </div>
      </HashRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
