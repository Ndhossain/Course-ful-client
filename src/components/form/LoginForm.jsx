import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import SocialLogin from './SocialLogin';

const LoginForm = () => {
    const [userInfo, setUserInfo] = useState({email: '', password: ''});
    const {loginUser, loading} = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInfo.email && userInfo.password) {
            loginUser(userInfo.email, userInfo.password)
        }
    }

    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input onChange={(e) => setUserInfo({...userInfo, email: e.target.value})} type="email" value={userInfo.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input onChange={(e) => setUserInfo({...userInfo, password: e.target.value})} type="password" value={userInfo.password} placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' disabled={loading} className="btn btn-success bg-transparent hover:bg-success">Log In</button>
                    </div>
                </form>
                <div className="divider">OR</div>
                <SocialLogin />
            </div>
        </div>
    );
};

export default LoginForm;