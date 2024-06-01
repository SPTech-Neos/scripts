import { createContext, useState, useEffect, useRef, ReactNode } from "react";
import Cookies from 'js-cookie';

import { EstablishmentResponseDto, EstablishmentRequestDto } from "../../utils/Establishment/establishment.types";
import { EstablishmentAdapter } from "../../adapters/Establishment/Establishment";

interface AuthContextType {
  token: EstablishmentResponseDto | null;
  isAuthenticated: boolean;
  handleLogoutEstablishment: () => void;
  handleUpdateEstablishment: (updatedFields: Partial<EstablishmentResponseDto>) => Promise<void>;
  handleCreateEstablishment: (establishmentRequestDto: EstablishmentRequestDto) => Promise<EstablishmentResponseDto | null>;
  handleDeleteEstablishment: (establishmentId: number) => Promise<boolean>;
  getEstablishmentById: (establishmentId: number) => Promise<EstablishmentResponseDto | null>;
}

export const AuthContextEstablishment = createContext<AuthContextType>({
  token: null,
  isAuthenticated: false,
  handleLogoutEstablishment: () => {},
  handleUpdateEstablishment: async () => {},
  handleCreateEstablishment: async () => null,
  handleDeleteEstablishment: async () => false,
  getEstablishmentById: async () => null,
});

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [token, setToken] = useState<EstablishmentResponseDto | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const establishmentAdapter = new EstablishmentAdapter();
  const renewedSession = useRef(false);

  useEffect(() => {
    if (!renewedSession.current) {
      renewSession();
      renewedSession.current = true;
    }
  }, []);

  const handleLogoutEstablishment = () => {
    Cookies.remove('establishmentInfo');
    setToken(null);
    setIsAuthenticated(false);
  };

  const renewSession = async () => {
    try {
      const tokenString = Cookies.get('establishmentInfo');

      if (!tokenString) {
        handleLogoutEstablishment();
        return;
      }

      const token = JSON.parse(tokenString);
      const establishment = await establishmentAdapter.getEstablishmentById(token.establishmentId);

      if (establishment) {
        setToken(token);
        setIsAuthenticated(true);
      } else {
        handleLogoutEstablishment();
      }
    } catch (error) {
      console.error("Erro ao renovar sessão:", error);
      handleLogoutEstablishment();
    }
  };

  const handleUpdateEstablishment = async (updatedFields: Partial<EstablishmentResponseDto>) => {
    try {
      const tokenFromCookie = Cookies.get('establishmentInfo');
      const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;

      if (token && token.establishmentId !== undefined) {
        const updatedEstablishment = await establishmentAdapter.update(token.idEstablishment, updatedFields);

        setToken(updatedEstablishment);

        const updatedEstablishmentToken = { ...token, ...updatedFields };
        Cookies.set('establishmentInfo', JSON.stringify(updatedEstablishmentToken), { expires: 7 });
      } else {
        console.error("ID do estabelecimento não encontrado no token.");
      }

    } catch (error) {
      console.error("Erro ao atualizar os dados do estabelecimento:", error);
      throw error;
    }
  };

  const handleCreateEstablishment = async (establishmentRequestDto: EstablishmentRequestDto): Promise<EstablishmentResponseDto | null> => {
    try {
      return await establishmentAdapter.register(establishmentRequestDto);
    } catch (error) {
      console.error("Erro ao criar estabelecimento:", error);
      return null;
    }
  };

  const handleDeleteEstablishment = async (establishmentId: number): Promise<boolean> => {
    try {
      return await establishmentAdapter.delete(establishmentId);
    } catch (error) {
      console.error("Erro ao deletar estabelecimento:", error);
      return false;
    }
  };

  const getEstablishmentById = async (establishmentId: number): Promise<EstablishmentResponseDto | null> => {
    try {
      return await establishmentAdapter.getEstablishmentById(establishmentId);
    } catch (error) {
      console.error("Erro ao buscar estabelecimento por ID:", error);
      return null;
    }
  };

  const contextValue = {
    token,
    isAuthenticated,
    handleLogoutEstablishment,
    handleUpdateEstablishment,
    handleCreateEstablishment,
    handleDeleteEstablishment,
    getEstablishmentById
  };

  return (
    <AuthContextEstablishment.Provider value={contextValue}>
      {children}
    </AuthContextEstablishment.Provider>
  );
};
