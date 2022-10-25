import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const SocialLogin = () => {
    const navigate = useNavigate();
    const { providerLogin, loading } = useAuth();

    return (
        <div className="flex flex-col gap-2 rounded-md">
            <button 
                type='button' 
                className="btn btn-outline gap-3"
                onClick={() => {
                    providerLogin(googleProvider, () => {
                        navigate('/')
                    });
                }}
                disabled={loading}
            >
                <FcGoogle /> Login with google
            </button>
            <button
                type='button'
                className="btn btn-outline gap-3"
                onClick={() => {
                    providerLogin(githubProvider, () => {
                        navigate('/')
                    });
                }}
                disabled={loading}
            >
                <FaGithub /> Login with github
            </button>
        </div>
    );
};

export default SocialLogin;