import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import SocialLogin from './SocialLogin';

const RegisterForm = () => {
    const [userInfo, setUserInfo] = useState({email: '', password: '', name: '', imageURL: ''});
    const [error, setError] = useState('');
    const [termsAcceptance, setTermsAcceptance] = useState(false);
    const { registerUser, loading, error: authError } = useAuth();
    const navigate = useNavigate();
    console.log(userInfo);

    const emailValidation = (e) => {
        setError('');
        if (!/^\S+@\S+\.\S+$/.test(e.target.value)){
            setError('Enter a valid email')
        }
        setUserInfo({...userInfo, email: e.target.value})
    }

    const passwordValidation = (e) => {
        console.log(e.target.value)
        setError('');
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e.target.value)){
            setError('Password should contain atleast 1 digit, 1 letter & 8 characters')
        };
        setUserInfo({...userInfo, password: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!error.email && !error.password && termsAcceptance) {
            registerUser(userInfo.email, userInfo.password, userInfo.name, userInfo.imageURL, () => {
                navigate('/')
            })
        }
    }

    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <p className='text-red-600'>{error}</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input onBlur={(e) => setUserInfo({...userInfo, name: e.target.value})} type="text" placeholder="full name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input onBlur={(e) => setUserInfo({...userInfo, imageURL: e.target.value})} type="text" placeholder="photo url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input onChange={(e) => emailValidation(e)} value={userInfo.email} type="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input onChange={(e) => passwordValidation(e)} value={userInfo.password} type="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer label justify-start gap-2">
                            <input onChange={() => setTermsAcceptance(!termsAcceptance)} type="checkbox" checked={termsAcceptance} className="checkbox-xs" />
                            <span className="label-text">I accept your <Link>Terms & Conditions</Link></span>
                        </label>
                    </div>
                    <p className='text-red-600'>{authError}</p>
                    <div className="form-control mt-6">
                        <button type='submit' disabled={!termsAcceptance && !loading ? true : false} className="btn btn-success bg-transparent hover:bg-success">Register</button>
                    </div>
                </form>
                <div className="divider">OR</div>
                <SocialLogin />
            </div>
        </div>
    );
};

export default RegisterForm;