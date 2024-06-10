import React from "react";

import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Theme } from "@radix-ui/themes";

import { AuthContextProvider as AuthContextProviderClient } from "./contexts/User/AuthContextProviderClient.tsx";
import { AuthContextProvider as AuthContextProviderEmployee } from "./contexts/User/AuthContextProviderEmployee.tsx";

import "./styles/global.styles.css";

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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Theme>
    {/* <React.StrictMode> */}
      <AuthContextProviderClient>
        <AuthContextProviderEmployee>
          <App />
        </AuthContextProviderEmployee>
      </AuthContextProviderClient>
    {/* </React.StrictMode> */}
  </Theme>
);
