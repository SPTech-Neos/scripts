import { createContext, useState, useEffect } from "react";
import Cookies from 'js-cookie';

import { EmployeeResponseDto, EmployeeLoginDto } from "../../utils/employee.types";
import { EmployeeAdapter } from "../../adapters/User/Employee";

interface AuthContextType {
  token: EmployeeResponseDto | null;
  isAuthenticated: boolean;
  handleLoginEmployee: (employeeLoginDto: EmployeeLoginDto) => Promise<EmployeeResponseDto | null>;
  handleLogoutEmployee: () => void;
  updateEmployeeData: (updatedFields: Partial<EmployeeResponseDto>) => Promise<void>;
}

export const AuthContextEmployee = createContext<AuthContextType>({
  token: null,
  isAuthenticated: false,
  handleLoginEmployee: async () => null,
  handleLogoutEmployee: () => {},
  updateEmployeeData: async () => {}
});

export const AuthContextProvider = ({ children }: { children: JSX.Element }) => {
  const [token, setToken] = useState<EmployeeResponseDto | null>(null);
  const [expiresAt, setExpiresAt] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const employeeAdapter = new EmployeeAdapter();

  useEffect(() => {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      if (isLoggedIn) {
          renewSession();
      }
  });

  const handleLoginEmployee = async (employeeLoginDto: EmployeeLoginDto): Promise<EmployeeResponseDto | null> => {
    try {
        const { email, password } = employeeLoginDto;
        const token = await employeeAdapter.login({ email, password });

        if (token !== null) {
            console.log("AUTHCONTEXT: " + token.idEmployee);

            setToken(token);
            setIsAuthenticated(true);
            setExpiresAt(Date.now() + 7 * 24 * 60 * 60 * 1000);

            Cookies.set('employeeToken', JSON.stringify(token), { expires: 7 });

            return token as EmployeeResponseDto;
        } else {
            console.error("Token de autenticação é nulo.");
            return null;
        }
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        throw error;
    }
  };


  const handleLogoutEmployee = () => {
      Cookies.remove('employeeToken');

      setToken(null);
      setExpiresAt(0);
      setIsAuthenticated(false);

      localStorage.removeItem("isLoggedIn");
  };

  const renewSession = async () => {
      try {
          const tokenString = Cookies.get('employeeInfo');

          if (isUserAuthenticated() || !tokenString) {
              handleLogoutEmployee();
              return;
          }

          const token = JSON.parse(tokenString);
          const employee = await employeeAdapter.getEmployeeByToken(token);

          if (employee) {
              setToken(token);
              setIsAuthenticated(true);
              setExpiresAt(Date.now() + 7 * 24 * 60 * 60 * 1000); // Expira em 7 dias
          } else {
            handleLogoutEmployee();
          }
      } catch (error) {
          console.error("Erro ao renovar sessão:", error);
          handleLogoutEmployee();
      }
  };

  const isUserAuthenticated = () => expiresAt > Date.now();

  const updateEmployeeData = async (updatedFields: Partial<EmployeeResponseDto>) => {
    try {
      const tokenFromCookie = Cookies.get('employeeToken');
      const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;

      if (token && token.idEmployee !== undefined) {
        const updatedEmployee = await employeeAdapter.updateEmployee(token.idEmployee, updatedFields);

        setToken(updatedEmployee);
  
        const updatedEmployeeToken = { ...token, ...updatedFields };
        Cookies.set('employeeToken', JSON.stringify(updatedEmployeeToken), { expires: 7 });
      } else {
        console.error("ID do funcionário não encontrado no token.");
      }

    } catch (error) {
      console.error("Erro ao atualizar os dados do funcionário:", error);
      throw error;
    }
  };

  const contextValue = {
      token,
      isAuthenticated,
      handleLoginEmployee,
      handleLogoutEmployee,
      updateEmployeeData
  };

  return (
      <AuthContextEmployee.Provider value={contextValue}>
          {children}
      </AuthContextEmployee.Provider>
  );
};
