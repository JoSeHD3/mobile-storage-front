import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Cookies from 'js-cookie';

import Test from './pages/Test';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ErrorSite from './pages/ErrorSite';
import Profile from './pages/Profile';
import ChangeData from './pages/ChangeData';
import CommissionsHistory from './pages/CommissionsHistory';
import CommissionsDetails from './pages/CommissionsDetails';
import DeactivateAccount from './pages/DeactivateAccount';
import "./components/Fontawesome";
import Sidebar from './components/Sidebar';
import {MarginProvider} from './components/MarginContext';
import LogoutButton from './components/LogoutButton';
import Firm from './pages/Firm';
import DeleteCompany from './pages/DeleteCompany';
import ManageCommissions from './pages/ManageCommissions';
import ManageEmployees from './pages/ManageEmployees';
import ManageVehicles from './pages/ManageVehicles';
import AddTrailer from './pages/AddTrailer';
import AddVehicle from './pages/AddVehicle';
import RoutesList from './pages/RoutesList';
import AnnounceRide from './pages/AnnounceRide';
import SearchCargo from './pages/SearchCargo';
import SearchCargoDetails from './pages/SearchCargoDetails';
import Commissions from './pages/Commissions';
import RouteDetails from './pages/RouteDetails';


function App() {
    //const token = localStorage.getItem('token');
    const token = ".";
	
const addressRole = 'http://127.0.0.1:8086/userRole';

    const [updateUser, setUpdateUser] = useState(true);    //hook for forcing app to change user's role without reloading site

    Cookies.set('userRole', 'manager', {secure: true, sameSite: 'strict'});

    return (
        <div className="app">
            <MarginProvider>
            <Router>
                <Routes>
                    <Route path="/*" element={
                        <React.Fragment>
                            {token ? <Sidebar /> : null }
                            <main>
                                <Routes>
                                    <Route index element={token ? <Home /> : <Login />} />
                                    <Route path="/pages/home" element={token ? <Home /> : <Login />} />
                                    <Route path="/pages/test" element={token ? <Test /> : <Login />} />
                                    <Route path="/register" element={!token ? <Register /> : <Home />}/>
                                    <Route path="/pages/profile" element={token ? <Profile /> : <Login />} />
                                    <Route path="/pages/profile/changedata" element={token ? <ChangeData /> : <Login />} />
                                    <Route path="/pages/profile/commissionshistory" element={token ? <CommissionsHistory /> : <Login />} />
									<Route path="/pages/profile/commissionshistory/commissionsdetails/:commissionId" element={token ? <CommissionsDetails /> : <Login />} />
                                    <Route path="/pages/profile/deactivateaccount" element={token ? <DeactivateAccount /> : <Login />} />
                                    <Route path="/pages/company" element={token ? <Firm /> : <Login />} />
                                    <Route path="/pages/company/deletecompany" element={token ? <DeleteCompany /> : <Login />} />
                                    <Route path="/pages/company/manageemployees" element={token ? <ManageEmployees /> : <Login />} />
                                    <Route path="/pages/company/managecommissions" element={token ? <ManageCommissions /> : <Login />} />
                                    <Route path="/pages/company/managevehicles" element={token ? <ManageVehicles /> : <Login />} />
                                    <Route path="/pages/company/addvehicle" element={token ? <AddVehicle /> : <Login />} />
                                    <Route path="/pages/company/addtrailer" element={token ? <AddTrailer /> : <Login />} />
                                    <Route path="/pages/company/routeslist" element={token ? <RoutesList /> : <Login />} />
                                    <Route path="/pages/company/routeslist/routedetails/:routeId" element={token ? <RouteDetails /> : <Login />} />
                                    <Route path="/pages/company/announceride" element={token ? <AnnounceRide /> : <Login />} />
                                    <Route path="/pages/company/searchcargo" element={token ? <SearchCargo /> : <Login />} />
                                    <Route path="/pages/company/searchcargo/searchcargodetails/:commissionId" element={token ? <SearchCargoDetails /> : <Login />} />
                                    <Route path="/pages/commision" element={token ? <Commissions /> : <Login />} />

                                    <Route path="*" element={<ErrorSite />}/>
                                </Routes>
                            </main>
                        </React.Fragment>
                    }/>
                </Routes>
            </Router>
            </MarginProvider>
            {token ? <LogoutButton /> : "" }
        </div>
    );
}

export default App;
