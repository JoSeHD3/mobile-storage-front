import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import "./components/Fontawesome";
import Test from './pages/Test';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ErrorSite from './pages/ErrorSite';
import Sidebar from './components/Sidebar';
import {MarginProvider} from './components/MarginContext';

function App() {
    const token = localStorage.getItem('accessToken');
    //const token = ".";

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
                                    
                                    <Route path="*" element={<ErrorSite />}/>
                                </Routes>
                            </main>
                        </React.Fragment>
                    }/>
                </Routes>
            </Router>
            </MarginProvider>
        </div>
    );
}

export default App;
