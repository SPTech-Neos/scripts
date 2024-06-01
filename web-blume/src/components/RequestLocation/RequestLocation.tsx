import React, { useContext } from 'react';
import { AuthContextClient } from '../../contexts/User/AuthContextProviderClient'; 

const RequestLocation: React.FC = () => {
  const { isAuthenticated, userLocation, requestUserLocation } = useContext(AuthContextClient);

  const handleRequestLocation = () => {
    requestUserLocation();
  };

  return (
    <div>
      {isAuthenticated && (
        <div>
          <p>User is authenticated.</p>
          {userLocation ? (
            <div>
              <p>User location:</p>
              <p>CEP: {userLocation.cep}</p>
              <p>Street: {userLocation.address.street}</p>
              <p>City: {userLocation.address.city}</p>
              <p>State: {userLocation.address.state}</p>
              <p>Number: {userLocation.number}</p>
              <p>Floor: {userLocation.floor}</p>
              <p>Bloc: {userLocation.bloc}</p>
              <p>Complement: {userLocation.complement}</p>
            </div>
          ) : (
            <button onClick={handleRequestLocation}>Request User Location</button>
          )}
        </div>
      )}
    </div>
  );
};

export default RequestLocation;
