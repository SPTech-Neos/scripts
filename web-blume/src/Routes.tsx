import { 
    BrowserRouter, 
    Routes, 
    Route 
} from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import Test from './pages/Test';
import Auth from './pages/Auth/Auth';
import Feed from './pages/Feed/Feed';
import SelectAcc from './sections/Auth/SelectAcc/SelectAcc';

import { AuthContextProvider } from './contexts/User/AuthContextProviderEmployee';

function AppRoutes() {
    return (
        <>
           <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/test' element={<AuthContextProvider><Test /></AuthContextProvider>} />
                    <Route path='/auth' element={<Auth />} />
                    <Route path='/feed' element={<Feed />} />
                    <Route path='/test-select-acc' element={<SelectAcc intention="login" />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes;