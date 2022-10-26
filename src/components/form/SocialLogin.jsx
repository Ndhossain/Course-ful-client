import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const SocialLogin = ({from, setError}) => {
    const navigate = useNavigate();
    const { providerLogin, loading, setLoading } = useAuth();

    const googleLogin = async () => {
        try {
            await providerLogin(googleProvider);
            navigate(from)
        } catch (err) {
            console.log(err);
            setError(err.message);
            setLoading(false);
        }
    }

    const githubLogin = async () => {
        try {
            await providerLogin(githubProvider);
            navigate(from)
        } catch (err) {
            console.log(err);
            setError(err.message);
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col gap-2 rounded-md">
            <button 
                type='button' 
                className="btn btn-outline gap-3"
                onClick={googleLogin}
                disabled={loading}
            >
                <FcGoogle /> Login with google
            </button>
            <button
                type='button'
                className="btn btn-outline gap-3"
                onClick={githubLogin}
                disabled={loading}
            >
                <FaGithub /> Login with github
            </button>
        </div>
    );
};

export default SocialLogin;