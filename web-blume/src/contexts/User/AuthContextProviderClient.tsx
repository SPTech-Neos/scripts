import { createContext, useState, useEffect, useRef } from "react";
import Cookies from 'js-cookie';

import { ClientAdapter } from "../../adapters/User/Client";
import { ClientResponseDto, ClientLoginDto, ClientRequestDto } from "../../utils/client.types";
import { Local } from "../../utils/Establishment/local.types";

interface AuthContextType {
  token: object | ClientResponseDto | null;
  isAuthenticated: boolean;
  handleLoginClient: (clientLoginDto: ClientLoginDto) => Promise<object | ClientResponseDto | null>;
  userLocation: Local | null;
  requestUserLocation: () => void;
  handleLogoutClient: () => void;
  handleUpdateClient: (updatedFields: Partial<ClientResponseDto>) => Promise<void>;
  handleCreateClient: (clientRequestDto: ClientRequestDto) => Promise<ClientResponseDto | null>;
  handleDeleteClient: (clientId: number, token: string) => Promise<boolean>;
  getClientById: (clientId: number, token: string) => Promise<ClientResponseDto | null>;
}

export const AuthContextClient = createContext<AuthContextType>({
  token: null,
  isAuthenticated: false,
  userLocation: null,
  requestUserLocation: () => {},
  handleLoginClient: async () => null,
  handleLogoutClient: () => {},
  handleUpdateClient: async () => {},
  handleCreateClient: async () => null,
  handleDeleteClient: async () => false,
  getClientById: async () => null,
});

export const AuthContextProvider = ({ children }: { children: JSX.Element }) => {
  const [token, setToken] = useState<object | ClientResponseDto>({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userLocation, setUserLocation] = useState<Local | null>(null);

  const clientAdapter = new ClientAdapter();
  const renewedSession = useRef(false);

  useEffect(() => {
    if (!renewedSession.current) {
      renewSession();
      requestUserLocation();
      renewedSession.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  const requestUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("LATITUDE: " + latitude + "LONGITUDE: " + longitude);
  
          // Fazer uma solicitação para obter os detalhes do endereço com base nas coordenadas de latitude e longitude
          fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
            .then(response => response.json())
            .then(data => {
              // Extrair os dados relevantes do objeto de resposta
              const { address } = data;
              console.log("ADDRESS: " + JSON.stringify(address));
  
              const userLocal: Local = {
                idLocal: 0,
                cep: address.postcode || '',
                address: {
                  idAddress: 0,
                  street: address.road || '', 
                  city: address.city || '', 
                  state: address.state || ''
                },
                number: 0,
                floor: 0,
                bloc: '',
                complement: ''
                ,
              };
  
              setUserLocation(userLocal);
              console.log("LOCAL: " + JSON.stringify(userLocal));
            })
            .catch(error => {
              console.error('Error fetching address details:', error);
            });
        },
        (error) => {
          console.error('Error fetching current location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };  

  const handleLoginClient = async (clientLoginDto: ClientLoginDto): Promise<object | ClientResponseDto | null> => {
    try {
      const { email, password } = clientLoginDto;
      const token = await clientAdapter.login({ email, password });

      if (token !== null && 'clientId' in token) {
        setToken(token);
        setIsAuthenticated(true);
        Cookies.set('clientInfo', JSON.stringify(token), { expires: 7 });

        return token as ClientResponseDto;
      } else {
        console.error("Login falhou: Token de autenticação é inválido ou nulo.");
        return null;
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  };

  const handleLogoutClient = () => {
    Cookies.remove('clientInfo');
    setToken({});
    setIsAuthenticated(false);
  };

  const renewSession = async () => {
    try {
      const tokenString = Cookies.get('clientInfo');

      if (!tokenString) {
        handleLogoutClient();
        return;
      }

      const token = JSON.parse(tokenString);
      const client = await clientAdapter.getClientById(token.clientId, token.token);

      if (client) {
        setToken(token);
        setIsAuthenticated(true);
      } else {
        handleLogoutClient();
      }
    } catch (error) {
      console.error("Erro ao renovar sessão:", error);
      handleLogoutClient();
    }
  };

  const handleUpdateClient = async (updatedFields: Partial<ClientResponseDto>) => {
    try {
      const tokenFromCookie = Cookies.get('clientInfo');
      const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;

      if (token && token.clientId !== undefined) {
        const updatedClient = await clientAdapter.update(token.clientId, updatedFields, token.token);

        if (updatedClient) {
          setToken(updatedClient);

          const updatedClientToken = { ...token, ...updatedFields };
          Cookies.set('clientInfo', JSON.stringify(updatedClientToken), { expires: 7 });
        } else {
          console.error("Atualização do cliente falhou: resposta do servidor é nula.");
        }
      } else {
        console.error("ID do Client não encontrado no token.");
      }
    } catch (error) {
      console.error("Erro ao atualizar os dados do cliente:", error);
      throw error;
    }
  };

  const handleCreateClient = async (clientRequestDto: ClientRequestDto): Promise<ClientResponseDto | null> => {
    try {
      return await clientAdapter.register(clientRequestDto);
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
      return null;
    }
  };

  const handleDeleteClient = async (clientId: number, token: string): Promise<boolean> => {
    try {
      return await clientAdapter.deleteClient(clientId, token);
    } catch (error) {
      console.error("Erro ao deletar cliente:", error);
      return false;
    }
  };

  const getClientById = async (clientId: number, token: string): Promise<ClientResponseDto | null> => {
    try {
      return await clientAdapter.getClientById(clientId, token);
    } catch (error) {
      console.error("Erro ao buscar cliente por ID:", error);
      return null;
    }
  };

  const contextValue = {
    token,
    isAuthenticated,
    userLocation,
    requestUserLocation,
    handleLoginClient,
    handleLogoutClient,
    handleUpdateClient,
    handleCreateClient,
    handleDeleteClient,
    getClientById
  };

  return (
    <AuthContextClient.Provider value={contextValue}>
      {children}
    </AuthContextClient.Provider>
  );
};
