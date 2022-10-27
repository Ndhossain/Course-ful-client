import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import toast from 'react-hot-toast';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const SocialLogin = ({from, setError}) => {
    const navigate = useNavigate();
    const { providerLogin, loading, setLoading } = useAuth();

    const googleLogin = async () => {
        try {
            setError('');
            await providerLogin(googleProvider);
            toast.success('Successfully Logged In');
            navigate(from, {replace: true})
        } catch (err) {
            console.log(err);
            setError(err.message);
            setLoading(false);
            toast.error('Something Went Wrong');
        }
    }

    const githubLogin = async () => {
        try {
            setError('');
            await providerLogin(githubProvider);
            toast.success('Successfully Logged In');
            navigate(from, {replace: true})
        } catch (err) {
            console.log(err);
            setError(err.message);
            setLoading(false);
            toast.error('Something Went Wrong');
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