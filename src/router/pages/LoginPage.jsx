import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoginForm from '../../components/form/LoginForm';
import RegisterForm from '../../components/form/RegisterForm';

const LoginPage = () => {
    const [loginActive, setLoginActive] = useState(true);
    const [registerActive, setRegisterActive] = useState(false);
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="btn-group">
                    <button
                        type='button' 
                        onClick={() => {
                            setLoginActive(true);
                            setRegisterActive(false);
                        }}
                        to='/login'
                        className={`btn ${loginActive ? 'btn-success' : ''}`}
                    >
                        Login
                    </button>
                    <button
                        type='button'
                        onClick={() => {
                            setRegisterActive(true);
                            setLoginActive(false);
                        }}
                        to='/login/register'
                        className={`btn ${registerActive ? 'btn-success' : ''}`}
                    >
                        Register
                    </button>
                </div>
                {loginActive && <LoginForm from={from} />}
                {registerActive && <RegisterForm from={from} />}
            </div>
        </div>
    );
};

export default LoginPage;