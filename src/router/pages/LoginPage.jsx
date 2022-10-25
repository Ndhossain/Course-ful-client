import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const LoginPage = () => {
    const [loginActive, setLoginActive] = useState(true);
    const [registerActive, setRegisterActive] = useState(false);
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="btn-group">
                    <NavLink 
                        onClick={() => {
                            setLoginActive(true);
                            setRegisterActive(false);
                        }}
                        to='/login'
                        className={`btn ${loginActive ? 'btn-success' : ''}`}
                    >
                        Login
                    </NavLink>
                    <NavLink
                        onClick={() => {
                            setRegisterActive(true);
                            setLoginActive(false);
                        }}
                        to='/login/register'
                        className={`btn ${registerActive ? 'btn-success' : ''}`}
                    >
                        Register
                    </NavLink>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default LoginPage;