import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';
import { AuthScreen } from '../pages/auth/AuthScreen';
import PrivateRoute from './private.route';


export default function AppRoutes() {
    const { loading } = useContext(AuthContext);

    if (loading) {
        return (<></>)
    }

    return (
        <Routes>
            <Route path="/" element={<AuthScreen />} />
            <Route path="/beers" element={<PrivateRoute />} />
        </Routes>
    );
}