import {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';
import { BeersScreen } from '../pages/beers/BeersScreen';

const PrivateRoute = ({Component}: any) => {
  const { authenticated } = useContext(AuthContext);

  return authenticated ? (
    <BeersScreen/>
  ) : (
    <Navigate to={{ pathname: '/'}} />
  );
};

export default PrivateRoute;
