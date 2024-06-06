import React from 'react';

import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './styles/global.styles.css';

// function PrivateRoute({ children }) {
//   const navigate = useNavigate();
//   const { isAuthenticated } = useContext(AuthContext);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate('/auth_login');
//     }
//   }, [isAuthenticated, navigate]);

//   return isAuthenticated ? children : null;
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
